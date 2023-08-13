import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss'],
})
export class SwitchLanguageComponent implements OnInit {
  
  language: string;

  constructor(
    private actionSheetController:ActionSheetController,
    private service:TranslateConfigService) { }

  ngOnInit() {}


  async changeLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Languages',
      buttons: [{
        text: 'English',
        icon: 'language-outline',
        handler: () => {
          this.language = 'en';
          this.service.setLanguage('en');
        }
      }, {
        text: 'Spanish',
        icon: 'language-outline',
        handler: () => {
          this.language = 'es';
          this.service.setLanguage('es');
        }
      }, {
        text: 'Italiano',
        icon: 'language-outline',
        handler: () => {
          this.language = 'it';
          this.service.setLanguage('it');
        }
      }, {
        text: 'Português',
        icon: 'language-outline',
        handler: () => {
          this.language = 'pt';
          this.service.setLanguage('pt');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
