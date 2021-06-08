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

   ngOnInit(){
    console.log('Home : 9a3ed nasna3 fel page');
  }

  ionViewWillEnter(){
    this.recettes = this.recetteService.getRecettes();
    console.log('Home : bch nod5el le view');

  }

   ionViewDidEnter(){
    console.log('Home : c bon d5al lel view');

  }

  ionViewWillLeave(){
    console.log('Home : bch no5rej mel view');
  }

  ionViewDidLeave(){
    console.log('Home : c bn 5rajt mel view');

  }

  ngOnDestroy(){
    console.log('Home : Page mchét ala rou7ha ');

  }

}
