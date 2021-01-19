import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R51Component } from './r51.component';

describe('R51Component', () => {
  let component: R51Component;
  let fixture: ComponentFixture<R51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
