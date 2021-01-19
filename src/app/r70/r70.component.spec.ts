import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R70Component } from './r70.component';

describe('R70Component', () => {
  let component: R70Component;
  let fixture: ComponentFixture<R70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
