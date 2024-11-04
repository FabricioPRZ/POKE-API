import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PokemonDetailsComponent } from "../../components/pokemon-details/pokemon-details.component";

@Component({
  selector: 'app-detalles-pokemon',
  standalone: true,
  imports: [HeaderComponent, PokemonDetailsComponent],
  templateUrl: './detalles-pokemon.component.html',
  styleUrl: './detalles-pokemon.component.scss'
})
export class DetallesPokemonComponent {

}
