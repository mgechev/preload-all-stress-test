import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R364Component } from './r364.component';

describe('R364Component', () => {
  let component: R364Component;
  let fixture: ComponentFixture<R364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R364Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
