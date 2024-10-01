import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoApasoComponent } from './paso-apaso.component';

describe('PasoApasoComponent', () => {
  let component: PasoApasoComponent;
  let fixture: ComponentFixture<PasoApasoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasoApasoComponent]
    });
    fixture = TestBed.createComponent(PasoApasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
