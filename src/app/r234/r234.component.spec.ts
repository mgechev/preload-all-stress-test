import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R234Component } from './r234.component';

describe('R234Component', () => {
  let component: R234Component;
  let fixture: ComponentFixture<R234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R234Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
