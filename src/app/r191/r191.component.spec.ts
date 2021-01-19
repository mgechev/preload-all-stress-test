import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R191Component } from './r191.component';

describe('R191Component', () => {
  let component: R191Component;
  let fixture: ComponentFixture<R191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
