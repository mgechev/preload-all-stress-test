import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R154Component } from './r154.component';

describe('R154Component', () => {
  let component: R154Component;
  let fixture: ComponentFixture<R154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
