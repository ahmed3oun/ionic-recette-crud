import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recette } from '../model/recette';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  recetteActive : Recette;

  constructor(
    private activatedRoute : ActivatedRoute,
    private recetteService : RecetteService,
    private router : Router,
    private alertConroller : AlertController
  ) { }

  deleteRecette(){
    this.alertConroller.create(
      {
        header : "Suppression",
        message : "Êtes-vous sûre de vouloir supprimer la recette?",
        buttons : [
          {
            text : "Annuler",
            role : "cancel"
          },
          {
            text : "Supprimer",
            handler : ()=>{
              this.recetteService.deleteRecette(this.recetteActive.id);
              this.router.navigate(["/home"]);
            }
          }
        ]
      }
    ).then(alertCtr => {
      alertCtr.present();
    });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params['id']);
        this.recetteActive = this.recetteService.getRecetteById(+params['id']);
      }
    );
  }

}
