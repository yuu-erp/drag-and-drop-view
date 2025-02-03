import { LAYOUT_SYMBOLS, LayoutCalculation } from "@core/layout";
import { AppContainer } from "./app-container";
import { LayoutUI } from "./view/layouts/layout.ui";
import { VIEW_SYMBOLS } from "./view/view.symbols";

import "./styles/index.css";

async function bootstrap() {
  try {
    console.log("bootstrap start");
    const appContainer = new AppContainer();
    appContainer.init();
    const layoutCalculation = appContainer.get<LayoutCalculation>(
      LAYOUT_SYMBOLS.LAYOUT_CALCULATION
    );
    const layoutUI = appContainer.get<LayoutUI>(VIEW_SYMBOLS.LAYOUT_UI);
    layoutCalculation.init();
    layoutUI.init();
    console.log("layoutCalculation", layoutCalculation.getAllVariable());
  } catch (error) {
    console.log("bootstrap error: ", error);
  }
}
bootstrap();
