import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R102Component } from './r102.component';

describe('R102Component', () => {
  let component: R102Component;
  let fixture: ComponentFixture<R102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
