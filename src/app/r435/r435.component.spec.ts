import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R435Component } from './r435.component';

describe('R435Component', () => {
  let component: R435Component;
  let fixture: ComponentFixture<R435Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R435Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
