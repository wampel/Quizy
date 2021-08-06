import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1Component } from './f1.component';

describe('F1Component', () => {
  let component: F1Component;
  let fixture: ComponentFixture<F1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
