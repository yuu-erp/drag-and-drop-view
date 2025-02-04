import { LAYOUT_SYMBOLS, LayoutCalculation } from "@core/layout";
import { AppContainer } from "./app-container";
import { LayoutUI } from "./view/layouts/layout.ui";
import { VIEW_SYMBOLS } from "./view/view.symbols";

import "./styles/index.css";
import { DraggableCore } from "@core/application";
import { DRAGGABLE_SYMBLOS } from "./modules/draggable";

async function bootstrap() {
  try {
    console.log("bootstrap start");
    const appContainer = new AppContainer();
    appContainer.init();
    const layoutCalculation = appContainer.get<LayoutCalculation>(
      LAYOUT_SYMBOLS.LAYOUT_CALCULATION
    );
    const layoutUI = appContainer.get<LayoutUI>(VIEW_SYMBOLS.LAYOUT_UI);
    layoutCalculation.init(); // TÍNH TOÁN LAYOUT
    layoutUI.init(); // UI
    const draggable = appContainer.get<DraggableCore>(
      DRAGGABLE_SYMBLOS.DRAGGABLE
    ); // DRAGGABLE
    console.log("draggable: ", draggable);
  } catch (error) {
    console.log("bootstrap error: ", error);
  }
}
bootstrap();
