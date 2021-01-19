import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R46Component } from './r46.component';

describe('R46Component', () => {
  let component: R46Component;
  let fixture: ComponentFixture<R46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
