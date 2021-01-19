import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R468Component } from './r468.component';

describe('R468Component', () => {
  let component: R468Component;
  let fixture: ComponentFixture<R468Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R468Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
