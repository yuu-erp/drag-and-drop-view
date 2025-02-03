import { injectable, inject } from "inversify";
import { type LayoutUIRepository } from "./layout.repository";
import { VIEW_SYMBOLS } from "../view.symbols";

@injectable()
export class LayoutUI {
  private rootElement: HTMLElement;
  constructor(
    @inject(VIEW_SYMBOLS.STATUS_BAR_UI)
    private statusBarUI: LayoutUIRepository,
    @inject(VIEW_SYMBOLS.MAIN_GRID_UI)
    private mainGridUI: LayoutUIRepository,
    @inject(VIEW_SYMBOLS.PAGINATION_UI)
    private paginationUI: LayoutUIRepository,
    @inject(VIEW_SYMBOLS.DOCK_UI)
    private dockUI: LayoutUIRepository
  ) {
    this.rootElement = document.getElementById("app") as HTMLElement;
  }
  init(): void {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.statusBarUI.render());
    fragment.appendChild(this.mainGridUI.render());
    fragment.appendChild(this.paginationUI.render());
    fragment.appendChild(this.dockUI.render());
    this.rootElement.appendChild(fragment);
  }
}
