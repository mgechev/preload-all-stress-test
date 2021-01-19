import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R420Component } from './r420.component';

describe('R420Component', () => {
  let component: R420Component;
  let fixture: ComponentFixture<R420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R420Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
