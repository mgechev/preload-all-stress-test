import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R352Component } from './r352.component';

describe('R352Component', () => {
  let component: R352Component;
  let fixture: ComponentFixture<R352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R352Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
