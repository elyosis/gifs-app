import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomepageComponent]
})
export class GifsModule { }
