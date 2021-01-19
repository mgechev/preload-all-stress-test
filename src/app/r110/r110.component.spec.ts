import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R110Component } from './r110.component';

describe('R110Component', () => {
  let component: R110Component;
  let fixture: ComponentFixture<R110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
