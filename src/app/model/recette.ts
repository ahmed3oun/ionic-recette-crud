export class Recette {
  id : number;
  title : string;
  description : string;
  type : number; //sucré, salé
  imageUrl : string;
  ingredients : string[];

  constructor(
       id : number,
       title : string,
       description : string,
       type : number,
       imageUrl : string,
       ingredients : string[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
      }
}
