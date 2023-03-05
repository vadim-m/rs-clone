export function getDateTime(): string {
  return (
    new Date().getFullYear() +
    '-' +
    ('0' + (+new Date().getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + +new Date().getDate()).slice(-2) +
    'T' +
    ('0' + +new Date().getHours()).slice(-2) +
    ':' +
    ('0' + +new Date().getMinutes()).slice(-2)
  );
}

export function getDatePlusMonths(quantityMonth: number): string {
  return (
    new Date().getFullYear() +
    '-' +
    ('0' + (+new Date().getMonth() + 1 + quantityMonth)).slice(-2) +
    '-' +
    ('0' + +new Date().getDate()).slice(-2)
  );
}

export function getDatePlusYear(quantityYear: number): string {
  return (
    new Date().getFullYear() +
    quantityYear +
    '-' +
    ('0' + (+new Date().getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + +new Date().getDate()).slice(-2)
  );
}

export function getAnyDate(date: string): string {
  return (
    new Date(date).getFullYear() +
    '-' +
    ('0' + (+new Date(date).getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + new Date(date).getDate()).slice(-2)
  );
}

export function getSumDate(date: string, day: string) {
  const myDate = new Date(date);
  return new Date(myDate.setDate(myDate.getDate() + +day)).toISOString().slice(0, -14);
}
