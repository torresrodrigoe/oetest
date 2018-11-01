import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderProgressComponent } from './components/header-progress/header-progress.component';
import { ClassComponent } from './components/class/class.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { PracticeComponent } from './components/practice/practice.component';
import { FooterComponent } from './components/footer/footer.component';

import { OwlModule } from 'ngx-owl-carousel';
import { TimerComponent } from './components/timer/timer.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderProgressComponent,
    ClassComponent,
    LessonComponent,
    PracticeComponent,
    FooterComponent,
    TimerComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
