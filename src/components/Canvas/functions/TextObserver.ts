import { sharedValues } from "../shared/utils/sharedValues";
import Observer from "./Observer"
import L from "./SplitTextAnimation";

export default class TextObserver extends Observer {
  _text: L;
  constructor({ element }: any) {
    //@ts-ignore
    super({ element });

    this._text = new L((this._element && this._element), {
      tagName: "span",
      types: "lines, words"
    });

    this._element && (this._element.style.opacity = "1")
  }
  animateIn() {
    super.animateIn();
    this._text.lines && this._text.lines.forEach((e, index) => {
      // @ts-ignore
      Array.from(e.children).forEach((e: HTMLElement) => {
        e.style.transition = `transform calc(1.6 * 0.9s ${0.16 * index}s ${sharedValues.ease}`;
        e.classList.add("word--active")
      })
    })
  }
  animateOut() {
    super.animateOut()
    this._text.lines && this._text.lines.forEach((e, t) => {
      // @ts-ignore
      Array.from(e.children).forEach((e: HTMLElement) => {
        e.style.transition = `transform 0.9s ${0.1 * t}s ${sharedValues.ease}`;
        e.classList.remove("word--active")
      })
    })
  }
  onResize() {
    super.onResize()
    this._text.revert()
    this._text = new L(this._element, {
      tagName: "span",
      types: "lines, words"
    })
  }
  destroy() {
    super.destroy()
    this._text.revert()
  }
}