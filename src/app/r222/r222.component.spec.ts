import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R222Component } from './r222.component';

describe('R222Component', () => {
  let component: R222Component;
  let fixture: ComponentFixture<R222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
