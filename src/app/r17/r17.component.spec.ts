import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R17Component } from './r17.component';

describe('R17Component', () => {
  let component: R17Component;
  let fixture: ComponentFixture<R17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
