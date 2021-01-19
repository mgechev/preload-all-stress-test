import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R422Component } from './r422.component';

describe('R422Component', () => {
  let component: R422Component;
  let fixture: ComponentFixture<R422Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R422Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
