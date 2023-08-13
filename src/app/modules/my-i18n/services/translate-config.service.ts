import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  setLanguage(lang: string) {
    this._currentLanguage = lang
    this.service.use(lang)
  }
  _currentLanguage: string

  set currentLanguage (lang){
    this._currentLanguage= lang
  this.service.use(lang)
  }
  get currentLanguage (){
    return this._currentLanguage
  }

  constructor(private service:TranslateService) { 
    this.currentLanguage = service.getDefaultLang()?service.getDefaultLang():'en' 
  }
}
