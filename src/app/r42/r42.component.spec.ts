import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R42Component } from './r42.component';

describe('R42Component', () => {
  let component: R42Component;
  let fixture: ComponentFixture<R42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
