import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component'
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [{ path: '', component: AnalyticsDashboardComponent },
{ path: 'bar', component: BarComponent },
{ path: 'pie', component: PieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
