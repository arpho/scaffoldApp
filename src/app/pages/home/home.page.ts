import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { credentials } from 'src/app/configs/credentials';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  submitText=""
  formFields=[
    new TextboxQuestion({
      key:"documen_id",
      label:"document id"
    })
  ]

  constructor() { }
  filter(ev){
    console.log("typing",ev)
  }

  submit(ev){
    console.log("submitted",ev)
  }

  async ngOnInit() {
    const isKarma = document.getElementsByTagName("title")[0].innerHTML === 'Karma';
    if(!isKarma) // we check it is not a test
    {
      const app = initializeApp(credentials.firebase)
      const auth = getAuth()
      const onAuthStateChangedHandler =async  (user)=>{
        console.log("got user",user)
        const token = await user.getIdTokenResult()
        console.log("token", token.token)
        this.submitText = `get document for user ${user.uid}`
      }
      onAuthStateChanged(auth,onAuthStateChangedHandler)
    }

  }

}
