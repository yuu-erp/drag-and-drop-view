import { injectable } from "inversify";
import { LayoutUIRepository } from "./layout.repository";
import { styleElement } from "@core/helpers";
import defaultBackground from "../../assets/bg-animation.png";

@injectable()
export class MainGridUI implements LayoutUIRepository {
  constructor() {}

  render(): HTMLElement {
    const element = document.createElement("div");
    element.textContent = "Main Grid";
    element.className = "main-grid";
    element.appendChild(this.createBackground());
    return element;
  }

  private createBackground(): HTMLElement {
    const element = document.createElement("div");
    element.className = "main-grid_background";
    styleElement(element.style, {
      backgroundImage: `url(${defaultBackground})`,
    });
    return element;
  }
}
