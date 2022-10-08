import { Component, OnInit } from '@angular/core';
import { DataCharacter, ResultCharacter } from '../../interfaces/interfaces';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  titlePage: string = 'Personajes'
  result: ResultCharacter[] = [];
  path: string = 'character'

  constructor(private rickMortyService: RickMortyService) {
    this.getDataService()
  }

  ngOnInit(): void {
  }
  getDataService(){
    this.rickMortyService.searchAll(this.path)
    .subscribe((res: any) =>{
      this.result = res.results
    })
  }
  setResult(data: DataCharacter ) {
    this.result = data.results;
    console.log(this.result)
  }

}
