import { DraggableRepository, PageScrollToRepository } from "@core/application";
import { EventDraggable } from "@core/application/draggable/draggable.type";
import { easeInOutQuadratic } from "@core/helpers";
import { injectable } from "inversify";

@injectable()
export class PageDraggable
  implements DraggableRepository, PageScrollToRepository
{
  private rootElement: HTMLElement | null;
  private scrollLeft: number = 0;

  private currentPage: number = 0;
  constructor() {
    this.rootElement = document.querySelector("#dapp-manager");
  }

  onStartDraggable(_event: EventDraggable): void {
    if (!this.rootElement) throw new Error("id #dapp-manager not found!");
    this.scrollLeft = this.rootElement.scrollLeft;
  }

  onMoveDraggable(event: EventDraggable): void {
    const { deltaX } = event;
    if (typeof deltaX !== "number") return;
    const to = this.scrollLeft - deltaX;
    this.scrollTo(to);
  }

  onEndDraggable(event: EventDraggable): void {
    const { deltaX, deltaTime } = event;
    if (
      typeof deltaX !== "number" ||
      typeof deltaTime !== "number" ||
      !this.rootElement
    )
      return;
    const deltaThreshold = 2;
    if (Math.abs(deltaX) < deltaThreshold) return;
    // Kiểm tra giá trị deltaX và deltaTime
    const MAX_TIME = 1000; // Giới hạn thời gian tối đa kéo (1 giây)
    const adjustedDeltaTime = Math.min(deltaTime, MAX_TIME);
    const velocity = Math.abs(deltaX / adjustedDeltaTime);
    // Ngưỡng tốc độ (tùy chỉnh theo yêu cầu)
    const VELOCITY_THRESHOLD = 0.3; // Tốc độ đủ để chuyển trang
    const pageWidth = this.rootElement.clientWidth || 1; // Tránh chia cho 0
    const DISTANCE_THRESHOLD = pageWidth * 0.5; // Ngưỡng kéo 50% trang
    const maxPage = Math.ceil(this.rootElement.scrollWidth / pageWidth) - 1; // Tính page max được tính từ 0
    // const maxPage = DATA.length;
    // Xác định trang mục tiêu
    if (
      velocity > VELOCITY_THRESHOLD ||
      Math.abs(deltaX) > DISTANCE_THRESHOLD
    ) {
      // Dựa vào hướng kéo để xác định trang
      if (deltaX > 0) {
        this.currentPage = Math.max(0, this.currentPage - 1);
      } else {
        this.currentPage = Math.min(maxPage, this.currentPage + 1);
      }
    }
    this.scrollToPageRequestAnimationFrame(this.currentPage);
    this.resetPageDraggable();
  }

  scrollTo(to: number): void {
    if (!this.rootElement)
      return console.error("this.scrollElement not found!");
    this.rootElement.scrollLeft = to;
  }
  scrollToPageRequestAnimationFrame(
    targetPage: number,
    callback?: () => void,
    duration: number = 260
  ): void {
    if (!this.rootElement) return;
    const pageWidth = this.rootElement.offsetWidth;
    const targetPosition = targetPage * pageWidth;
    const startPosition = this.rootElement.scrollLeft;
    const distance = targetPosition - startPosition;

    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      if (!this.rootElement) return;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const ease = easeInOutQuadratic(progress);
      this.rootElement.scrollLeft = startPosition + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        if (callback && typeof callback === "function") {
          callback?.();
        }
      }
    };

    requestAnimationFrame(animateScroll);
  }
  scrollToPageNotRequestAnimationFrame(_page: number): void {}

  private resetPageDraggable() {
    this.scrollLeft = 0;
  }
}
