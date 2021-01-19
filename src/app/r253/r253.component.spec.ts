import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R253Component } from './r253.component';

describe('R253Component', () => {
  let component: R253Component;
  let fixture: ComponentFixture<R253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R253Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
