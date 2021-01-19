import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R228Component } from './r228.component';

describe('R228Component', () => {
  let component: R228Component;
  let fixture: ComponentFixture<R228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R228Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
