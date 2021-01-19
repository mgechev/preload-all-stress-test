import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R87Component } from './r87.component';

describe('R87Component', () => {
  let component: R87Component;
  let fixture: ComponentFixture<R87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
