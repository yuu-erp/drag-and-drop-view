import { BaseContainer } from "@core/container";
import { InfrastructureDependency } from "@core/infrastructure";
import { LayoutDependency } from "@core/layout/layout.dependency";
import { ViewDependency } from "./view/view.dependency";
import { ModulesDependency } from "./modules/modules.dependency";

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true,
    });
  }

  public init(): void {
    this.initializeCore();
    this.initializeModules();
    this.initializeView();
  }

  private initializeCore(): void {
    this.load(new InfrastructureDependency());
    this.load(new LayoutDependency());
  }

  private initializeModules(): void {
    this.load(new ModulesDependency());
  }

  private initializeView(): void {
    this.load(new ViewDependency());
  }
}
