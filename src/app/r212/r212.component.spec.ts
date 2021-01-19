import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R212Component } from './r212.component';

describe('R212Component', () => {
  let component: R212Component;
  let fixture: ComponentFixture<R212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
