import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicoesComponent } from './refeicoes.component';

describe('RefeicoesComponent', () => {
  let component: RefeicoesComponent;
  let fixture: ComponentFixture<RefeicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefeicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefeicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
