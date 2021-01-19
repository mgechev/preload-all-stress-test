import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R348Component } from './r348.component';

describe('R348Component', () => {
  let component: R348Component;
  let fixture: ComponentFixture<R348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R348Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
