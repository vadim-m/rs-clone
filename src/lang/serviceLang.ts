export function serviceLang() {
  if (localStorage.getItem('langMyCar') === 'EN') {
    return {
      type: 'Type of service',
      part: 'Part',
      name: 'Name',
      manufacture: 'Manufacture',
      price: 'Price',
      quant: 'Quant',
      costWorks: 'Cost works',
      amount: 'Amount',
      date: 'Date and time',
      mileage: 'Mileage',
      place: 'Autoshop name and address',
      comments: 'Comment',
      addEvent: 'Add event',
    };
  } else {
    return {
      type: 'Вид сервиса',
      part: 'Номер',
      name: 'Имя',
      manufacture: 'Производитель',
      price: 'Цена',
      quant: 'Количество',
      costWorks: 'Стоимость работ',
      amount: 'Общая стоимость',
      date: 'Дата и время',
      mileage: 'Пробег',
      place: 'Место',
      comments: 'Комментрий',
      addEvent: 'Добавить событие',
    };
  }
}
