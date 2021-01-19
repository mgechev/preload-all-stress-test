import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R190Component } from './r190.component';

describe('R190Component', () => {
  let component: R190Component;
  let fixture: ComponentFixture<R190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
