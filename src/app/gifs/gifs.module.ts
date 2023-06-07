import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardListComponent } from './components/card-list/card-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardListComponent,
    CardsComponent,
    HomePageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
