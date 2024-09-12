import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVehiculoComponent } from './registro-vehiculo.component';

describe('RegistroVehiculoComponent', () => {
  let component: RegistroVehiculoComponent;
  let fixture: ComponentFixture<RegistroVehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroVehiculoComponent]
    });
    fixture = TestBed.createComponent(RegistroVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
