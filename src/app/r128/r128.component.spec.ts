import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R128Component } from './r128.component';

describe('R128Component', () => {
  let component: R128Component;
  let fixture: ComponentFixture<R128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
