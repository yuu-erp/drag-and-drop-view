export interface EventDraggable {
  clientX: number;
  clientY: number;
  deltaX?: number;
  deltaY?: number;
  deltaTime?: number;
  target: HTMLElement | null;
}
