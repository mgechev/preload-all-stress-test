import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R319Component } from './r319.component';

describe('R319Component', () => {
  let component: R319Component;
  let fixture: ComponentFixture<R319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R319Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
