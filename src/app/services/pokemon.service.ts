import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon';
import { IPokemonListResponse } from '../models/IPokemonList';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL: string = '';
  private pokeData: IPokemon | any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokemonApi;
  }

  getPokemon(pokemonName: string): Observable<IPokemon> {
    const valor = this.http.get<IPokemon>(`${this.baseURL}${pokemonName}`);
    return (this.pokeData = valor);
  }

  getNameAll(): Observable<IPokemonListResponse> {
    return this.http.get<IPokemonListResponse>(`${this.baseURL}`);
  }

  private typeColors: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  };
  
  getTypeColor(type: string): string {
    return this.typeColors[type.toLowerCase()] || '#fff';
  }
  
  
}
