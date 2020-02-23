import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciaComponent } from './ciencia.component';

describe('CienciaComponent', () => {
  let component: CienciaComponent;
  let fixture: ComponentFixture<CienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
