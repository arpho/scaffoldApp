import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemModule } from './modules/item/item.module';
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module';
import { HelpersModule } from './modules/helpers/helpers.module';
import { UserModule } from './modules/user/user.module';
import { SelectorItemsPage } from './modules/item/pages/selector-items/selector-items.page';
import { EditUserPage } from './modules/user/pages/edit-user/edit-user.page';
import { ProfilePage } from './modules/user/pages/profile/profile.page';
import { NewCustomerPage } from './pages/customers/create/new-customer/new-customer.page';
import { UpdateCustomerPage } from './pages/customers/edit/update-customer/update-customer.page';
import { ScatterComponent } from './components/scatter/scatter.component';
import { BarComponent } from './components/bar/bar.component';
import { FilterPopupPage } from './modules/item/pages/filter-popup/filter-popup.page';
import { CookiesLawComponent } from './components/cookies-law/cookies-law.component';
import { MenuPage } from './pages/menu/menu.page';
import { ResetPasswordPage } from './modules/user/pages/reset-password/reset-password.page';



@NgModule({
    declarations: [
        AppComponent,
        SelectorItemsPage,
        EditUserPage,
        ProfilePage,
        NewCustomerPage,
        UpdateCustomerPage,
        ScatterComponent,
        ResetPasswordPage,
        BarComponent,
        FilterPopupPage,
        CookiesLawComponent,
        MenuPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        DynamicFormModule,
        ItemModule,
        HelpersModule,
        UserModule,
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}