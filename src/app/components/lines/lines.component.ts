import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss'],
})
export class BarComponent implements OnInit,OnChanges {
  svg: any;
  margin: number;
  height: number;
  width: number;
  @Input() numeroEstratto:number
 @Input() data: { id: number; date: string; interval: string; }[];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("changes",changes.data)
   this.createSvg();
    this.drawBars(this.data);
  }

  createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")")
    //.text(`intervalli per ${this.numeroEstratto} `);
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.id))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 150])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(this.data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.id))
  .attr("y", d => y(d.interval))
  .attr("width", x.bandwidth())
  .attr("height", (d) => this.height - y(d.interval))
  .attr("fill", "#d04a35");
}

  ngOnInit() {
   console.log("data",this.data)
    this.svg;
    this.margin = 50;
    this.width = 450 - (this.margin * 2);
    this.height = 400 - (this.margin * 2);

    this.createSvg();
    this.drawBars(this.data);
  }

}
