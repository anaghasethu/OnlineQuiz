import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiztestComponent } from './quiztest.component';

describe('QuiztestComponent', () => {
  let component: QuiztestComponent;
  let fixture: ComponentFixture<QuiztestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiztestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiztestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
