import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DateHelpers } from 'src/app/business/dateHelpers';
import { IntervalCalculator } from 'src/app/business/intervalCalculator';
import { makeData4D3 } from 'src/app/business/makeData4D3';
import { Interval } from 'src/app/models/interval';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';

@Component({
  selector: 'app-intervals-d3',
  templateUrl: './intervals-d3.component.html',
  styleUrls: ['./intervals-d3.component.scss'],
})
export class IntervalsD3Component implements OnInit, OnDestroy, OnChanges {
  @Input() weel: string
  @Input() extractedNumber: number
  subscription
  formFields = [new DropdownQuestion({
    key: "intervals",
    label: "quanti intervalli vuoi vedere",
    options: [{
      key: "20",
      value: 20
    },
    {
      key: "30",
      value: 30
    },
    {
      key: "40",
      value: 40
    },
    {
      key: "50",
      value: 50
    }],
    value: 20
  }),

  ]
  howManyIntervals = 20
  subscription2
  barData: Interval[]
  constructor() { }
  ngOnChanges(changes: SimpleChanges,): void {
    this.drawLine(this.howManyIntervals)
  }

  drawLine(howManyIntervals) {
    this.extractedNumber = Number(this.extractedNumber) // the number arrives as string


  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe()
    }
  }

  ngOnInit() {


  }

  filter(ev) {
    console.log("typing", ev.intervals)
    this.howManyIntervals = ev.intervals
    this.drawLine(this.howManyIntervals)
  }

}
