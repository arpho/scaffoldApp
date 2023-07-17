// tslint:disable: quotemark
import { Injectable, OnInit } from "@angular/core";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DatabaseReference, getDatabase,ref, onValue,remove,set,push, update } from "firebase/database";
import { ItemServiceInterface } from "../../item/models/ItemServiceInterface";
import { UserModel } from "../models/userModel";
import { ItemModelInterface } from "../../item/models/itemModelInterface";
import { BehaviorSubject, Observable } from 'rxjs';
import { getFunctions, httpsCallable } from "firebase/functions";
import { configs } from "src/app/configs/configs";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { credentials } from "src/app/configs/credentials";
import {  collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class UsersService implements ItemServiceInterface, OnInit {
  public itemsListReference: DatabaseReference;
  items_list: Array<UserModel> = []
  _items: BehaviorSubject<Array<UserModel>> = new BehaviorSubject([])
  _loggedUser: BehaviorSubject<UserModel> = new BehaviorSubject(new UserModel)
  loggedUser: Observable<UserModel> = this._loggedUser.asObservable()
  readonly items: Observable<Array<UserModel>> = this._items.asObservable()
static loggedUser:UserModel
db: any
usersRef
  constructor() {
    this.loadDataAndPublish()
    const app = initializeApp(credentials.firebase)
    this.db = getFirestore(app)
    this.usersRef = collection(this.db,'users')
    this.items.subscribe(items=>{
      
    })


  }
  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  itemsListRef: DatabaseReference;
  reference='userProfile'
  populateItems = async (UsersListSnapshot) => {
    this.items_list = [];
    UsersListSnapshot.forEach(snap => {
      const user = new UserModel(undefined, snap.key).load(snap.data()).setKey(snap.id)
      this.items_list.push(user);

    });
    return this.items_list
  }
  ngOnInit(): void {
    console.log("init")
  }

  loadDataAndPublish() {
    const auth = getAuth();
    onAuthStateChanged(auth,this.authStateChangeHandler);
  }

  authStateChangeHandler = async () => {
    const q = query(collection(this.db, "users"));
    const querySnapshot = await getDocs(q);
    const users = await this.populateItems(querySnapshot);
    this._items.next(users);
  }

  async getItem(key: string) {
    const docSnap = await getDoc(this.usersRef)
     return new UserModel(docSnap.data())
  }

  FetchRole(level:number){
    return configs.accessLevel.filter(accesslevel=>accesslevel.value==level)[0]
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  //
   callCloudPushUser(user:{}){
	const functions = getFunctions()
	

  const insertUser = httpsCallable(functions,'adminAddUserProfile')
  return insertUser(user).then((msg)=>{
	  console.log('insert use',msg)
  }).catch((error)=>{
console.error(error);
  });

  }

  setLoggedUser(user: ItemModelInterface) {
    console.log('setting user', user)
    this._loggedUser.next(new UserModel(user, user['uid']));
    UsersService.loggedUser= new UserModel(user, user['uid'])
    return this.loggedUser;
  }

  deleteItem(key: string) {

    const itemRef = ref(this.db,this.reference+key)
    return remove(itemRef)
    
  }

  getEmptyItem() {
    return new UserModel();
  }

  async  setItem(item: ItemModelInterface) {
 
     return  setDoc(doc(this.db,"users",item.key),item.serialize())
   }


   async  createItem(item: ItemModelInterface) {
    console.log("creating document",item)
  
      return  setDoc(doc(this.db,"users",item.key),item.serialize())
    }
   
  getEntitiesList(): DatabaseReference{
    return this.itemsListReference;
  }

 async  updateItem(item: ItemModelInterface) {
    return setDoc(doc(this.db,"users",item.key),item.serialize())
  }
}
