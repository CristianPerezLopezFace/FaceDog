import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVeterinarioComponent } from './vista-veterinario.component';

describe('VistaVeterinarioComponent', () => {
  let component: VistaVeterinarioComponent;
  let fixture: ComponentFixture<VistaVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
