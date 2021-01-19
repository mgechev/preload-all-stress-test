import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R68Component } from './r68.component';

describe('R68Component', () => {
  let component: R68Component;
  let fixture: ComponentFixture<R68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
