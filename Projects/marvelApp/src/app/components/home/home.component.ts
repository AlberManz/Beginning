import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrCharacter!: Observable<any[]>

  constructor (private charactersService: CharactersService) {}

  ngOnInit () {
    this.charactersService.getAllCharacters().subscribe( (data: any) => {
      this.arrCharacter = data.data
      console.log(this.arrCharacter)
    })
  }

}
