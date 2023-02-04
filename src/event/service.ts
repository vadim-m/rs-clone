import { IService, IWorksDetals } from '../types';
import { carData } from '../car/car_data';

export class Service {
  serviceEvent: IService | undefined;

  constructor() {
    this.createServiceEvent();
  }

  amountServiceAll(): number {
    return carData.event.service.reduce((acc: number, el): number => {
      return acc + el.amount;
    }, 0);
  }

  createServiceEvent() {
    const mileageDOM = document.querySelector('#milage--service__input') as HTMLInputElement;
    const typeDOM = document.querySelector('#type--service__input') as HTMLInputElement;
    const nameDOM = document.querySelector('#name--service__input') as HTMLInputElement;
    const worksNameDOM = document.querySelectorAll('.work-name--service__input') as NodeList;
    const worksCostDOM = document.querySelectorAll('.work-cost--service__input') as NodeList;
    const detalsNameDOM = document.querySelectorAll('.detals-name--service__input') as NodeList;
    const detalsPartDOM = document.querySelectorAll('.detals-part--service__input') as NodeList;
    const detalsManufDOM = document.querySelectorAll('.detals-manuf--service__input') as NodeList;
    const detalsPriceDOM = document.querySelectorAll('.detals-price--service__input') as NodeList;
    const detalsQuantDOM = document.querySelectorAll('.detals-quant--service__input') as NodeList;
    const detalsAmountDOM = document.querySelectorAll('.detals-amount--service__input') as NodeList;
    const placeDOM = document.querySelector('#place--service__input') as HTMLInputElement;
    const notesDOM = document.querySelector('#notes--service__input') as HTMLInputElement;

    const worksDetalsArr: IWorksDetals[] = [];
    const curServiceAmount = Array.from(detalsAmountDOM).reduce((acc, e) => {
      return acc + Number(e.textContent);
    }, 0);
    const lengthWorksOrDetals = detalsNameDOM.length > worksNameDOM.length ? detalsNameDOM.length : worksNameDOM.length;
    for (let i = 0; i < lengthWorksOrDetals; i += 1) {
      worksDetalsArr.push({
        works: {
          name: worksNameDOM[i].textContent as string,
          cost: Number(worksCostDOM[i].textContent),
        },
        detals: {
          name: detalsNameDOM[i].textContent as string,
          partNumber: detalsPartDOM[i].textContent as string,
          manufacturer: detalsManufDOM[i].textContent as string,
          price: Number(detalsPriceDOM[i].textContent),
          quantity: Number(detalsQuantDOM[i].textContent),
          amount: Number(detalsAmountDOM[i].textContent),
        },
      });
    }

    carData.event.service.push({
      date: new Date().toLocaleString(),
      mileage: Number(mileageDOM.value),
      type: typeDOM.value,
      name: nameDOM.value,
      worksDetals: worksDetalsArr,
      amount: curServiceAmount,
      place: placeDOM.value,
      notes: notesDOM.value,
      id: Date.now().toString(),
    });
    console.log(carData);
  }
}
