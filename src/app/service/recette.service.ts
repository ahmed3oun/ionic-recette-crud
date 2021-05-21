import { Injectable } from '@angular/core';
import { Recette } from '../model/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private recettes : Recette[] = [
    new Recette(1, "Couscous", "Repas traditionnel tunisien ....", 2, "https://www.mesinspirationsculinaires.com/wp-content/uploads/2015/12/couscous-tunisien-harissa-1-600x330.jpg", ["couscous", "tomates", "pomme de terre", "viande"]),
    new Recette(2, "Makroudh", "patisserie tunisienne ....", 1, "https://lh3.googleusercontent.com/proxy/6k-0VwJUbyFuFpta02Rln9VeopdMYLNU7RA6mn9adaktjM96V20F9KEVYJIHCnsiAfX-J76-d5bcIs_WcTrSrjIVd3Z6WDVuWYWDNE65hIPCxrT5ktZXF1txTA", ["dattes farcies", "Semoule", "Sucre"])
  ]

  constructor() { }

  getRecettes(){
    return [...this.recettes];
  }

  getRecetteById(id : number){
    return {...this.recettes.find(
      recette => recette.id === id
    )};
  }

  deleteRecette(id : number){
    this.recettes = this.recettes.filter(
      recette => recette.id !== id
    )
    console.log(this.recettes);
  }
}
