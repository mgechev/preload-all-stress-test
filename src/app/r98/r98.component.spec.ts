import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R98Component } from './r98.component';

describe('R98Component', () => {
  let component: R98Component;
  let fixture: ComponentFixture<R98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
