import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPizzaComponent } from './insert-pizza.component';

describe('InsertPizzaComponent', () => {
  let component: InsertPizzaComponent;
  let fixture: ComponentFixture<InsertPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
