export function renderButtonWhite(name: string, className: string, id: string, width: string) {
  return `<button id="${id}" class="${className} inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-myblue rounded-md shadow-sm hover:bg-myblue hover:text-white focus:outline-none focus:shadow-none w-${width}">${name}</button>`;
}

export function renderButtonBlue(name: string, className: string, id: string, width: string) {
  return `<button id="${id}" class="${className} text-sm bg-myblue w-${width} text-white px-3 py-1 rounded-md">${name}</button>`;
}
