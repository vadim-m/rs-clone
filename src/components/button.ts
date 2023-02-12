export function renderButton(name: string, className: string, id: string) {
  return `<button is="${id}" class="${className}">${name}</button>`;
}
