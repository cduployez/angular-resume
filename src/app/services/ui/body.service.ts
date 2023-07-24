import { Injectable, Renderer2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BodyService {
  get body(): HTMLElement {
    return window.document.body;
  }

  addClass(renderer: Renderer2, className: string): void {
    if (className) {
      renderer.addClass(this.body, className);
    }
  }

  removeClass(renderer: Renderer2, className: string): void {
    if (className) {
      renderer.removeClass(this.body, className);
    }
  }
}
