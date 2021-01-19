import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R263Component } from './r263.component';

describe('R263Component', () => {
  let component: R263Component;
  let fixture: ComponentFixture<R263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R263Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
