export function onFocus(page: string) {
  const allInputArr: HTMLInputElement[] = [...document.querySelectorAll('input')];
  const allSelectArr: HTMLSelectElement[] = [...document.querySelectorAll('select')];
  const allTitleArr: HTMLElement[] = Array.from(document.querySelectorAll(`.${page}__title`));

  allTitleArr.forEach((eTitle) => {
    eTitle.style.transition = 'all 0.2s ease-out';
    eTitle.style.top = `${eTitle.clientHeight > 30 ? '-1.5rem' : '0'}`;
  });
  allInputArr.forEach((eInput) => {
    if ((eInput.value.length > 0 || eInput.type === 'date') && eInput.type !== 'checkbox') {
      allTitleArr.forEach((eTitle) => {
        eTitle.style.color = 'grey';
        if (eInput.id.slice(15) === eTitle.id.slice(15)) {
          eTitle.style.top = `${eTitle.clientHeight > 30 ? '-2.5rem' : '-1.5rem'}`;
          eTitle.style.color = 'grey';
          eTitle.style.fontSize = '0.8rem';
        }
      });
    }
  });

  document.addEventListener('focusin', function (event) {
    if (
      (event.target as HTMLInputElement).matches(`.${page}__input`) &&
      (event.target as HTMLInputElement).type !== 'checkbox'
    ) {
      const curInput = event.target as HTMLInputElement;
      const lineParent = curInput.closest(`.${page}__item`) as HTMLElement;
      const titleLine = lineParent.querySelector(`.${page}__title`) as HTMLElement;
      const focusout = function focusout(event: Event) {
        if ((event.target as HTMLInputElement).value === '' && (event.target as HTMLInputElement).type !== 'date') {
          titleLine.style.top = `${titleLine.clientHeight > 30 ? '-1.5rem' : '0'}`;
          titleLine.style.color = 'grey';
          titleLine.style.fontSize = '1rem';
        }
      };

      curInput.removeEventListener('focusout', focusout);
      curInput.addEventListener('focusout', focusout);

      titleLine.style.top = `${titleLine.clientHeight > 30 ? '-2.5rem' : '-1.5rem'}`;
      titleLine.style.color = 'grey';
      titleLine.style.fontSize = '0.8rem';
    }
  });
  allSelectArr.forEach((eSelect) => {
    allTitleArr.forEach((eTitle) => {
      if (eSelect.id.slice(15) === eTitle.id.slice(15)) {
        eTitle.style.top = `${eTitle.clientHeight > 30 ? '-2.5rem' : '-1.5rem'}`;
        eTitle.style.color = 'grey';
        eTitle.style.fontSize = '0.8rem';
      }
    });
  });
}
