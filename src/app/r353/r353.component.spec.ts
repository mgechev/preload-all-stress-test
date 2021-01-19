import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R353Component } from './r353.component';

describe('R353Component', () => {
  let component: R353Component;
  let fixture: ComponentFixture<R353Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R353Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
