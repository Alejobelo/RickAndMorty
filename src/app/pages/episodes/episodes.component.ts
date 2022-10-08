import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';
import { DataEpisodes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  titlePage: string = 'Episodios'
  result: any[] = [];
  path: string = 'episode'

  constructor(private rickMortyService:RickMortyService) {
    this.getDataService()
  }

  ngOnInit(): void {
  }

  setResult(data: any) {
    this.result = Array.isArray(data) ? data : [data];
  }
  getDataService(){
    this.rickMortyService.searchAll(this.path)
    .subscribe((res: any) =>{
      this.result = res.results
    })
  }

}
