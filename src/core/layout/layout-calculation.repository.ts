import { ILayoutCalculation } from "./layout-calculation.type";

export interface LayoutCalculationRepository {
  init(): void;
  getAllVariable(): ILayoutCalculation;
}
