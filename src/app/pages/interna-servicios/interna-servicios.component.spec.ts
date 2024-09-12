import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaServiciosComponent } from './interna-servicios.component';

describe('InternaServiciosComponent', () => {
  let component: InternaServiciosComponent;
  let fixture: ComponentFixture<InternaServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternaServiciosComponent]
    });
    fixture = TestBed.createComponent(InternaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
