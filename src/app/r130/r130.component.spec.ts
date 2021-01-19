import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R130Component } from './r130.component';

describe('R130Component', () => {
  let component: R130Component;
  let fixture: ComponentFixture<R130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
