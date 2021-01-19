import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R89Component } from './r89.component';

describe('R89Component', () => {
  let component: R89Component;
  let fixture: ComponentFixture<R89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
