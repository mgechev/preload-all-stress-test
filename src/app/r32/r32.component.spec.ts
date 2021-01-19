import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R32Component } from './r32.component';

describe('R32Component', () => {
  let component: R32Component;
  let fixture: ComponentFixture<R32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
