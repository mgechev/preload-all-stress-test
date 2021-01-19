import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R105Component } from './r105.component';

describe('R105Component', () => {
  let component: R105Component;
  let fixture: ComponentFixture<R105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
