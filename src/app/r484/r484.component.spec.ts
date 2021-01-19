import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R484Component } from './r484.component';

describe('R484Component', () => {
  let component: R484Component;
  let fixture: ComponentFixture<R484Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R484Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
