import { DraggableCore, DraggableRepository } from "@core/application";
import { BaseModule } from "@core/container";
import { interfaces } from "inversify";
import { Draggable, DRAGGABLE_SYMBLOS } from "./draggable";
import { PageDraggable } from "./page-draggable/page-draggable";
import { PAGE_DRAGGABLE_SYMBOLS } from "./page-draggable/page-draggable.symbols";

export class ModulesDependency extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideDraggable(bind);
    this.providePageDraggable(bind);
  }

  private provideDraggable(bind: interfaces.Bind): void {
    bind<DraggableCore>(DRAGGABLE_SYMBLOS.DRAGGABLE).to(Draggable);
  }
  private providePageDraggable(bind: interfaces.Bind): void {
    bind<DraggableRepository>(PAGE_DRAGGABLE_SYMBOLS.PAGE_DRAGGABLE).to(
      PageDraggable
    );
  }
}
