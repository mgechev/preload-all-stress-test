import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R213Component } from './r213.component';

describe('R213Component', () => {
  let component: R213Component;
  let fixture: ComponentFixture<R213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R213Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
