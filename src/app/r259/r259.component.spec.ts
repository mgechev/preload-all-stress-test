import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R259Component } from './r259.component';

describe('R259Component', () => {
  let component: R259Component;
  let fixture: ComponentFixture<R259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R259Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
