import { Component, ElementRef, Input, OnInit, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {

  @Input() titlePage: string = '';
  @Input() path = '';
  @Input() query = '';
  @Input() placeholder = 'Buscar';
  @Output() result: EventEmitter<any>;

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private rickMortyService: RickMortyService,
    private renderer: Renderer2
  ) {
    this.result = new EventEmitter();
    console.log(this.result)
  }

  search(value: string) {
    if (value.length === 0) {
      return;
    }
    this.rickMortyService.search(this.path, this.query, value).subscribe({
      next: (res) => {
        this.result.emit(res);
        this.renderer.setProperty(this.txtBuscar.nativeElement, 'value', '');
      },
      error: (err) => {

      },
      complete: () => {

      }
    });

  }

  ngOnInit(): void {}
}
