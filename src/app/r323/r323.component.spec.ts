import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R323Component } from './r323.component';

describe('R323Component', () => {
  let component: R323Component;
  let fixture: ComponentFixture<R323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R323Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
