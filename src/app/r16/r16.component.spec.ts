import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R16Component } from './r16.component';

describe('R16Component', () => {
  let component: R16Component;
  let fixture: ComponentFixture<R16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
