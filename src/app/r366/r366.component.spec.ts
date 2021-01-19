import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R366Component } from './r366.component';

describe('R366Component', () => {
  let component: R366Component;
  let fixture: ComponentFixture<R366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R366Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
