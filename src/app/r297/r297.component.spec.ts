import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R297Component } from './r297.component';

describe('R297Component', () => {
  let component: R297Component;
  let fixture: ComponentFixture<R297Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R297Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
