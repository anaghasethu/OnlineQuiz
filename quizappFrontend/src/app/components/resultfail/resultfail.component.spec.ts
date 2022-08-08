import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultfailComponent } from './resultfail.component';

describe('ResultfailComponent', () => {
  let component: ResultfailComponent;
  let fixture: ComponentFixture<ResultfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultfailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
