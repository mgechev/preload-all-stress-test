import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R220Component } from './r220.component';

describe('R220Component', () => {
  let component: R220Component;
  let fixture: ComponentFixture<R220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
