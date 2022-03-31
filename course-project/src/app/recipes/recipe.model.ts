export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;

  constructor(name: string, des: string, imgPath: string) {
    this.name = name;
    this.description = des;
    this.imgPath = imgPath;
  }
}
