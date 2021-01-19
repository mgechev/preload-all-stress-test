import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R278Component } from './r278.component';

describe('R278Component', () => {
  let component: R278Component;
  let fixture: ComponentFixture<R278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R278Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
