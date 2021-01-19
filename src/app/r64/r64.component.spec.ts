import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R64Component } from './r64.component';

describe('R64Component', () => {
  let component: R64Component;
  let fixture: ComponentFixture<R64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
