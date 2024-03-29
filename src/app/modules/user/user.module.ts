import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './pages/login/login.page';
import { AuthGuard } from './services/authguard.service';
import { RoleGuardService } from './services/role-guards.service';
import { routes } from './user-routing.module'
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { LogoutUserComponent } from './components/logout-user/logout-user.component';
import { LoginComponent } from './components/login/login.component';
import { Css3LoginComponent } from './components/css3-login/css3-login.component';
import { LoginDefinitivoComponent } from './components/login-definitivo/login-definitivo.component';
import { SleekLoginComponent } from './components/sleek-login/sleek-login.component';
import { SleekResetComponent } from './components/sleek-reset/sleek-reset.component';



@NgModule({
  declarations: [
    LoginPage,
    LogoutUserComponent,
    LoginComponent,
   LoginDefinitivoComponent,
   SleekLoginComponent,
   SleekResetComponent
    
  ],
  imports: [FormsModule,
     ReactiveFormsModule,
      IonicModule.forRoot(),
       RouterModule.forChild(routes),
    CommonModule,
     DynamicFormModule,
  ],
  exports:[
    LogoutUserComponent,
    LoginComponent,
    LoginDefinitivoComponent,
    SleekLoginComponent
  ]
})
export class UserModule { }

