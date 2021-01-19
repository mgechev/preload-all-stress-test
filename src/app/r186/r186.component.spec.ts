import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R186Component } from './r186.component';

describe('R186Component', () => {
  let component: R186Component;
  let fixture: ComponentFixture<R186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
