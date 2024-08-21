import { Component } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokemon1!: Pokemon;

  constructor() {
    this.pokemon1 = new Pokemon();
    this.pokemon1.name = "Pikachu";
    this.pokemon1.hp = 100;
    this.pokemon1.type = "https://tinyurl.com/25sjakvj";
    this.pokemon1.attackName = "Poudre";
    this.pokemon1.attackDescription = "Cette attaque fait 10 dégâts à 1 des Pokémon de l'adversaire. Ce Pokémon ne s'applique pas aux dégâts faibles et résistants.";
    this.pokemon1.weakness = "https://tinyurl.com/25sjakvj";
    this.pokemon1.resistance = "https://tinyurl.com/25sjakvj";
    this.pokemon1.attackStrenght = 10;
    this.pokemon1.id = 1;
    this.pokemon1.height = 50;
    this.pokemon1.weight = 10;
  }

}
