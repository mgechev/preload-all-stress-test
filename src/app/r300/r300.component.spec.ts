import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R300Component } from './r300.component';

describe('R300Component', () => {
  let component: R300Component;
  let fixture: ComponentFixture<R300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
