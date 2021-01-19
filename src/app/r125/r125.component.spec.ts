import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R125Component } from './r125.component';

describe('R125Component', () => {
  let component: R125Component;
  let fixture: ComponentFixture<R125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
