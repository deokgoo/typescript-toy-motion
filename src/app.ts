import MainController from './controller/MainController';

const createElements = (names: string[]): HTMLDivElement[] => {
  return names.map(x => {
    const newEl = document.createElement('div');
    newEl.id = x;
    return newEl;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const baseEls: HTMLDivElement[] = createElements(['header']);
  
  baseEls.forEach((x: HTMLDivElement) => {
    app?.appendChild(x);
  })

  MainController.create().init();
});
