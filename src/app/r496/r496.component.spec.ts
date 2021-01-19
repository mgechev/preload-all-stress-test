import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R496Component } from './r496.component';

describe('R496Component', () => {
  let component: R496Component;
  let fixture: ComponentFixture<R496Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R496Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
