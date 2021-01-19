import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R467Component } from './r467.component';

describe('R467Component', () => {
  let component: R467Component;
  let fixture: ComponentFixture<R467Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R467Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
