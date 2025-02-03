import { BaseModule } from "@core/container";
import { interfaces } from "inversify";
import { LayoutCalculation } from "./layout-calculation";
import { LAYOUT_SYMBOLS } from "./layout-calculation.symbols";

export class LayoutDependency extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideLayoutCalculation(bind);
  }

  private provideLayoutCalculation(bind: interfaces.Bind): void {
    bind<LayoutCalculation>(LAYOUT_SYMBOLS.LAYOUT_CALCULATION).to(
      LayoutCalculation
    );
  }
}
