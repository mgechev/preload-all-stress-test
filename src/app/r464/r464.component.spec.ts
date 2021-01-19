import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R464Component } from './r464.component';

describe('R464Component', () => {
  let component: R464Component;
  let fixture: ComponentFixture<R464Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R464Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
