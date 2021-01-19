import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R203Component } from './r203.component';

describe('R203Component', () => {
  let component: R203Component;
  let fixture: ComponentFixture<R203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R203Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
