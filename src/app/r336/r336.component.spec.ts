import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R336Component } from './r336.component';

describe('R336Component', () => {
  let component: R336Component;
  let fixture: ComponentFixture<R336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R336Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
