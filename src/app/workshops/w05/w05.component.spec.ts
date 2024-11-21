import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W05Component } from './w05.component';

describe('W05Component', () => {
  let component: W05Component;
  let fixture: ComponentFixture<W05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [W05Component],
    }).compileComponents();

    fixture = TestBed.createComponent(W05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
