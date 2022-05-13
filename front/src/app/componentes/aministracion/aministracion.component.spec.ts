import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AministracionComponent } from './aministracion.component';

describe('AministracionComponent', () => {
  let component: AministracionComponent;
  let fixture: ComponentFixture<AministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AministracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
