export enum Device {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}
export interface ILayoutCalculation {
  screenCheckPoint: number;
  // chiều cao layout
  heightStatusBar: number;
  heightPagination: number;
  heightDock: number;
  heightDockContainer: number;
  // icon
  sizeIcon: number;
  // layout
  columnNumber: number;
  rowsNumber: number;
  itemWidth: number;
  itemHeight: number;
  outerPadding: number;
  // dock
  dockWidth: number;

  device: Device;
}
