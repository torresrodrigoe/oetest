import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderProgressComponent } from './header-progress.component';
import { TimerComponent } from '../timer/timer.component';
import { StatsComponent } from '../stats/stats.component';

describe('HeaderProgressComponent', () => {
  let component: HeaderProgressComponent;
  let fixture: ComponentFixture<HeaderProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProgressComponent,TimerComponent,StatsComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show progress level', () => {
    const fixture = TestBed.createComponent(HeaderProgressComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.header-progress-stats__head').textContent).toContain('Mi Progreso - Nivel');
  });

  it('should show 4 progress bars', () => {
    const fixture = TestBed.createComponent(HeaderProgressComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.progress').length).toEqual(4);
  });
});
