import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharacterComponent } from './character/character.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
