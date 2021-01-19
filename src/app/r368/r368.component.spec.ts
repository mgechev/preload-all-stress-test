import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R368Component } from './r368.component';

describe('R368Component', () => {
  let component: R368Component;
  let fixture: ComponentFixture<R368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R368Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
