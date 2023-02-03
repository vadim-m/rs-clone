export class Fill {
  fuelCost = 2.46;

  constructor() {
    this.fuelCost;
  }

  amountFuel(money: number) {
    money / this.fuelCost;
  }

  sumMoney(fuel: number) {
    fuel * this.fuelCost;
  }
}
