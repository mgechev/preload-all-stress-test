import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R388Component } from './r388.component';

describe('R388Component', () => {
  let component: R388Component;
  let fixture: ComponentFixture<R388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R388Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
