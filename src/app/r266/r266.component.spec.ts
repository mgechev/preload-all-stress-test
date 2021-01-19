import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R266Component } from './r266.component';

describe('R266Component', () => {
  let component: R266Component;
  let fixture: ComponentFixture<R266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R266Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
