import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R182Component } from './r182.component';

describe('R182Component', () => {
  let component: R182Component;
  let fixture: ComponentFixture<R182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
