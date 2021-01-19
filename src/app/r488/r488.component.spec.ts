import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R488Component } from './r488.component';

describe('R488Component', () => {
  let component: R488Component;
  let fixture: ComponentFixture<R488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R488Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
