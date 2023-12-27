import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBarComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomepageComponent]
})
export class GifsModule { }
