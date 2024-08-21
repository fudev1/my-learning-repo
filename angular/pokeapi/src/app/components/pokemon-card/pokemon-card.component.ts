import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})

export class PokemonCardComponent {

  // @Input() name: string = 'Bulbizarre';
  // @Input() hp: number = 50;
  // @Input() type: string = "https://tinyurl.com/25sjakvj";
  // @Input() id: number = 1;
  // @Input() height: number = 50;
  // @Input() weight: number = 10;
  // @Input() attackName: string = "Geo Impact";
  // @Input() attackStrength: number = 10;
  // @Input() attackDescription: string = "This attack does 10 damage to 1 of the opponent's Pokémon. This Pokémon does not apply Weakness and Resistance."
  // @Input() weakness: string = "https://tinyurl.com/25sjakvj";
  // @Input() resistance: string = "https://tinyurl.com/25sjakvj";

  // @Input() pokemon: Pokemon = new Pokemon();

  @Input({
    //required: true // Ne pas laisser le composant sans données
    alias: 'my-pokemon', // Possible de changer l'alias de variable [pokemon]="" par [my-pokemon]=""
    transform: (value: Pokemon) => { 
      value.hp = value.hp * 2; // On multiplie le hp par 2 pour afficher le bon hp
      return value 
    }
  }) pokemon: Pokemon = new Pokemon();

}


