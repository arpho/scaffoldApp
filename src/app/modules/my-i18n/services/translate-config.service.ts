import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  _currentLanguage: string

  set currentLanguage (lang){this._currentLanguage= lang}
  get currentLanguage (){
    return this._currentLanguage
  }

  constructor(private service:TranslateService) { 
    this.currentLanguage = service.getDefaultLang()
  }
}
