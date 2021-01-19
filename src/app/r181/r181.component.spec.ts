import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R181Component } from './r181.component';

describe('R181Component', () => {
  let component: R181Component;
  let fixture: ComponentFixture<R181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
