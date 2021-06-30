import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
{ path: 'analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule) },
{ path: '', redirectTo: 'layout', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, // <-- debugging purposes only
                                           preloadingStrategy: SelectivePreloadingStrategyService })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
