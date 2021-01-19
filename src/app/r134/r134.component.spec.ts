import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R134Component } from './r134.component';

describe('R134Component', () => {
  let component: R134Component;
  let fixture: ComponentFixture<R134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
