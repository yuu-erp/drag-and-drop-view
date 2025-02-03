import { inject, injectable } from "inversify";
import { LayoutUIRepository } from "./layout.repository";
import { LAYOUT_SYMBOLS, type LayoutCalculationRepository } from "@core/layout";
import { styleElement } from "@core/helpers";

@injectable()
export class PaginationUI implements LayoutUIRepository {
  constructor(
    @inject(LAYOUT_SYMBOLS.LAYOUT_CALCULATION)
    private readonly layoutCalculation: LayoutCalculationRepository
  ) {}

  render(): HTMLElement {
    const { heightPagination, heightDock } =
      this.layoutCalculation.getAllVariable();
    const element = document.createElement("div");
    element.textContent = "Pagination";
    element.className = "pagination";
    styleElement(element.style, {
      height: heightPagination + "px",
      bottom: heightDock + "px",
    });
    return element;
  }
}
