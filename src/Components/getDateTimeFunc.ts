export function getDateTime(): string {
  return (
    new Date().getFullYear() +
    '-' +
    ('0' + (+new Date().getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + (+new Date().getDate() + 1)).slice(-2) +
    'T' +
    ('0' + (+new Date().getHours() + 1)).slice(-2) +
    ':' +
    ('0' + (+new Date().getMinutes() + 1)).slice(-2)
  );
}
