import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  name: string = 'Bulbizarre';
  hp: number = 50;
  id: number = 1;
  height: number = 50;
  weight: number = 10;
  attackName: string = "Geo Impact";
  attackStrength: number = 10;
  attackDescription: string = "This attack does 10 damage to 1 of the opponent's Pokémon. This Pokémon does not apply Weakness and Resistance."
  weakness: string = "https://tinyurl.com/25sjakvj";
  resistance: string = "https://tinyurl.com/25sjakvj";
  

}


