import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  @Output() result: EventEmitter<any>;

  get historial(){
    return this.rickMortyService.historial
  }


  constructor(private rickMortyService: RickMortyService) {
    this.result = new EventEmitter();
  }

  search(path: string, query: string, valueQuery: string){
    this.rickMortyService.search(path, query, valueQuery).subscribe({
      next: (res) => {
        this.result.emit(res);
        console.log(path, query, valueQuery)
      }
    })
  }

  ngOnInit(): void {
  }

}
