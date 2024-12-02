import { TestBed } from '@angular/core/testing';

import { FavoritepokemonserviceService } from './favoritepokemonservice.service';

describe('FavoritepokemonserviceService', () => {
  let service: FavoritepokemonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritepokemonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
