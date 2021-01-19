import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R334Component } from './r334.component';

describe('R334Component', () => {
  let component: R334Component;
  let fixture: ComponentFixture<R334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R334Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
