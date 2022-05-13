import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliarFotoComponent } from './ampliar-foto.component';

describe('AmpliarFotoComponent', () => {
  let component: AmpliarFotoComponent;
  let fixture: ComponentFixture<AmpliarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpliarFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpliarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
