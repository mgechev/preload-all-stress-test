import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R349Component } from './r349.component';

describe('R349Component', () => {
  let component: R349Component;
  let fixture: ComponentFixture<R349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R349Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
