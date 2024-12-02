import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavPokemonsComponent } from './list-fav-pokemons.component';

describe('ListFavPokemonsComponent', () => {
  let component: ListFavPokemonsComponent;
  let fixture: ComponentFixture<ListFavPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFavPokemonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
