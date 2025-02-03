import { BaseContainer } from "@core/container";
import { InfrastructureDependency } from "@core/infrastructure";
import { LayoutDependency } from "@core/layout/layout.dependency";
import { ViewDependency } from "./view/view.dependency";

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true,
    });
  }

  public init(): void {
    this.initializeCore();
    this.provideView();
  }

  private initializeCore(): void {
    this.provideInfrastructure();
    this.provideLayout();
  }

  private provideInfrastructure(): void {
    this.load(new InfrastructureDependency());
  }
  private provideLayout(): void {
    this.load(new LayoutDependency());
  }
  private provideView(): void {
    this.load(new ViewDependency());
  }
}
