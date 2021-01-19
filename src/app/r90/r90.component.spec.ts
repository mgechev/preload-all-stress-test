import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R90Component } from './r90.component';

describe('R90Component', () => {
  let component: R90Component;
  let fixture: ComponentFixture<R90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
