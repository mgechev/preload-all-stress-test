import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R421Component } from './r421.component';

describe('R421Component', () => {
  let component: R421Component;
  let fixture: ComponentFixture<R421Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R421Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
