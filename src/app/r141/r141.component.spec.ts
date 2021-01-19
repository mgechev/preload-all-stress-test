import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R141Component } from './r141.component';

describe('R141Component', () => {
  let component: R141Component;
  let fixture: ComponentFixture<R141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
