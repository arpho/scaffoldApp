import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable, Subscription } from 'rxjs';
import 'firebase/auth';
import 'firebase/database';
import { DatabaseReference, getDatabase, ref, push } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, Auth, UserCredential, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth'
import { UserModel } from '../models/userModel'
import {credentials } from "../../../configs/credentials"
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
firebase.initializeApp(credentials.firebase);
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth

  constructor() { }

  loginUser(email: string, password: string): Promise<any> {
    this.auth = getAuth()

    return signInWithEmailAndPassword(this.auth, email, password);
  }

  resetPassword(email: string): Promise<void> {
    const user = getAuth()
    return sendPasswordResetEmail(user,email);
  }

  signupUser(user:UserModel,  next?, error?, complete?): Subscription {
    return this.createUserObserver(user.email, user.password).subscribe({
      next: v => {
        console.log("sending verification email",v)
        const userId = v['user'].uid;
        sendEmailVerification(v['user'])
        const app = initializeApp(credentials.firebase)
        const db = getFirestore(app)
        const newUser = new UserModel(user).load(user).setKey(userId)

        console.log('new user',newUser.serialize())
        setDoc(doc(db,"users",userId),newUser.serialize())
        if (next) {
          next(v['user'])
        }
      },
      error: e => {
        console.error('errore', e)

        if (error) {
          error(e)
        }
      },
      complete: () => {
        console.log('ok')
        if (complete) {
          console.log("completing")
          complete()
        }
      }
    })

  }
  getCustomclaims(next:(claims)=>void){

    const auth = getAuth()
    onAuthStateChanged(auth,async (user)=>{

      if(user){
        await user.getIdTokenResult(true).then(result=>{
          next(result.claims)
        })
      }
    })
  }


  createUserObserver(email, pass): Observable<unknown> {
    const auth = getAuth()
    const observer = new Observable(subscriber => {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential: UserCredential) => {
          subscriber.next(userCredential);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
          subscriber.complete();
        });
    });

    return observer;
  }

  logoutUser(): Promise<void> {
    const user = getAuth()
return  user.signOut()

  }

}