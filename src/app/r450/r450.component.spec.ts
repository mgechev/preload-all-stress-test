import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R450Component } from './r450.component';

describe('R450Component', () => {
  let component: R450Component;
  let fixture: ComponentFixture<R450Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R450Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
