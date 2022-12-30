import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit{

  characterInfo: Character[] = [];

  constructor (
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit () {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = parseInt(params.idcharacter)

      this.charactersService.getCharacterById(id).subscribe((data: any) => {
        this.characterInfo = data.data.results
        console.log(this.characterInfo)
      });
    })
  }
}
