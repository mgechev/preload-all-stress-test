import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R170Component } from './r170.component';

describe('R170Component', () => {
  let component: R170Component;
  let fixture: ComponentFixture<R170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
