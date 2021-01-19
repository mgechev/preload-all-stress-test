import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R174Component } from './r174.component';

describe('R174Component', () => {
  let component: R174Component;
  let fixture: ComponentFixture<R174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
