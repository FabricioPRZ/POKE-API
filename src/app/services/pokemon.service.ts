import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 15): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=${limit}`);
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/${name}`);
  }
}
