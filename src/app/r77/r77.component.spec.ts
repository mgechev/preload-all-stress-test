import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R77Component } from './r77.component';

describe('R77Component', () => {
  let component: R77Component;
  let fixture: ComponentFixture<R77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R77Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
