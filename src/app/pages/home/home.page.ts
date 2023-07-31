import { Component, OnDestroy, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { credentials } from 'src/app/configs/credentials';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { AuthService } from 'src/app/modules/user/services/auth.service';
import { KempelenService } from 'src/app/services/kempelen-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {
  submitText=""
  subscription:Subscription
  formFields=[
    new TextboxQuestion({
      key:"document_id",
      label:"document id"
    })
  ]

  constructor(private service:KempelenService,private authorization:AuthService) { }
  ngOnDestroy(): void {
    if( this.subscription
  )
  {
this.subscription.unsubscribe()
  }
}
  filter(ev){
    console.log("typing",ev)
  }

  async submit(ev){
    console.log("submitted",ev)
    this.subscription =  this.service.fetchAsset(await this.authorization.getLoggedUser_Id(),ev.document_id,await this.authorization.getPromisedToken()).subscribe(asset=>{
      console.log("kempelen send this",asset)
    }, (err)=>{
      console.error(err)
    })
  }

  async ngOnInit() {
    const isKarma = document.getElementsByTagName("title")[0].innerHTML === 'Karma';
    if(!isKarma) // we check it is not a test
    {
      const app = initializeApp(credentials.firebase)
      const auth = getAuth()
      const onAuthStateChangedHandler =async  (user)=>{
        this.submitText = `fetch document for user ${user.uid}`
        const token2 = await this.authorization.getPromisedToken()
      }
      onAuthStateChanged(auth,onAuthStateChangedHandler)
    }

  }

}
