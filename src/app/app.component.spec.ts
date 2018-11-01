import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        OwlModule
      ],
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
