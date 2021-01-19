import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R432Component } from './r432.component';

describe('R432Component', () => {
  let component: R432Component;
  let fixture: ComponentFixture<R432Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R432Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
