import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAutoComponent } from './eliminar-auto.component';

describe('EliminarAutoComponent', () => {
  let component: EliminarAutoComponent;
  let fixture: ComponentFixture<EliminarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
