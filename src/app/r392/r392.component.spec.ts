import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R392Component } from './r392.component';

describe('R392Component', () => {
  let component: R392Component;
  let fixture: ComponentFixture<R392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R392Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
