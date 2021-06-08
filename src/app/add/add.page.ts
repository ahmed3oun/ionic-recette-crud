import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Recette } from '../model/recette';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private recetteService : RecetteService, private router : Router) { }

  ngOnInit() {
  }

  addRecette(f : NgForm){
    console.log(f);
    let values = f.value; // { id : 3 , title : expmple , type: 1 ...}
    let newRecette = new Recette(values.id, values.title, values.description, values.type, values.imageUrl, []);
    this.recetteService.addRecette(newRecette);
    this.router.navigate(["/home"]);
  }

}
