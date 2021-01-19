import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R49Component } from './r49.component';

describe('R49Component', () => {
  let component: R49Component;
  let fixture: ComponentFixture<R49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
