import "./example.style.scss";

export class Example {
  private html: string;

  public constructor() {
    this.html = require('./example.template.html');
  }

  public bootstrap(root: HTMLElement): void {
    root.innerHTML = this.html;
  }
}