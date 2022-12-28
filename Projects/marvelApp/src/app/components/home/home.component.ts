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

  arrCharacters: Character[] = [];
  page!: number;
  characterName!: string;
  searchedCharacter: Character[] = [];
  showSearchResult!: boolean;

  constructor (private charactersService: CharactersService) {}

  ngOnInit (): void {
    this.charactersService.getAllCharacters().subscribe((data: any) => {
      this.arrCharacters = data.data.results
    })
    this.showSearchResult = false
  }
  
  findCharacter(event:any)
{
   this.characterName = event.target.value;
   console.log(this.characterName);
   this.charactersService.getCharacterByName(this.characterName).subscribe((result)=>{
     if(result.data.count>0)
     {
       this.showSearchResult = true;
       this.searchedCharacter = result.data.results;
     }
     else{

       this.ngOnInit();
     }
   })
}
}


