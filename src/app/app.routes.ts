import { Routes } from '@angular/router';
import { ListaPokemonComponent } from './modules/lista-pokemon/lista-pokemon.component';
import { DetallesPokemonComponent } from './modules/detalles-pokemon/detalles-pokemon.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ListFavPokemonsComponent } from './modules/list-fav-pokemons/list-fav-pokemons.component';

export const routes: Routes = [
    {path: "", redirectTo: "pokemonlist", pathMatch: 'full'},
    {path: "pokemonlist", component: ListaPokemonComponent},
    {path: "pokemondetails/:name", component: DetallesPokemonComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: "favorites", component: ListFavPokemonsComponent},
    {path: '**', redirectTo: 'not-found'}
];