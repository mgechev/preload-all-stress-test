import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R449Component } from './r449.component';

describe('R449Component', () => {
  let component: R449Component;
  let fixture: ComponentFixture<R449Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R449Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
