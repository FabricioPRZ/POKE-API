import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PokemonFavComponent } from "../../components/pokemon-fav/pokemon-fav.component";

@Component({
  selector: 'app-list-fav-pokemons',
  standalone: true,
  imports: [HeaderComponent, PokemonFavComponent],
  templateUrl: './list-fav-pokemons.component.html',
  styleUrl: './list-fav-pokemons.component.scss'
})
export class ListFavPokemonsComponent {

}
