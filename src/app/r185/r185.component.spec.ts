import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R185Component } from './r185.component';

describe('R185Component', () => {
  let component: R185Component;
  let fixture: ComponentFixture<R185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
