import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R161Component } from './r161.component';

describe('R161Component', () => {
  let component: R161Component;
  let fixture: ComponentFixture<R161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
