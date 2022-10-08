import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';



@NgModule({
  declarations: [
    SidebarComponent,
    ResultadosComponent,
    BusquedaComponent
  ],
  exports: [
    SidebarComponent,
    ResultadosComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
})
export class SharedModule { }
