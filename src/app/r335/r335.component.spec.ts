import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R335Component } from './r335.component';

describe('R335Component', () => {
  let component: R335Component;
  let fixture: ComponentFixture<R335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R335Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
