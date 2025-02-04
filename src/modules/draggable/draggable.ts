import { DraggableCore, type DraggableRepository } from "@core/application";
import { inject, injectable } from "inversify";
import { PAGE_DRAGGABLE_SYMBOLS } from "../page-draggable/page-draggable.symbols";

@injectable()
export class Draggable extends DraggableCore {
  private startX: number = 0;
  private startY: number = 0;
  private timeStart: number = 0;

  private isMoving: boolean = false;

  private isRequestingFrame: boolean = false;

  constructor(
    @inject(PAGE_DRAGGABLE_SYMBOLS.PAGE_DRAGGABLE)
    private readonly pageDraggable: DraggableRepository // private readonly dappDraggable: DraggableRepository
  ) {
    super({
      id: "app",
      rootElement: document.getElementById("app") as HTMLElement,
    });
  }

  onStartDraggable(event: TouchEvent | MouseEvent): void {
    if (this.isMoving) return;
    const eventDraggable = this.getClientCoordinates(event);
    this.startX = eventDraggable.clientX;
    this.startY = eventDraggable.clientY;
    this.timeStart = performance.now();
    this.isMoving = true;
    this.pageDraggable.onStartDraggable(eventDraggable);
  }
  onMoveDraggable(event: TouchEvent | MouseEvent): void {
    if (!this.isMoving) return;
    const eventDraggable = this.getClientCoordinates(event);
    const { deltaX } = this.calculateDelta(
      eventDraggable.clientX,
      eventDraggable.clientY
    );
    if (!this.isRequestingFrame) {
      this.isRequestingFrame = true;
      requestAnimationFrame(() => {
        this.pageDraggable.onMoveDraggable({ ...eventDraggable, deltaX });
        this.isRequestingFrame = false;
      });
    }
  }
  onEndDraggable(event: TouchEvent | MouseEvent): void {
    if (!this.isMoving) return;
    const eventDraggable = this.getClientCoordinates(event);
    const { deltaX, deltaTime } = this.calculateDelta(
      eventDraggable.clientX,
      eventDraggable.clientY,
      true
    );
    this.pageDraggable.onEndDraggable({ ...eventDraggable, deltaX, deltaTime });
    this.reset();
  }

  private calculateDelta(
    clientX: number,
    clientY: number,
    includeTime: boolean = false
  ): { deltaX: number; deltaY: number; deltaTime?: number } {
    const deltaX = clientX - this.startX;
    const deltaY = clientY - this.startY;
    const deltaTime = includeTime
      ? performance.now() - this.timeStart
      : undefined;
    return { deltaX, deltaY, deltaTime };
  }

  private reset() {
    this.startX = 0;
    this.startY = 0;
    this.timeStart = 0;
    this.isMoving = false;
  }
}
