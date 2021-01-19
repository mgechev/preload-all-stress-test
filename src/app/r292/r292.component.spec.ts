import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R292Component } from './r292.component';

describe('R292Component', () => {
  let component: R292Component;
  let fixture: ComponentFixture<R292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R292Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
