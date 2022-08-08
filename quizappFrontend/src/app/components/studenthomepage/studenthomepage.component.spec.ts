import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthomepageComponent } from './studenthomepage.component';

describe('StudenthomepageComponent', () => {
  let component: StudenthomepageComponent;
  let fixture: ComponentFixture<StudenthomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenthomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
