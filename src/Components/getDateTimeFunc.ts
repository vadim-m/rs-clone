export function getDateTime(): string {
  return (
    new Date().getFullYear() +
    '-' +
    ('0' + (+new Date().getMonth() + 1)).slice(-2) +
    '-' +
    new Date().getDate() +
    'T' +
    new Date().getHours() +
    ':' +
    new Date().getMinutes()
  );
}
