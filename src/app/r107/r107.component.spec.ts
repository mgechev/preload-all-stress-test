import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R107Component } from './r107.component';

describe('R107Component', () => {
  let component: R107Component;
  let fixture: ComponentFixture<R107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
