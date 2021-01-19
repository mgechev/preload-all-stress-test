import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R138Component } from './r138.component';

describe('R138Component', () => {
  let component: R138Component;
  let fixture: ComponentFixture<R138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
