import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R142Component } from './r142.component';

describe('R142Component', () => {
  let component: R142Component;
  let fixture: ComponentFixture<R142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
