import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R498Component } from './r498.component';

describe('R498Component', () => {
  let component: R498Component;
  let fixture: ComponentFixture<R498Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R498Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
