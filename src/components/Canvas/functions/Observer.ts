export default class Observer {
  _observer: IntersectionObserver;
  _triggerOnce: boolean;
  _shouldObserve: boolean;
  _element: HTMLElement;
  _observerElement: HTMLElement
  _handleIntersection: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

  constructor({ observerElement: targetElement, element: observedElement }: any) {
    this._triggerOnce = true;

    this._handleIntersection = (entries, observer) => {
      if (!this._shouldObserve) {
        return this.animateIn();
      }
      entries.forEach(entry => {
        entry.intersectionRatio > 0 ? (this.animateIn(),
          this._triggerOnce && observer.unobserve(entry.target)) : this.animateOut()
      });
    };

    this._element = observedElement;
    let shouldObserve = "none" !== (this._element && this._element.dataset.observer);
    targetElement ? this._observerElement = targetElement : this._observerElement = this._element;
    this._shouldObserve = shouldObserve;
    this._observer = new IntersectionObserver(this._handleIntersection);
  }

  animateIn() { }
  animateOut() { }
  onResize() { }

  initObserver() {
    this._observer.unobserve(this._observerElement);
    this._observer.observe(this._observerElement);
  }

  destroy() {
    this._observer.unobserve(this._observerElement);
  }
}