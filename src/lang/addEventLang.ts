import { getCurrentLanguage } from '../utilits/getCurrentSettings';
export function eventLang() {
  if (getCurrentLanguage() === 'English') {
    return {
      typeService: 'Type of service',
      typeFuel: 'Type of fuel',
      type: 'Type',
      part: 'Part',
      name: 'Name',
      manufacture: 'Manufacture',
      price: 'Price',
      quant: 'Quant',
      costWorks: 'Cost works',
      cost: 'Cost',
      amount: 'Amount',
      date: 'Date and time',
      mileage: 'Mileage',
      place: 'Autoshop name and address',
      comments: 'Comment',
      add: 'Add',
      addEvent: 'Add event',
      addReminder: 'Add reminder',
      category: 'Category',
      service: 'Service',
      refuel: 'Refuel',
      reminder: 'Reminder',
      other: 'Other',
      previosDate: 'Date of previous execution',
      previosMileage: 'Mileage at the time of execution',
      onMileage: 'Remind on run',
      afterMileage: 'and/or after',
      after: 'after',
      onDate: 'Remind on the day',
      afterDate: 'and/or after',
      repeat: 'To repeat',
      tankFull: 'Full tank',
      petrol: 'Petrol - AI',
      diesel: 'Diesel',
      gasPropan: 'Gas - propane',
      gasMethane: 'Gas - methane',
      gasLPN: 'Gas - LPN',
      maintenance: 'Maintenance',
      repair: 'Repair',
      replacement: 'Replacement',
      tuning: 'Tuning',
      sparePart: 'Spare part',
      diagnostics: 'Diagnostics',
      carWash: 'Car wash',
      fine: 'Fine',
      parking: 'Parking',
      tollFare: 'Toll fare',
      inshurance: 'Insurance',
      tax: 'Tax',
      registration: 'Registration',
      techInspect: 'Technical inspection',
      changingOil: 'Oil change with a filter in the engine',
      airFilter: 'Replacing the air filter',
      fuelFilter: 'Replacing the fuel filter',
      interiorFilter: 'Replacement of the interior dust filter',
      brakePadsFront: 'Replacement of brake pads (front)',
      brakePadsRear: 'Replacement of brake pads (rear)',
      brakeFluid: 'Replacement the brake fluid',
      timingBelts: 'Replacement of belts, timing rollers',
      sparkPlugs: 'Replacing spark plugs',
      antifreeze: 'Replacement of coolant (antifreeze)',
      transmissionOil: 'Oil change from transmission',
      diagnosticsSuspension: 'Diagnostics of car suspension steering',
      diagnosticsElectrical: 'Diagnostics of electrical equipment',
      winterTires: 'Winter tires',
      summerTires: 'Summer tires',
      carBattery: 'Replacement car battery',
      day: 'days',
      week: 'week',
      month: 'month',
      year: 'year',
      myMaintenance: 'Maintenance schedule',
      myPlans: 'My plans',
      allPlans: 'All plans',
      allEvents: 'All events',
      refuels: 'Refuels',
      validatorName: 'There is already such a reminder. Change the name of the reminder.',
      cantFindPage: 'Sorry, we couldn`t find this page.',
      main: 'Main',
      events: 'Events',
      plans: 'Plans',
      statistic: 'Statistics',
      settings: 'Settings',
      notes: 'Notes',
      aboutUs: 'About us',
      myCar: 'My car',
      carCosts: 'Car costs',
      gasolineCost: 'Cost of gasoline',
      gasMileage: 'Gas mileage',
      nearestPlans: 'Nearest Plans',
      recentEvents: 'Recent Events',
      whatToDo: 'What to do ?',
      perMonth: 'Per Month:',
      perYear: 'Per Year:',
      currentYear: 'Current year',
      lastYear: 'Last year',
      totalMileage: 'Total MileAge',
      perPeriodMileage: 'Mileage per Period',
      car: 'car',
      brand: 'Brand',
      change: 'Change',
      model: 'Model',
      yearOfRelease: 'Year of release',
      fuelType: 'Fuel type',
      petrolSelect: 'Petrol',
      gasSelect: 'Gas',
      electricity: 'Electricity',
      hybrid: 'Hybrid',
      currentMileage: 'Mileage (current), km',
      tankVolume: 'Tank volume, l',
      engine: 'Engine',
      volume: 'Volume, l',
      power: 'Power, HP',
      rubKm: 'rub/km',
      l100: 'l/100km',
      km: 'km',
      totalExpenses: 'Total expenses due ',
      yearStat: '',
      anotherExp: 'Another expenses',
      total: 'Total',
      consumption: 'Consumption',
      costMaintenance: 'Cost of maintenance: ',
      costPerDay: 'Cost per day:',
      rubDay: 'rub/day',
      costPerKm: 'Cost per km:',
      fuelСonsumption: 'Fuel consumption due ',
      averageExpenses: 'Everage Expenses',
      min: 'Min:',
      max: 'Max:',
      recentExpenses: 'Recent expenses',
      distance: 'Distance, km',
      fuelCost: 'Fuel cost',
      forecast: 'Fuel consumption forecast',
      l: 'l',
      calculation: 'Calculation',
      calculator: 'Fuel Consumption Calculator',
      en: 'English',
      ru: 'Russian',
      language: 'Language',
      currency: 'Currency',
      mode: 'Night mode',
      modeOn: 'Turn on night mode on all apps sections',
      interface: 'Interface orientation',
      interfaceOn: 'Turn on left hand irientation',
      rememberPrice: 'Remember the fuel`s price',
      guessMileage: 'Predict mileage',
    };
  } else {
    return {
      typeService: 'Вид сервиса',
      typeFuel: 'Вид топлива',
      type: 'Тип',
      part: 'Номер',
      name: 'Название',
      manufacture: 'Производитель',
      price: 'Цена',
      quant: 'Количество',
      costWorks: 'Стоимость работ',
      cost: 'Стоимость',
      amount: 'Общая стоимость',
      date: 'Дата и время',
      mileage: 'Пробег',
      place: 'Место',
      comments: 'Комментрий',
      add: 'Добавить',
      addEvent: 'Добавить событие',
      addReminder: 'Добавить напоминание',
      category: 'Категория',
      service: 'Сервис',
      refuel: 'Заправка',
      reminder: 'Напоминание',
      other: 'Другое',
      previosDate: 'Дата предыдущего выполнения',
      previosMileage: 'Пробег на момент выполнения',
      onMileage: 'Напомнить на пробеге',
      afterMileage: 'и/или через',
      onDate: 'Напомнить в день',
      afterDate: 'и/или через',
      after: 'через',
      repeat: 'Повторять',
      tankFull: 'Полный бак',
      petrol: 'Бензин - АИ',
      diesel: 'Дизель',
      gasPropan: 'Газ - пропан',
      gasMethane: 'Газ - метан',
      gasLPN: 'Газ - СПГ',
      maintenance: 'ТО',
      repair: 'Ремонт',
      replacement: 'Замена',
      tuning: 'Тюнинг',
      sparePart: 'Запчасть',
      diagnostics: 'Диагностика',
      carWash: 'Мойка',
      fine: 'Штраф',
      parking: 'Парковка',
      tollFare: 'Платный проезда',
      inshurance: 'Страховка',
      tax: 'Налог',
      registration: 'Регистрация',
      techInspect: 'Техосмотр',
      changingOil: 'Замена масла и масляного фильтра в двигателе',
      airFilter: 'Замена воздушного фильтра',
      fuelFilter: 'Замена топливного фильтра',
      interiorFilter: 'Замена противопыльного фильтра салона',
      brakePadsFront: 'Замена тормозных колодок (передние)',
      brakePadsRear: 'Замена тормозных колодок (задние)',
      brakeFluid: 'Замена тормозной жидкости',
      timingBelts: 'Замена ремней, роликов ГРМ',
      sparkPlugs: 'Замена свечей зажигания',
      antifreeze: 'Замена охлаждающей жидкости (антифриз)',
      transmissionOil: 'Смена масла с коробке передач',
      diagnosticsSuspension: 'Диагностика подвески автомобиля  рулевого управления',
      diagnosticsElectrical: 'Диагностика электрооборудования',
      winterTires: 'Зимние шины',
      summerTires: 'Летние шины',
      carBattery: 'Замена аккумулятора автомобиля',
      day: 'дн.',
      week: 'неделю',
      month: 'месяц',
      year: 'год',
      myMaintenance: 'График ТО',
      myPlans: 'Мои планы',
      allPlans: 'Все планы',
      allEvents: 'Все события',
      refuels: 'Заправки',
      validatorName: 'Такое напоминние уже есть. Измените название напоминания.',
      cantFindPage: 'Похоже, мы не можем найти нужную страницу.',
      main: 'Главная',
      events: 'События',
      plans: 'Планы',
      statistic: 'Статистика',
      settings: 'Настройки',
      notes: 'Заметки',
      aboutUs: 'О нас',
      myCar: 'Мой автомобиль',
      carCosts: 'Затраты на машину',
      gasolineCost: 'Стоимость бензина',
      gasMileage: 'Расход бензина',
      nearestPlans: 'Ближайшие планы',
      recentEvents: 'Последние события',
      whatToDo: 'Что нужно сделать ?',
      perMonth: 'За месяц:',
      perYear: 'За год:',
      currentYear: 'Текущий год',
      lastYear: 'Прошлый год',
      totalMileage: 'Общий пробег:',
      perPeriodMileage: 'Пробег за период:',
      car: 'машину',
      brand: 'Марка',
      change: 'Изменить',
      model: 'Модель',
      yearOfRelease: 'Год выпуска',
      fuelType: 'Вид топлива',
      petrolSelect: 'Бензин',
      gasSelect: 'Газ',
      electricity: 'Электричество',
      hybrid: 'Гибрид',
      currentMileage: 'Пробег (текущий), км',
      tankVolume: 'Объем бака, л.',
      engine: 'Двигатель',
      volume: 'Объем, л.',
      power: 'Мощность, л.с.',
      rubKm: 'руб/км',
      l100: 'л/100км',
      km: 'км',
      totalExpenses: 'Общие расходы за ',
      yearStat: 'г.',
      anotherExp: 'Другие расходы',
      total: 'Всего',
      consumption: 'Расход',
      costMaintenance: 'Стоимость содержания: ',
      costPerDay: 'Стоимость дня:',
      rubDay: 'руб/День',
      costPerKm: 'Стоимость за км.:',
      fuelСonsumption: 'Расход топлива за ',
      averageExpenses: 'Средний расход',
      min: 'Мин:',
      max: 'Макс:',
      recentExpenses: 'Последний расход:',
      distance: 'Расстояние, км.',
      fuelCost: 'Стоимость топлива',
      forecast: 'Прогноз расхода топлива',
      l: 'л.',
      calculation: 'Расчёт',
      calculator: 'Калькулятор расхода топлива',
      en: 'English',
      ru: 'Русский',
      language: 'Язык',
      currency: 'Валюта',
      mode: 'Ночной режим',
      modeOn: 'Включить ночной режим во всех разделах приложения',
      interface: 'Ориентация интерфейса',
      interfaceOn: 'Включить режим для левшей',
      rememberPrice: 'Помнить цену топлива',
      guessMileage: 'Предугадывать пробег',
    };
  }
}
