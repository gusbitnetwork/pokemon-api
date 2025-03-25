import { Component } from '@angular/core';
import { IPokemon } from 'src/app/models/IPokemon';
import { IPokemonListResponse } from 'src/app/models/IPokemonList';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  pokemons: IPokemon[] = [];

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.getNameAll().subscribe(
      (data: IPokemonListResponse) => {
        if (data && data.results) {
          for (const pokemon of data.results) {
            this.service.getPokemon(pokemon.name).subscribe({
              next: (res) => {
                this.pokemons.push({
                  id: res.id,
                  name: res.name,
                  sprites: res.sprites,
                  types: res.types,
                });
              },
              error: (res) => console.log(res),
            });
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
