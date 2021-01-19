import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R442Component } from './r442.component';

describe('R442Component', () => {
  let component: R442Component;
  let fixture: ComponentFixture<R442Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R442Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
