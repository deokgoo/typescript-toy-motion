import Header from '../views/Header';

class MainController {
  headerComponent: Header | undefined;
  static create() { return new MainController(); }
  init() {
    const headerEl: HTMLElement | null = document.querySelector('#header');

    if(!headerEl) {
      throw new Error('not found element');
    }
    this.headerComponent = Header.create(headerEl);
  }
}

export default MainController;
