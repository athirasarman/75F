import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { AnalyticsService } from '../analytics.service';


import { WeekwiseReadership } from '../../weekwise-readership';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit{
  currentRate = 8;
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  weekwiseReadershipData:WeekwiseReadership[];

  constructor(private fb: FormBuilder,private analyticsService:AnalyticsService) {
    this.weekwiseReadershipData=this.analyticsService.getWeekWiseData();
       this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }


 ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  initSvg() {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(  this.weekwiseReadershipData.map((d) => d.week));
    this.y.domain([0, d3Array.max(  this.weekwiseReadershipData, (d) => d.count)]);
  }

  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');

      // Add X axis label:
    this.g.append("text")
    .attr("text-anchor", "end")
    .attr("x", this.width)
    .attr("y", this.height + this.margin.top + 10)
    .text("Weeks");

    // Y axis label:
    this.g.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -this.margin.left+10)
    .attr("x", -this.margin.top)
    .text("Readers")
  }

  drawBars() {
    this.g.selectAll('.bar')
      .data(  this.weekwiseReadershipData)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d:any) => this.x(d.week))
      .attr('y', (d:any) => this.y(d.count))
      .attr('width', this.x.bandwidth())
      .attr('fill', '#498bfc')
      .attr('height', (d:any) => this.height - this.y(d.count));
  }


}
