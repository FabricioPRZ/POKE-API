import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PokemonListComponent } from "../../components/pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-lista-pokemon',
  standalone: true,
  imports: [HeaderComponent, PokemonListComponent],
  templateUrl: './lista-pokemon.component.html',
  styleUrl: './lista-pokemon.component.scss'
})
export class ListaPokemonComponent {

}
