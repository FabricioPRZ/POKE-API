import { Component, OnInit } from '@angular/core';
import { FavoritePokemonService } from '../../services/favoritepokemonservice.service';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';
import { UppercasePokemonPipe } from '../../pipes/uppercase-pokemon.pipe';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule

@Component({
  selector: 'app-pokemon-fav',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReplaceLettersPipe, UppercasePokemonPipe, RouterModule],  // Importar RouterModule
  templateUrl: './pokemon-fav.component.html',
  styleUrls: ['./pokemon-fav.component.scss']
})
export class PokemonFavComponent implements OnInit {
  favoritePokemons: any[] = [];
  selectedPokemon: any | null = null; // Para almacenar el Pokémon seleccionado

  constructor(
    private favoritePokemonService: FavoritePokemonService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.favoritePokemonService.getFavorites().subscribe((favoritesNames: string[]) => {
      this.loadFavoritePokemons(favoritesNames); 
    });
  }

  loadFavoritePokemons(favoritesNames: string[]): void {
    this.favoritePokemons = [];
    favoritesNames.slice(0, 5).forEach(name => {
      this.pokemonService.getPokemonDetails(name).subscribe(pokemon => {
        this.favoritePokemons.push(pokemon); 
      });
    });
  }
  

  removeFavorite(pokemonName: string): void {
    this.favoritePokemonService.removeFavorite(pokemonName);
    this.favoritePokemons = this.favoritePokemons.filter(pokemon => pokemon.name !== pokemonName);
  }

  // Alterna los detalles del Pokémon
  toggleDetails(pokemon: any): void {
    if (this.selectedPokemon && this.selectedPokemon.name === pokemon.name) {
      this.selectedPokemon = null; // Si ya está seleccionado, lo deseleccionamos
    } else {
      this.selectedPokemon = pokemon; // Seleccionamos el Pokémon
    }
  }
}
