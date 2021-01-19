import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R59Component } from './r59.component';

describe('R59Component', () => {
  let component: R59Component;
  let fixture: ComponentFixture<R59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
