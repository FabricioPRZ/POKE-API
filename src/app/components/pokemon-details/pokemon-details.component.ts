import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';
import { UppercasePokemonPipe } from '../../pipes/uppercase-pokemon.pipe';
import { TitlecaseBattlePipe } from '../../pipes/titlecase-battle.pipe';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, TitlecaseBattlePipe, ReplaceLettersPipe,  UppercasePokemonPipe],


  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.loadPokemonDetails(name);
    }
  }

  loadPokemonDetails(name: string): void {
    this.pokemonService.getPokemonDetails(name).subscribe(response => {
      console.log(response);  // Inspecciona la respuesta aquí
      this.pokemon = response; // Asegúrate de que 'response' tiene la estructura esperada
    }, error => {
      console.error(error); // Maneja el error si ocurre
    });
  }  
}