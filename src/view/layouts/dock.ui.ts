import { inject, injectable } from "inversify";
import { LayoutUIRepository } from "./layout.repository";
import { LAYOUT_SYMBOLS, type LayoutCalculationRepository } from "@core/layout";
import { styleElement } from "@core/helpers";

@injectable()
export class DockUI implements LayoutUIRepository {
  constructor(
    @inject(LAYOUT_SYMBOLS.LAYOUT_CALCULATION)
    private readonly layoutCalculation: LayoutCalculationRepository
  ) {}

  public render(): HTMLElement {
    const { heightDock } = this.layoutCalculation.getAllVariable();
    const element = document.createElement("div");
    element.className = "dock";
    styleElement(element.style, {
      height: heightDock + "px",
    });
    element.appendChild(this.createDockContainer());
    return element;
  }

  private createDockContainer(): HTMLElement {
    const { heightDockContainer, dockWidth } =
      this.layoutCalculation.getAllVariable();

    const element = document.createElement("div");
    element.className = "background-app-performance-poor dock_container";
    [1, 2, 3, 4].forEach((dapp) => {
      const dappElement = document.createElement("div");
      dappElement.className = "dapp";
      dappElement.textContent = `${dapp}`;
      element.appendChild(dappElement);
    });
    styleElement(element.style, {
      height: heightDockContainer + "px",
      width: dockWidth + "px",
    });
    return element;
  }
}
