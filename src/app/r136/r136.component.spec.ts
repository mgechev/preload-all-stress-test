import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R136Component } from './r136.component';

describe('R136Component', () => {
  let component: R136Component;
  let fixture: ComponentFixture<R136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
