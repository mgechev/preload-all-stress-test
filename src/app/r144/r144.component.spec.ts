import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R144Component } from './r144.component';

describe('R144Component', () => {
  let component: R144Component;
  let fixture: ComponentFixture<R144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
