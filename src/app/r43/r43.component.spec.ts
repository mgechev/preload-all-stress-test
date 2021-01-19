import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R43Component } from './r43.component';

describe('R43Component', () => {
  let component: R43Component;
  let fixture: ComponentFixture<R43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
