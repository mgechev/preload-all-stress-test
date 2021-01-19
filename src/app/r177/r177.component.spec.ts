import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R177Component } from './r177.component';

describe('R177Component', () => {
  let component: R177Component;
  let fixture: ComponentFixture<R177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
