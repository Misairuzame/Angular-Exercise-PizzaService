import { TestBed } from '@angular/core/testing';

import { PizzaDBService } from './pizza-db.service';

describe('PizzaDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaDBService = TestBed.get(PizzaDBService);
    expect(service).toBeTruthy();
  });
});
