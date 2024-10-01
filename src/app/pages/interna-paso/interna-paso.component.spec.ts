import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaPasoComponent } from './interna-paso.component';

describe('InternaPasoComponent', () => {
  let component: InternaPasoComponent;
  let fixture: ComponentFixture<InternaPasoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternaPasoComponent]
    });
    fixture = TestBed.createComponent(InternaPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
