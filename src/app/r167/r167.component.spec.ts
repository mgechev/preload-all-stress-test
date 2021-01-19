import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R167Component } from './r167.component';

describe('R167Component', () => {
  let component: R167Component;
  let fixture: ComponentFixture<R167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
