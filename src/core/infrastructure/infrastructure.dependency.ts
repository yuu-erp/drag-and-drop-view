import { BaseModule } from "@core/container";
import { interfaces } from "inversify";
import { InMemoryStorage, StoragePort } from "./storage";
import { INFRASTRUCTURE_SYMBOLS } from "./infrastructure.symbols";

export class InfrastructureDependency extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideInMemoryStorage(bind);
  }

  private provideInMemoryStorage(bind: interfaces.Bind) {
    bind<StoragePort>(INFRASTRUCTURE_SYMBOLS.IN_MEMORY_STORAGE).to(
      InMemoryStorage
    );
  }
}
