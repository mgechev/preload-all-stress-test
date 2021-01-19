import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R337Component } from './r337.component';

describe('R337Component', () => {
  let component: R337Component;
  let fixture: ComponentFixture<R337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R337Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
