import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R91Component } from './r91.component';

describe('R91Component', () => {
  let component: R91Component;
  let fixture: ComponentFixture<R91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
