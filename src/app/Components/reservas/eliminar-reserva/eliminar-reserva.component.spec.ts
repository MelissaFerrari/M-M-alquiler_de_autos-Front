import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarReservaComponent } from './eliminar-reserva.component';

describe('EliminarReservaComponent', () => {
  let component: EliminarReservaComponent;
  let fixture: ComponentFixture<EliminarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
