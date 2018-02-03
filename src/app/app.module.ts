import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HomepageModule } from './homepage/homepage.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ToastComponent } from './shared/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent, pathMatch: 'full'},
      {path: 'toast', component: CoursesComponent, pathMatch: 'full' },
      {path: '**', component:ErrorComponent, pathMatch: 'full' }
    ])
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
