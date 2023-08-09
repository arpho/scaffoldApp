import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  _currentLanguage: string

  set currentLanguage (lang){this._currentLanguage= lang}
  get currentLanguage (){
    return this._currentLanguage
  }

  constructor() { }
}
