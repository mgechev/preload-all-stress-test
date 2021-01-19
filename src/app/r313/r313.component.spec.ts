import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R313Component } from './r313.component';

describe('R313Component', () => {
  let component: R313Component;
  let fixture: ComponentFixture<R313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
