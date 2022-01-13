import { TestBed } from '@angular/core/testing';

import { FoodBoxFormService } from './food-box-form.service';

describe('FoodBoxFormService', () => {
  let service: FoodBoxFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodBoxFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
