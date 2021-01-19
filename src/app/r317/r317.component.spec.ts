import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R317Component } from './r317.component';

describe('R317Component', () => {
  let component: R317Component;
  let fixture: ComponentFixture<R317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R317Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
