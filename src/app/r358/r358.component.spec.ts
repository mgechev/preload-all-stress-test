import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R358Component } from './r358.component';

describe('R358Component', () => {
  let component: R358Component;
  let fixture: ComponentFixture<R358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R358Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
