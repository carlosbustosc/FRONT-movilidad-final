import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoComponent } from './impuesto.component';

describe('ImpuestoComponent', () => {
  let component: ImpuestoComponent;
  let fixture: ComponentFixture<ImpuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpuestoComponent]
    });
    fixture = TestBed.createComponent(ImpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
