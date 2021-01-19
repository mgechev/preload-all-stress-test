import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R257Component } from './r257.component';

describe('R257Component', () => {
  let component: R257Component;
  let fixture: ComponentFixture<R257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R257Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
