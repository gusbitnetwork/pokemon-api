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
    this.baseURL = environment.urlApi;
  }

  getPokemon(pokemonName: string): Observable<IPokemon> {
    const valor = this.http.get<IPokemon>(`${this.baseURL}${pokemonName}`);
    return (this.pokeData = valor);
  }

  getNameAll(): Observable<IPokemonListResponse> {
    return this.http.get<IPokemonListResponse>(`${this.baseURL}`);
  }
}
