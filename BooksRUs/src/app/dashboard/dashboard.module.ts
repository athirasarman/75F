import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { LayoutComponent } from './layout/layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedDataModule } from '../shared-data/shared-data.module';
import { ReadComponent } from './read/read.component';


@NgModule({
  declarations: [
    SearchComponent,
    BooksComponent,
    LayoutComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTooltipModule,    
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    SharedDataModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
