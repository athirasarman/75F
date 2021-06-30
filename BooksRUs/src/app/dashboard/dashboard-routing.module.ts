import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
{ path: 'books', component: BooksComponent },
{ path: 'search', component: SearchComponent },
{ path: 'layout', component: LayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
