import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R326Component } from './r326.component';

describe('R326Component', () => {
  let component: R326Component;
  let fixture: ComponentFixture<R326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R326Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
