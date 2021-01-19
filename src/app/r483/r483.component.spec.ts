import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R483Component } from './r483.component';

describe('R483Component', () => {
  let component: R483Component;
  let fixture: ComponentFixture<R483Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R483Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
