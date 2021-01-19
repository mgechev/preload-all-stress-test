import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R124Component } from './r124.component';

describe('R124Component', () => {
  let component: R124Component;
  let fixture: ComponentFixture<R124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
