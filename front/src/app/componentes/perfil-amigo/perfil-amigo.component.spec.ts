import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAmigoComponent } from './perfil-amigo.component';

describe('PerfilAmigoComponent', () => {
  let component: PerfilAmigoComponent;
  let fixture: ComponentFixture<PerfilAmigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAmigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
