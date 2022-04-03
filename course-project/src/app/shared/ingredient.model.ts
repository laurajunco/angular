export class Ingredient {
  //one way to do this
  /*
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }*/

  //another way
  constructor(public name: string, public amount: number) {}
}
