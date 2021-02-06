
abstract class View {
  constructor(public el: HTMLElement) {
    this.render();
  };
  abstract render(): void;
  on(evt: keyof HTMLElementEventMap, callback: EventListenerOrEventListenerObject) {
    this.el.addEventListener(evt, callback);
  }
  emit(evt: string, initData: CustomEventInit) {
    const customEvent: CustomEvent = new CustomEvent(evt, initData);
    this.el.dispatchEvent(customEvent);
  }
  show() {
    this.el.style.display = '';
  }
  hide() {
    this.el.style.display = 'none';
  }
}

export default View;