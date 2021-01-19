import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R393Component } from './r393.component';

describe('R393Component', () => {
  let component: R393Component;
  let fixture: ComponentFixture<R393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R393Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
