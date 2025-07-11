import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAutosComponent } from './ver-autos.component';

describe('VerAutosComponent', () => {
  let component: VerAutosComponent;
  let fixture: ComponentFixture<VerAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
