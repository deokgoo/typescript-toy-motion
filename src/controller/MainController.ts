import Thumbnail from '../components/Thumnail';
import Contents from '../components/Contents';


class MainController {
  thumbnailComponent: Thumbnail | undefined;
  contentsComponent: Contents | undefined;
  static create() { return new MainController(); }
  init() {
    const thumbnailEl: HTMLElement | null = document.querySelector('#thumbnail');
    const contentsEl: HTMLElement | null = document.querySelector('#contents');

    if(!thumbnailEl || !contentsEl) {
      throw new Error('not found element');
    }

    Thumbnail.create(thumbnailEl);
    Contents.create(contentsEl);
  }
}

export default MainController;
