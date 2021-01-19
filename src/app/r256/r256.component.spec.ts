import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R256Component } from './r256.component';

describe('R256Component', () => {
  let component: R256Component;
  let fixture: ComponentFixture<R256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R256Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
