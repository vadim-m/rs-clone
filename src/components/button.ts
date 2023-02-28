export function renderButtonWhite(name: string, className: string, id: string, width: string) {
  return `<button id="${id}" class="${className} inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-myblue rounded-md shadow-sm hover:bg-myblue hover:text-white focus:outline-none focus:shadow-none w-${width}">${name}</button>`;
}

export function renderButtonBlue(name: string, className: string, id: string, width: string) {
  return `<button id="${id}" class="${className} text-sm bg-myblue w-${width} text-white px-3 py-2 rounded-md">${name}</button>`;
}
export function renderButton(name: string, className: string, params: string) {
  return `<button class="${className} ${params}">${name}</button>`;
}

export const paramsButton = {
  redS: 'text-md bg-red-700 text-white mx-6 mb-4 px-9 py-2 rounded-md enabled:hover:bg-red-600 enabled:focus:bg-red-600 disabled:opacity-25 disabled:cursor-wait',
  transpRedS:
    'text-md text-white mx-6 mb-4 px-9 py-2 rounded-md enabled:hover:bg-red-600 enabled:focus:bg-red-600 disabled:opacity-25 disabled:cursor-wait',
  transpRedXS:
    'text-sm w-24 text-base mx-2 mb-2 px-3 py-2 rounded-md enabled:hover:bg-red-600 enabled:focus:bg-red-600 disabled:opacity-25 disabled:cursor-wait',
  transpBlueXS:
    'text-sm w-24 px-4 py-2 text-gray-600 whitespace-no-wrap bg-white border border-myblue rounded-md shadow-sm hover:bg-myblue hover:text-white focus:outline-none focus:shadow-none',
  blueXS:
    'text-sm w-24 bg-myblue text-white px-3 py-2 rounded-md enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait ',
  blueS:
    'text-md w-32 bg-myblue text-white mx-4 mb-4 px-3 py-2 rounded-md enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait ',
  transpBlueS:
    'text-md w-32 text-gray-600 bg-white mx-4 mb-4 px-3 py-2 border border-myblue rounded-md enabled:hover:bg-blue-700 enabled:hover:text-white enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait ',
  transpBlueS2143:
    'text-sm w-32 leading-2 px-4 py-2 text-gray-600 bg-white border border-myblue rounded-md shadow-sm hover:bg-myblue hover:text-white focus:outline-none focus:shadow-none',
  blueL:
    'text-md bg-myblue text-white w-[calc(100%_-_3rem)] mx-6 mb-4 px-9 py-2 rounded-md enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait ',
  redL: 'text-md bg-red-700 text-white w-[calc(100%_-_3rem)] mx-6 mb-4 px-9 py-2 rounded-md  enabled:hover:bg-red-600 enabled:focus:bg-red-600 disabled:opacity-25 disabled:cursor-wait',
  blueFull:
    'text-md bg-myblue text-white w-full mb-4 px-9 py-2 rounded-md enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait ',
};
