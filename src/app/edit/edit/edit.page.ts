import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from 'src/app/model/recette';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
   activeRecette : Recette

  constructor(private activatedRoute : ActivatedRoute
              ,private router : Router,
              private recetteService : RecetteService
               ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        console.log(params.get('id'));

        this.activeRecette = this.recetteService.getRecetteById(+params.get('id'))
        console.log(this.activeRecette);

      }
    )

  }
  ngIonViewWillEnter(){
    console.log("Edit : will enter view");
  }

  ngIonViewDidEnter(){
    console.log("Edit : did entered view");

  }

  updateRecette(f){
    let updRecette = new Recette( f.value.id, f.value.title,f.value.description , f.value.type, f.value.imageUrl , []);
    console.log(updRecette);

    this.recetteService.updateRecette(updRecette)
    this.router.navigate(["/home"])
  }

}
