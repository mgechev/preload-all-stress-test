import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R47Component } from './r47.component';

describe('R47Component', () => {
  let component: R47Component;
  let fixture: ComponentFixture<R47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
