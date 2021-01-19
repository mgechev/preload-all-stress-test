import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R118Component } from './r118.component';

describe('R118Component', () => {
  let component: R118Component;
  let fixture: ComponentFixture<R118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R118Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
