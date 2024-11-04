import { Routes } from '@angular/router';
import { ListaPokemonComponent } from './modules/lista-pokemon/lista-pokemon.component';
import { DetallesPokemonComponent } from './modules/detalles-pokemon/detalles-pokemon.component';

export const routes: Routes = [
    {path: "", redirectTo: "pokemonlist", pathMatch: 'full'},
    {path: "pokemonlist", component: ListaPokemonComponent},
    {path: "pokemondetails/:name", component: DetallesPokemonComponent}
];