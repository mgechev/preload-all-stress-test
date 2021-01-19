import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R354Component } from './r354.component';

describe('R354Component', () => {
  let component: R354Component;
  let fixture: ComponentFixture<R354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R354Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
