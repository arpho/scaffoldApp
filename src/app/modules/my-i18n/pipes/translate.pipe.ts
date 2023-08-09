import { Pipe, PipeTransform } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { configs } from 'src/app/configs/configs';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private servie:TranslateConfigService){

  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return (configs.i18n[this.servie.currentLanguage]["dictionary"][value])?configs[this.servie.currentLanguage]['dictionary'][value]:value
  }

}
