import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Figura } from '../business/figura';
import { IntervalCalculator } from '../business/intervalCalculator';
import { makeData4D3 } from '../business/makeData4D3';
import { Neutro } from '../business/neutro';
import { Piu2meno90 } from '../business/piu2meno90';
import { Vertibile } from '../business/vertibile';
import { CookiesLawComponent } from '../components/cookies-law/cookies-law.component';
import { configs } from '../configs/configs';
import { Extraction } from '../models/extractionModel';
import { Interval } from '../models/interval';
import { TransformationInterface } from '../models/trasformationInterface';
import { OptionsMaker } from '../modules/dynamic-form/helpers/optionMaker';
import { DateQuestion } from '../modules/dynamic-form/models/question-date';
import { DropdownQuestion } from '../modules/dynamic-form/models/question-dropdown';
import { SelectorQuestion } from '../modules/dynamic-form/models/question-selector';
import { Utilities4Date } from '../modules/helpers/dateHelper';
import { CheckEnabled } from '../modules/helpers/menu/models/business/checkers/checkEnabled';
import { CheckExpiration } from '../modules/helpers/menu/models/business/checkers/checkExpiration';
import { CheckRole } from '../modules/helpers/menu/models/business/checkers/checkRole';
import { MessageBrokerService } from '../modules/helpers/services/messages/message-broker.service';
import { MyToastService } from '../modules/helpers/services/toaster/my-toast-service.service';
import { DateModel } from '../modules/user/models/birthDateModel';
import { AuthService } from '../modules/user/services/auth.service';
import { ExtractionService } from '../services/extractions/estrazioni.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder-page.html',
  styleUrls: ['./folder-page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  selectedFunction: TransformationInterface
  showSpinner = true
  weels = configs.weels
  weel1
  dateEstrazioni: string[] = []
  formFields: any[]
  ambata11: number
  ambata21: number
  ambata12: number
  ambata22: number
  barData11: Interval[]
  barData12: Interval[]
  barData21: Interval[]
  barData22: Interval[]
  barData112: Interval[]
  barData122: Interval[]
  barData211: Interval[]
  barData221: Interval[]
  ruota1
  showGraph = false
  estrazione1: Extraction
  estrazione2: Extraction
  trasformazione2: Extraction
  trasformazione1: Extraction
  ruota2
  weelOne: Extraction
  estrazioniItems: Extraction[]
  selectedData: string
  selectedData1: string
  selectedData2: string
  selectedData3: string
  selectedData4: string
  selectedData5: string
  neutralFunction = new Neutro()
  step = 0
  index = 0
  canAdd = false
  enabled = false
  expired = true
  authorized = false
  appliedFunction = ""
  WeelOne: any;
  weel2: string;
  submitText: string
  WeelTwo: Extraction;
  functionsList = [new Vertibile(), new Figura(), new Piu2meno90()]
  functionsTitle: string[] = this.functionsList.map(f => f.title)

  constructor(
    private popoverController: PopoverController,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toaster: MyToastService,
    public estrazioni: ExtractionService,
    public modalCtrl: ModalController,
    public messages: MessageBrokerService) {
    messages.subscribeTo("selectedFunction", (transformation: TransformationInterface) => {
      this.selectedFunction = transformation
      this.appliedFunction = ` funzione applicata: ${transformation.title}`
    })
  }

  setStepDates(startFrom: number, step: number) {
    if (startFrom + step + 1 <= this.dateEstrazioni.length && startFrom + step >= 0) {
      this.selectedData3 = this.dateEstrazioni[startFrom + step]
      this.selectedData4 = this.dateEstrazioni[startFrom + step + 1]
      this.selectedData5 = this.dateEstrazioni[startFrom + step + 2]
    }

  }

  previous() {
    this.step += 1
    this.setStepDates(this.index, this.step)
  }
  next() {
    this.step -= 1
    this.setStepDates(this.index, this.step)
  }

  filter(ev) {
    this.index = Number(ev.extractionDate) // we set the index of the combobox
    const data = this.dateEstrazioni[ev.extractionDate]

    /*  this.selectedData = data
     this.selectedData1 = this.dateEstrazioni[Number(ev.extractionDate) + 1]
     this.selectedData2 = this.dateEstrazioni[Number(ev.extractionDate) + 2] */
    // this.setStepDates(this.index, this.step)
    if (ev.weel1 != false && ev.extractionDate != false && ev.weel2 != false) {
      var estrazione1 = this.estrazioniItems.filter((e: Extraction) => {
        return e.weel == this.weels[ev.weel1] && e.italianDate == data
      })
      if (ev.weel2 != undefined && ev.extractionDate != undefined)
        var estrazione2 = this.estrazioniItems.filter((e: Extraction) => {
          return e.weel == this.weels[ev.weel2] && e.italianDate == data
        })
    }
    if (estrazione1) {
      this.ruota1 = estrazione1[0]?.weel
      this.estrazione1 = new Extraction({ weel: this.ruota1, date: data, extraction: estrazione1[0].extraction })
    }
    if (estrazione2) {
      this.ruota2 = estrazione2[0]?.weel
      this.estrazione2 = new Extraction({ weel: this.ruota2, date: data, extraction: estrazione2[0].extraction })
    }

  }
  async submit(ev) {
    if (this.enabled && !this.expired) {
      const props = {
        weel1: this.weels[ev.weel1],
        weel2: this.weels[ev.weel2],
        dateEstrazioni: this.dateEstrazioni,
        function: this.functionsList[ev.function],
        date: this.dateEstrazioni[Number(ev.extractionDate)],
        extractions: this.estrazioniItems
      }
      this.WeelOne = props.extractions.filter((e: Extraction) => {
        return e.weel == props.weel1 && e.italianDate == props.date
      })[0]
      this.WeelTwo = props.extractions.filter((e: Extraction) => {
        return e.weel == props.weel2 && e.italianDate == props.date
      })[0]
      this.ambata11 = props.function.transform(this.WeelOne.getFirst())
      this.ambata12 = new Vertibile().transform(this.ambata11)
      this.ambata21 = props.function.transform(this.WeelTwo.getFirst())
      this.ambata22 = new Vertibile().transform(this.ambata21)
      const sorter = Utilities4Date.sorterDescendingDate


      this.weel1 = props.weel1
      this.weel2 = props.weel2
     
    }
    else {
      if (!this.enabled&&configs.locked) {
        this.toaster.presentToast("questo account non è abilitato! Contatta l'amministratore")
      }
      if (this.expired&&configs.locked) {
        this.toaster.presentToast("il tuo abbonamento è scaduto! Contatta l'amministratore")
      }
    }
  }

  transformation: TransformationInterface

  async addExtraction() {

  }

  initFormFields() {

    this.formFields = [


      new DropdownQuestion({
        key: "function",
        label: "funzione",
        options: new OptionsMaker().makesOptionsFromArray(this.functionsTitle),
        required: true,
      }),
      new DropdownQuestion({
        key: "extractionDate",
        label: "data di estrazione",
        options: new OptionsMaker().makesOptionsFromArray(this.dateEstrazioni),
        required: true,
      }),
      new DropdownQuestion({
        label: "prima ruota ",
        key: "weel1",
        options: new OptionsMaker().makesOptionsFromArray(this.weels),
        required: true,
      }),
      new DropdownQuestion({
        label: "seconda ruota ",
        key: "weel2",
        options: new OptionsMaker().makesOptionsFromArray(this.weels),
        required: true,
      }),
    ]
  }

  ngOnInit() {

    this.submitText = "applica funzione"
    this.authService.getCustomclaims(claims => {
      console.log("got claims", claims)
      this.enabled = new CheckEnabled().canAdd(claims,configs.locked)
      this.expired = !new CheckExpiration().canAdd(claims,configs.locked)
      this.authorized = new CheckRole(2).canAdd(claims,configs.locked)
      console.log(`user enabled: ${this.enabled}, expired: ${this.expired} authorized:${this.authorized}`)
      this.canAdd = claims.level <= 2 && claims.enabled
      console.log("claims", claims, this.canAdd)
    })






    this.messages.subscribeTo("selectedFunction", (transformation: TransformationInterface) => { // we get the selected transformation
      transformation = transformation
    })
    this.folder = "GENIAL LOTTO"// this.activatedRoute.snapshot.paramMap.get('id');
    this.estrazioni.items.subscribe((items) => {

      this.estrazioniItems = []
      this.showSpinner = items.length == 0
      items.sort((a: Extraction, b: Extraction) => {
        return b._dateInmsec - a._dateInmsec// ordinamento crescente dal  più recente al più vecchio
      }).forEach((e: Extraction) => {
        this.estrazioniItems = items
        this.dateEstrazioni.push(e.italianDate)
        this.dateEstrazioni = Array.from(new Set(this.dateEstrazioni)) // elimino i doppioni



      }

      )

      const isDateEnabled = (date: string) => {
        const helper = new Utilities4Date()
        const out = this.dateEstrazioni.indexOf(helper.fromDatePickerFormat2ItalianFormat(date)) > -1
        return out
      }
      const DescendentsorterItalianDate = (a: string, b: string) => new Date(new Utilities4Date().fromItalian2AmericanFormat(b)).getTime() -
        new Date(new Utilities4Date().fromItalian2AmericanFormat(a)).getTime()
      this.dateEstrazioni = this.dateEstrazioni.sort(DescendentsorterItalianDate)

      this.initFormFields()

    })


  }

  async cookiesLaw() {
    console.log("popover")
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: CookiesLawComponent,
      //event: ev,
      cssClass: 'popover_setting',
      componentProps: {
        site: siteInfo
      },
      translucent: true
    });
    await popover.present()
  }

}
