import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R272Component } from './r272.component';

describe('R272Component', () => {
  let component: R272Component;
  let fixture: ComponentFixture<R272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R272Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
