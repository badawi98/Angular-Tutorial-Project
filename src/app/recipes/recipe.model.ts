export class Recipe {
  public name : string;
  public desription : string;
  public imagePath : string;

  constructor(name : string , desc : string , imagePath : string) {
    this.name = name;
    this.desription = desc;
    this.imagePath = imagePath;
  }
}
