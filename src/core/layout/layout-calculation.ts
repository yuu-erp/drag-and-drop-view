import { useResponsiveValue } from "@core/helpers";
import { INFRASTRUCTURE_SYMBOLS, type StoragePort } from "@core/infrastructure";
import { inject, injectable } from "inversify";
import {
  CHECKPOINT_COLUMN,
  CHECKPOINT_COLUMN_DOCK,
  CHECKPOINT_DEVICE,
  Device,
  HEIGHT_DOCK,
  HEIGHT_DOCK_CONTAINER,
  HEIGHT_PAGINATION,
  HEIGHT_STATUS_BAR,
  SIZE_ICON,
} from "./constants";
import { LayoutCalculationRepository } from "./layout-calculation.repository";
import { ILayoutCalculation } from "./layout-calculation.type";

@injectable()
export class LayoutCalculation implements LayoutCalculationRepository {
  constructor(
    @inject(INFRASTRUCTURE_SYMBOLS.IN_MEMORY_STORAGE)
    private readonly storage: StoragePort<ILayoutCalculation>
  ) {}

  public init(): void {
    const payload = {
      heightStatusBar: this.heightStatusBar(),
      heightPagination: this.heightPagination(),
      heightDock: this.heightDock(),
      heightDockContainer: this.heightDockContainer(),
      sizeIcon: this.sizeIcon(),
      columnNumber: this.columnNumber(),
      rowsNumber: this.rowsNumber(),
      dockWidth: this.dockWidth(),
      screenCheckPoint: this.screenCheckPoint(),
      ...this.calculateGridDimensions(),
    };
    this.storage.set("layout-calculation", payload);
  }

  public getAllVariable(): ILayoutCalculation {
    const payload = this.storage.get(
      "layout-calculation"
    ) as ILayoutCalculation;
    return payload as ILayoutCalculation;
  }

  private device(): Device {
    return useResponsiveValue(CHECKPOINT_DEVICE, Device.MOBILE); // giá trị mặt định là của mobile
  }

  private heightStatusBar(): number {
    return useResponsiveValue(HEIGHT_STATUS_BAR, 60); // giá trị mặt định là của mobile
  }
  private heightPagination(): number {
    return useResponsiveValue(HEIGHT_PAGINATION, 40); // giá trị mặt định là của mobile
  }
  private heightDock(): number {
    return useResponsiveValue(HEIGHT_DOCK, 120); // giá trị mặt định là của mobile
  }
  private heightDockContainer(): number {
    return useResponsiveValue(HEIGHT_DOCK_CONTAINER, 96); // giá trị mặt định là của mobile
  }

  private columnDockNumber(): number {
    return useResponsiveValue(CHECKPOINT_COLUMN_DOCK, 4); // giá trị mặt định là của mobile
  }

  private dockWidth(): number {
    const { outerPadding } = this.calculateGridDimensions();
    return this.device() === Device.MOBILE
      ? innerWidth - outerPadding * 2
      : this.columnDockNumber() * this.sizeIcon() +
          this.columnDockNumber() * outerPadding +
          outerPadding;
  }

  private itemHeight(): number {
    const { itemWidth } = this.calculateGridDimensions();
    return itemWidth * 1.1;
  }
  private columnNumber(): number {
    return useResponsiveValue(CHECKPOINT_COLUMN, 4); // giá trị mặt định là của mobile
  }

  private rowsNumber(): number {
    return Math.floor(
      (innerHeight -
        this.heightStatusBar() -
        this.heightPagination() -
        this.heightDock()) /
        this.itemHeight()
    );
  }

  private sizeIcon(): number {
    return useResponsiveValue(SIZE_ICON, 60); // giá trị mặt định là của mobile
  }

  private screenCheckPoint(): number {
    return innerWidth * 0.6;
  }

  private calculateGridDimensions(): {
    itemWidth: number;
    outerPadding: number;
  } {
    const factor = 20;
    const outerPadding =
      this.screenCheckPoint() / (this.columnNumber() * factor);
    const gridGap = outerPadding;
    const totalPadding = 2 * outerPadding + (this.columnNumber() - 1) * gridGap;
    const itemWidth =
      (this.screenCheckPoint() - totalPadding) / this.columnNumber();
    return {
      itemWidth,
      outerPadding: totalPadding / 2,
    };
  }
}
