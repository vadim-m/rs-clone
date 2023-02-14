export function onFocus(page: string) {
  const allInputArr: HTMLInputElement[] = [...document.querySelectorAll('input')];
  const allTitleArr: HTMLElement[] = Array.from(document.querySelectorAll(`.${page}__title`));

  allTitleArr.forEach((eT) => {
    eT.style.top = `${eT.clientHeight > 30 ? '-1.5rem' : '0'}`;
  });
  allInputArr.forEach((eI) => {
    if ((eI.value.length > 0 || eI.type === 'date') && eI.type !== 'chekbox') {
      allTitleArr.forEach((eT) => {
        eT.style.color = 'grey';
        if (eI.id.slice(15) === eT.id.slice(15)) {
          eT.style.top = `${eT.clientHeight > 30 ? '-2.5rem' : '-1.5rem'}`;
          eT.style.color = 'grey';
          eT.style.fontSize = '0.8rem';
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
}
