import View from './View';

class Header extends View {
  static create(el: HTMLElement): Header {
    return new Header(el);
  }

  render() {
    this.el.innerHTML = `
      <div class="buttons">
        <div class="button">
          add icon
        </div>
        <div class="button">
          add cover
        </div>
      </div>
    `;
  }
}

export default Header;
