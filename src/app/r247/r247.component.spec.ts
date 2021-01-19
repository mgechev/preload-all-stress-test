import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R247Component } from './r247.component';

describe('R247Component', () => {
  let component: R247Component;
  let fixture: ComponentFixture<R247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R247Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
