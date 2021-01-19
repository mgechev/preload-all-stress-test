import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R214Component } from './r214.component';

describe('R214Component', () => {
  let component: R214Component;
  let fixture: ComponentFixture<R214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
