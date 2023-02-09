export function getCurrentLanguage(): string {
  if (localStorage.getItem('langMyCar')) {
    return localStorage.getItem('langMyCar') as string;
  } else return 'RU';
}
