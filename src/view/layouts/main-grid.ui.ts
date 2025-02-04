import { styleElement } from "@core/helpers";
import { LAYOUT_SYMBOLS, type LayoutCalculationRepository } from "@core/layout";
import { inject, injectable } from "inversify";
import { DATA } from "../../assets/data";
import { LayoutUIRepository } from "./layout.repository";

@injectable()
export class MainGridUI implements LayoutUIRepository {
  constructor(
    @inject(LAYOUT_SYMBOLS.LAYOUT_CALCULATION)
    private readonly layoutCalculation: LayoutCalculationRepository
  ) {}

  render(): HTMLElement {
    const element = document.createElement("div");
    element.className = "main-grid";
    element.id = "dapp-manager";
    element.appendChild(this.createContainer());
    return element;
  }

  private createContainer(): HTMLElement {
    const {} = this.layoutCalculation.getAllVariable();
    const element = document.createElement("div");
    styleElement(element.style, {
      height: "100%",
      width: DATA.length * innerWidth + "px",
      display: "flex",
    });

    DATA.forEach((_page, index) => {
      const elementPage = document.createElement("div");
      elementPage.textContent = `${index}`;
      styleElement(elementPage.style, {
        width: innerWidth + "px",
        height: "100%",
        border: "1px soldi #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `rgba(0,0,0,0.${index + 3})`,
      });
      element.appendChild(elementPage);
    });
    return element;
  }
}
