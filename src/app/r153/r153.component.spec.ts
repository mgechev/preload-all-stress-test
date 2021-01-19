import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R153Component } from './r153.component';

describe('R153Component', () => {
  let component: R153Component;
  let fixture: ComponentFixture<R153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
