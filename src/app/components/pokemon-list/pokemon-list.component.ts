import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';
import { UppercasePokemonPipe } from '../../pipes/uppercase-pokemon.pipe';
import { FavoritePokemonService } from '../../services/favoritepokemonservice.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatIconModule, MatTableModule, CommonModule, ReplaceLettersPipe, UppercasePokemonPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  favorites: Set<string> = new Set();
  favoriteLimitReached: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private favoritePokemonService: FavoritePokemonService
  ) {}

  ngOnInit(): void {
    this.loadPokemonList();

    // Suscripción para obtener los favoritos actualizados
    this.favoritePokemonService.getFavorites().subscribe((favoriteList) => {
      this.favorites = new Set(favoriteList);
      this.filterPokemons();
    });
  }

  loadPokemonList(): void {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemons = response.results;
      this.filterPokemons();
    });
  }

  filterPokemons(): void {
    this.filteredPokemons = this.pokemons.filter((pokemon) => !this.favorites.has(pokemon.name));
  }

  toggleFavorite(pokemonName: string): void {
    if (this.favorites.has(pokemonName)) {
      this.favoritePokemonService.removeFavorite(pokemonName);
      this.favoriteLimitReached = false;
    } else {
      if (this.favorites.size >= 5) {
        this.favoriteLimitReached = true; // Indica que se ha alcanzado el límite
        return; // No permite agregar más de 5 favoritos
      } else {
        this.favoritePokemonService.addFavorite(pokemonName);
        this.favoriteLimitReached = false;
      }
    }
  }

  viewDetails(pokemonName: string): void {
    this.router.navigate(['/pokemondetails', pokemonName]);
  }

  redirect_to_favorites(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/favorites']);
  }
}
