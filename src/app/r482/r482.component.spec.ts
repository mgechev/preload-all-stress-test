import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R482Component } from './r482.component';

describe('R482Component', () => {
  let component: R482Component;
  let fixture: ComponentFixture<R482Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R482Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
