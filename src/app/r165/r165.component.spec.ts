import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R165Component } from './r165.component';

describe('R165Component', () => {
  let component: R165Component;
  let fixture: ComponentFixture<R165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
