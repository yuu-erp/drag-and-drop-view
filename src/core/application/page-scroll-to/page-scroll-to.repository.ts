export interface PageScrollToRepository {
  scrollTo(to: number): void;
  scrollToPageRequestAnimationFrame(
    page: number,
    callback?: () => void,
    duration?: number
  ): void;
  scrollToPageNotRequestAnimationFrame(page: number): void;
}
