import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R398Component } from './r398.component';

describe('R398Component', () => {
  let component: R398Component;
  let fixture: ComponentFixture<R398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R398Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
