import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R441Component } from './r441.component';

describe('R441Component', () => {
  let component: R441Component;
  let fixture: ComponentFixture<R441Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R441Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
