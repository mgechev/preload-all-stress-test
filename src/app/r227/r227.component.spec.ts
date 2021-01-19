import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R227Component } from './r227.component';

describe('R227Component', () => {
  let component: R227Component;
  let fixture: ComponentFixture<R227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R227Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
