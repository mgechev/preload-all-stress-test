import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R116Component } from './r116.component';

describe('R116Component', () => {
  let component: R116Component;
  let fixture: ComponentFixture<R116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
