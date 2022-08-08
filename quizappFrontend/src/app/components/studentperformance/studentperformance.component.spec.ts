import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentperformanceComponent } from './studentperformance.component';

describe('StudentperformanceComponent', () => {
  let component: StudentperformanceComponent;
  let fixture: ComponentFixture<StudentperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentperformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
