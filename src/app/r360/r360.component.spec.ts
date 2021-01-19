import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R360Component } from './r360.component';

describe('R360Component', () => {
  let component: R360Component;
  let fixture: ComponentFixture<R360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
