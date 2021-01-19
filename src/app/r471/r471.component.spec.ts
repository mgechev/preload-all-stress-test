import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R471Component } from './r471.component';

describe('R471Component', () => {
  let component: R471Component;
  let fixture: ComponentFixture<R471Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R471Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
