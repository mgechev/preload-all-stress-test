import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R465Component } from './r465.component';

describe('R465Component', () => {
  let component: R465Component;
  let fixture: ComponentFixture<R465Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R465Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
