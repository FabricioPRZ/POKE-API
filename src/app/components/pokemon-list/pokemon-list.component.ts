import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';
import { UppercasePokemonPipe } from '../../pipes/uppercase-pokemon.pipe';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [ MatIconModule,  MatTableModule, CommonModule,  ReplaceLettersPipe, UppercasePokemonPipe ],



  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{
  pokemons: any[] = [];
  favorites: Set<string> = new Set();

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    this.pokemonService.getPokemonList().subscribe(response => {
      this.pokemons = response.results;
    });
  }

  toggleFavorite(pokemonName: string): void {
    if (this.favorites.has(pokemonName)) {
      this.favorites.delete(pokemonName);
    } else {
      this.favorites.add(pokemonName);
    }
  }

  viewDetails(pokemonName: string): void {
    this.router.navigate(['/pokemondetails', pokemonName]);
  }
}
