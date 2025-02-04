import { EventDraggable } from "./draggable.type";

export interface DraggableRepository {
  onStartDraggable(event: EventDraggable): void;
  onMoveDraggable(event: EventDraggable): void;
  onEndDraggable(event: EventDraggable): void;
}
