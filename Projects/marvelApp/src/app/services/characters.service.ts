import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

public_key = 'c7e6dcca22b55b6ba87c2eee1a1c6b88';
hash = '0afff71e24fff4c59b07b534b215481f';
baseUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=1100&apikey=${this.public_key}&hash=${this.hash}`;

  constructor(private httpClient: HttpClient) { }

  getAllCharacters (): Observable<any> {
    console.log(this.baseUrl)
    return this.httpClient.get<any>(this.baseUrl);
  }
}
