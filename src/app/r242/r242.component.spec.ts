import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R242Component } from './r242.component';

describe('R242Component', () => {
  let component: R242Component;
  let fixture: ComponentFixture<R242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R242Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
