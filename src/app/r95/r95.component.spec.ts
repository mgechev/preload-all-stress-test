import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R95Component } from './r95.component';

describe('R95Component', () => {
  let component: R95Component;
  let fixture: ComponentFixture<R95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
