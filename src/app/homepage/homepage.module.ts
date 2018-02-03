import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
