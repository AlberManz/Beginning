import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrCharacter: Character[] = [];
  page!: number;

  constructor (private charactersService: CharactersService) {}

  ngOnInit () {
    this.charactersService.getAllCharacters().subscribe( (data: any) => {
      this.arrCharacter = data.data.results
      console.log(this.arrCharacter)
    })
  }

}
