import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritePokemonService {
  private favorites: Set<string> = new Set();
  private favoritesSubject = new BehaviorSubject<string[]>([]);

  getFavorites() {
    return this.favoritesSubject.asObservable();
  }

  addFavorite(pokemonName: string): void {
    this.favorites.add(pokemonName);
    this.updateFavorites();
  }

  removeFavorite(pokemonName: string): void {
    this.favorites.delete(pokemonName);
    this.updateFavorites();
  }

  isFavorite(pokemonName: string): boolean {
    return this.favorites.has(pokemonName);
  }

  private updateFavorites(): void {
    this.favoritesSubject.next(Array.from(this.favorites));
  }
}
