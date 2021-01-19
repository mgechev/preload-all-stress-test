import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R427Component } from './r427.component';

describe('R427Component', () => {
  let component: R427Component;
  let fixture: ComponentFixture<R427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R427Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
