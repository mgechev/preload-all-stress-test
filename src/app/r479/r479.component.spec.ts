import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R479Component } from './r479.component';

describe('R479Component', () => {
  let component: R479Component;
  let fixture: ComponentFixture<R479Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R479Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
