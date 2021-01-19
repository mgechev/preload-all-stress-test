import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R428Component } from './r428.component';

describe('R428Component', () => {
  let component: R428Component;
  let fixture: ComponentFixture<R428Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R428Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
