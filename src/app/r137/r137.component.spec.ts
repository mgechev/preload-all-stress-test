import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R137Component } from './r137.component';

describe('R137Component', () => {
  let component: R137Component;
  let fixture: ComponentFixture<R137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
