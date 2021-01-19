import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R371Component } from './r371.component';

describe('R371Component', () => {
  let component: R371Component;
  let fixture: ComponentFixture<R371Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R371Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
