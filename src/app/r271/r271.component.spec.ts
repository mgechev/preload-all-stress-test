import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R271Component } from './r271.component';

describe('R271Component', () => {
  let component: R271Component;
  let fixture: ComponentFixture<R271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R271Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
