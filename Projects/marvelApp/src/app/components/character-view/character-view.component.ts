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

  character!: Character

  constructor (
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idcharacter)
      console.log(id)

      this.charactersService.getCharacterById(id).subscribe((data: any) => this.character = data.data.results)
      console.log(this.character)
    })
  }

}
