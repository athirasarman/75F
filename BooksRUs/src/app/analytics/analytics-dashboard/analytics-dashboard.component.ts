import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { WeekwiseReadership } from '../../weekwise-readership';
import { Observable,of } from 'rxjs';
import { AnalyticsService } from '../analytics.service';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';


@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit {
  
  constructor(private breakpointObserver: BreakpointObserver,
    ) {
    
  }
  
   ngOnInit() {
  }

  
}
