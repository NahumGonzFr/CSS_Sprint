import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica3Component } from './grafica3.component';

describe('Grafica3Component', () => {
  let component: Grafica3Component;
  let fixture: ComponentFixture<Grafica3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafica3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafica3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
