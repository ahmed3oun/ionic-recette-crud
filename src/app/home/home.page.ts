import { Component, OnInit } from '@angular/core';
import { Recette } from '../model/recette';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recettes : Recette[];

  constructor(private recetteService : RecetteService) {}

  /*ngOnInit(){
    this.recettes = this.recetteService.getRecettes();
  }*/

  ionViewWillEnter(){
    this.recettes = this.recetteService.getRecettes();
  }

}
