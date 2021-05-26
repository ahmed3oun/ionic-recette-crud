import { Injectable } from '@angular/core';
import { Recette } from '../model/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private recettes : Recette[] = [
    new Recette(1, "Couscous", "Repas traditionnel tunisien ....", 2, "https://www.mesinspirationsculinaires.com/wp-content/uploads/2015/12/couscous-tunisien-harissa-1-600x330.jpg", ["couscous", "tomates", "pomme de terre", "viande"]),
    new Recette(2, "Makroudh", "patisserie tunisienne ....", 1, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Makrouds.JPG/250px-Makrouds.JPG", ["dattes farcies", "Semoule", "Sucre"])
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

  addRecette(recette : Recette){
    this.recettes.push(recette);
  }
}
