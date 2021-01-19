import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R231Component } from './r231.component';

describe('R231Component', () => {
  let component: R231Component;
  let fixture: ComponentFixture<R231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
