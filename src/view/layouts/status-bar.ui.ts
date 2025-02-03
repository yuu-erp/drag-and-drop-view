import { injectable, inject } from "inversify";
import { LayoutUIRepository } from "./layout.repository";
import { LAYOUT_SYMBOLS, type LayoutCalculationRepository } from "@core/layout";
import { styleElement } from "@core/helpers";

@injectable()
export class StatusBarUI implements LayoutUIRepository {
  constructor(
    @inject(LAYOUT_SYMBOLS.LAYOUT_CALCULATION)
    private readonly layoutCalculation: LayoutCalculationRepository
  ) {}
  render(): HTMLElement {
    const { heightStatusBar } = this.layoutCalculation.getAllVariable();
    const element = document.createElement("div");
    element.textContent = "Status bar";
    styleElement(element.style, {
      height: heightStatusBar + "px",
    });
    element.className = "status-bar";
    return element;
  }
}
