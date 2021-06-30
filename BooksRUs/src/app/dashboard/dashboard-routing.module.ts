import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component'

const routes: Routes = [{ path: 'books', component: BooksComponent },
{ path: 'search', component: SearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
