import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R74Component } from './r74.component';

describe('R74Component', () => {
  let component: R74Component;
  let fixture: ComponentFixture<R74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R74Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
