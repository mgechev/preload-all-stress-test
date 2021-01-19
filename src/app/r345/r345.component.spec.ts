import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R345Component } from './r345.component';

describe('R345Component', () => {
  let component: R345Component;
  let fixture: ComponentFixture<R345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R345Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
