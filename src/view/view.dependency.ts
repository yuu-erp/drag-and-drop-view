import { BaseModule } from "@core/container";
import { interfaces } from "inversify";
import { LayoutUI } from "./layouts/layout.ui";
import { VIEW_SYMBOLS } from "./view.symbols";
import { LayoutUIRepository } from "./layouts/layout.repository";
import { StatusBarUI } from "./layouts/status-bar.ui";
import { MainGridUI } from "./layouts/main-grid.ui";
import { PaginationUI } from "./layouts/pagination.ui";
import { DockUI } from "./layouts/dock.ui";

export class ViewDependency extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideLayoutUI(bind);
    this.provideStatusBarUI(bind);
    this.provideMainGridUI(bind);
    this.providePaginationUI(bind);
    this.provideDockUI(bind);
  }

  private provideLayoutUI(bind: interfaces.Bind): void {
    bind<LayoutUI>(VIEW_SYMBOLS.LAYOUT_UI).to(LayoutUI);
  }

  private provideStatusBarUI(bind: interfaces.Bind): void {
    bind<LayoutUIRepository>(VIEW_SYMBOLS.STATUS_BAR_UI).to(StatusBarUI);
  }
  private provideMainGridUI(bind: interfaces.Bind): void {
    bind<LayoutUIRepository>(VIEW_SYMBOLS.MAIN_GRID_UI).to(MainGridUI);
  }
  private providePaginationUI(bind: interfaces.Bind): void {
    bind<LayoutUIRepository>(VIEW_SYMBOLS.PAGINATION_UI).to(PaginationUI);
  }
  private provideDockUI(bind: interfaces.Bind): void {
    bind<LayoutUIRepository>(VIEW_SYMBOLS.DOCK_UI).to(DockUI);
  }
}
