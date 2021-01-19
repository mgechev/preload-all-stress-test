import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R351Component } from './r351.component';

describe('R351Component', () => {
  let component: R351Component;
  let fixture: ComponentFixture<R351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R351Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
