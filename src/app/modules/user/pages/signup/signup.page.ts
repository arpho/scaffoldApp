import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { QuestionBase } from 'src/app/modules/dynamic-form/models/question-base';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { EmailQuestion } from 'src/app/modules/dynamic-form/models/question-email';
import { UserModel } from '../../models/userModel';
import { PasswordQuestion } from 'src/app/modules/dynamic-form/models/password-question';
import { UsersService } from '../../services/users.service';
import { servicesVersion } from 'typescript';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';
import { CheckBoxQuestion } from 'src/app/modules/dynamic-form/models/question-checkBox';
import { configs } from 'src/app/configs/configs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, OnDestroy {
  public signupForm: UntypedFormGroup;
  public usersFields: any
  public modal: any;
  subscription: Subscription
  user:UserModel
  constructor(
    public modalCtrl: ModalController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    public service:UsersService
  ) {
    this.usersFields = [new TextboxQuestion({
      key: 'firstName',
      label: 'nome',
      required: true,
      order: 1,
      value:!configs.locked?"Giuseppe":''

    }), new TextboxQuestion({
      key: 'lastName',
      label: 'cognome',
      required: true,
      order: 2,
      value:!configs.locked?"D'Amico":''

    }), new EmailQuestion({
      key: 'email',
      label: 'email',
      required: true,
      order: 3,
      value:!configs.locked?"damicogiuseppe77@gmail.com":''

    }),

    new PasswordQuestion({
      key: 'password',
      label: 'password', required: configs.locked,
      retypePassword: true,
    }),
    new TextboxQuestion({key:'displayName',
  label:"displayName"}),
  new CheckBoxQuestion({
    key:"GDPR",
    label:"Autorizzazione alla gestione dei dati personali",
  text:"Autorizzo il trattamento dei miei dati personali "+
  " ai sensi dell’art. 13 del Decreto Legislativo 30 giugno 2003,"+
  " n. 196 “Codice in materia di protezione dei dati personali” e dell’art. 13 del GDPR (Regolamento UE 2016/679).x",
required:true,
value:!configs.locked,
validator:Validators.requiredTrue
})
  ]
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  ngOnInit() { }

  filter(ev) {
  }
  dismiss(payment?) {
    this.modalCtrl.dismiss(payment)
  }

  async submit(ev) {

    console.log("submitting user",ev,this.user)
    this.user = new UserModel().load(ev)
    console.log("loaded user",this.user)
    this.signupUser(this.signupForm, this.user)


  }

  async signupUser(signupForm: UntypedFormGroup, user: UserModel): Promise<void> {
  
      const email: string = signupForm.value.email.email;
      const password: string = signupForm.value.password;
      const successHandler = async (userCredentials) => {
        console.log("got credentials",userCredentials)
        user.key = userCredentials.user.uid
      
        this.service.createItem(user)
        this.modal.dismiss().then(async () => {const alert = await this.alertCtrl.create({
          message:`utente ${user.getTitle().value}  creato correttamente`,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
        await alert.onDidDismiss()
        this.router.navigateByUrl('home');
       

        })
      }
      const complete = ()=>{
        console.log("completed")
 
        this.router.navigateByUrl('home');
      }

      const errorHandler = (error) => {
        console.log("errore errore")
        this.modal.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            message: error.message?error.message:`utente ${user.getTitle().value} non creato`,
            buttons: [{ text: 'Ok', role: 'cancel' }],
          });
          await alert.present();
          await alert.onDidDismiss()
          
        });
      }
      this.authService.signupUser(user, successHandler, errorHandler,complete)

      this.modal = await this.loadingCtrl.create();
      await this.modal.present();
    }
  }

