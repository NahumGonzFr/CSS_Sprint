import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaGraficaComponent } from './dona-grafica.component';

describe('DonaGraficaComponent', () => {
  let component: DonaGraficaComponent;
  let fixture: ComponentFixture<DonaGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonaGraficaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
