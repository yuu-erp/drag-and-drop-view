import { EventDraggable } from "./draggable.type";

export abstract class DraggableCore {
  private isTouch: boolean;
  private rootElement: HTMLElement;
  id: string;

  constructor({ id, rootElement }: { id: string; rootElement: HTMLElement }) {
    this.isTouch = "ontouchstart" in window;
    this.id = id;
    this.rootElement = rootElement;

    this.rootElement.addEventListener(
      this.isTouch ? "touchstart" : "mousedown",
      this.handleStart.bind(this)
    );
  }

  public getClientCoordinates(event: TouchEvent | MouseEvent): EventDraggable {
    if (event instanceof TouchEvent) {
      const touch = event.changedTouches[0];
      return {
        clientX: touch.clientX,
        clientY: touch.clientY,
        target: event.target as HTMLElement,
      };
    } else if (event instanceof MouseEvent) {
      return {
        clientX: event.clientX,
        clientY: event.clientY,
        target: event.target as HTMLElement,
      };
    }

    console.warn("Invalid event received in getClientCoordinates");
    return { clientX: 0, clientY: 0, target: null };
  }

  private handleStart(event: TouchEvent | MouseEvent) {
    this.onStartDraggable(event);
    document.addEventListener(
      this.isTouch ? "touchmove" : "mousemove",
      this.handleMove
    );
    document.addEventListener(
      this.isTouch ? "touchend" : "mouseup",
      this.handleEnd
    );
  }

  private handleMove = (event: TouchEvent | MouseEvent) => {
    this.onMoveDraggable(event);
  };

  private handleEnd = (event: TouchEvent | MouseEvent) => {
    this.onEndDraggable(event);
    document.removeEventListener(
      this.isTouch ? "touchmove" : "mousemove",
      this.handleMove
    );
    document.removeEventListener(
      this.isTouch ? "touchend" : "mouseup",
      this.handleEnd
    );
  };

  // Các phương thức trừu tượng cần được triển khai bởi lớp kế thừa
  abstract onStartDraggable(event: TouchEvent | MouseEvent): void;
  abstract onMoveDraggable(event: TouchEvent | MouseEvent): void;
  abstract onEndDraggable(event: TouchEvent | MouseEvent): void;
}
