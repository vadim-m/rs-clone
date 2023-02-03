export interface ICarData {
  info: {
    brand: string;
    model: string;
    year: number;
    mileage: number;
    sizeTank: number;
    fuelInTank: number;
    cost: number;
  };
  indicators: {
    curMileage: number;
    curSpendMoney: number;
    curSpendFuel: number;
    previousRefuel: {
      mileage: number;
      spendMoney: number;
      spendFuel: number;
    };
    lastFullTank: {
      mileage: number;
      spendFuel: number;
    };
  };
  event: {
    fill: IFill[];
    service: IService[];
    others: IOther[];
    plans: IPlans[];
  };
}

interface IFill {
  date: string;
  mileage: number;
  costFuel: number;
  amountFuel: number;
  isFull: boolean;
  isLostRefuel: boolean;
  fuelInTank?: number;
  notes: string;
  id: string;
}

interface IService {
  date: string;
  mileage: number;
  type: string;
  name: number;
  worksDetals: IWorksDetals[];
  amount: number;
  place: string;
  notes: string;
  id: string;
}

interface IOther {
  date: string;
  mileage: number;
  name: number;
  amount: number;
  place: string;
  notes: string;
  id: string;
}

interface IPlans {
  category: IService | IOther;
}

interface IWorksDetals {
  works: {
    name: string;
    cost: number;
  };
  detals: {
    name: string;
    partNumber: string;
    manufacturer: string;
    price: number;
    quantity: number;
    amount: number;
  };
}
