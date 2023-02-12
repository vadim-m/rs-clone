export function eventLang() {
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
      add: 'Add',
      addEvent: 'Add event',
      category: 'Category',
      service: 'Service',
      other: 'Other',
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
      add: 'Добавить',
      addEvent: 'Добавить событие',
      category: 'Категория',
      service: 'Сервис',
      other: 'Другое',
    };
  }
}
