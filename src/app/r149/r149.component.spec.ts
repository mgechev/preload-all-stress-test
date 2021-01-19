import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R149Component } from './r149.component';

describe('R149Component', () => {
  let component: R149Component;
  let fixture: ComponentFixture<R149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
