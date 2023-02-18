export default function validation(form: HTMLElement) {
  const inputs = form.querySelectorAll('input');
  let result = true;
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      result = false;
      const parent = input.closest('.add-car-form__required') as HTMLDivElement;
      const alert = parent.querySelector('p');
      alert?.classList.remove('hidden');
    } else {
      const parent = input.closest('.add-car-form__required') as HTMLDivElement;
      const alert = parent.querySelector('p');
      alert?.classList.add('hidden');
    }
  });
  return result;
}
