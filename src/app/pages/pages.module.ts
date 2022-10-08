import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    HomeComponent,
    EpisodesComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
