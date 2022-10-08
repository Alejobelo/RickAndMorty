import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hitorial, DataCharacter, DataEpisodes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class RickMortyService {

  apiUrl = environment.api;
  private _historial: Hitorial[] = [];

  get historial(){
    return[...this._historial]
  }

  constructor(private http: HttpClient) {}

  search(path: string, query: string, valueQuery: string){
    valueQuery = valueQuery.trim().toLocaleLowerCase();
    const saveHistorial: Hitorial = {
      valueQuery,
      path,
      query
    }
    if(this._historial.every((item: Hitorial) => JSON.stringify(item) !== JSON.stringify(saveHistorial))) {
      this._historial.unshift(saveHistorial);
      this._historial = this._historial.splice(0,6);
    }
    return this.http.get<DataCharacter | DataEpisodes>
    (`${this.apiUrl}/${path}/${query}${valueQuery}`);

  }
  searchAll(path:string){
    return this.http.get<DataCharacter | DataEpisodes>(`${this.apiUrl}/${path}`)

  }

}
