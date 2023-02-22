export let currentLiArr: HTMLElement[] = [];

export function searchLi(element: HTMLElement, UlParentElement: HTMLElement) {
  currentLiArr = [];
  if (element.tagName === 'LI') {
    currentLiArr.push(element);
    return;
  } else {
    if (element === UlParentElement) {
      return;
    }
    searchLi(element.parentElement as HTMLElement, UlParentElement);
  }
}
