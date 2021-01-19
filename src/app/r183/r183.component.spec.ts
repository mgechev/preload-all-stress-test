import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R183Component } from './r183.component';

describe('R183Component', () => {
  let component: R183Component;
  let fixture: ComponentFixture<R183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
