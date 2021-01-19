import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R127Component } from './r127.component';

describe('R127Component', () => {
  let component: R127Component;
  let fixture: ComponentFixture<R127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
