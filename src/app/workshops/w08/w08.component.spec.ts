import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W08Component } from './w08.component';

describe('W08Component', () => {
  let component: W08Component;
  let fixture: ComponentFixture<W08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [W08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(W08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
