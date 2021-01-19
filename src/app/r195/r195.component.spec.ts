import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R195Component } from './r195.component';

describe('R195Component', () => {
  let component: R195Component;
  let fixture: ComponentFixture<R195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
