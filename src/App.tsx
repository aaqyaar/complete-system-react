import ThemeConfig from "theme";
import {
  NotistackProvider,
  RtlLayout,
  ScrollToTop,
  Settings,
  ThemePrimaryColor,
} from "components";
import GlobalStyles from "theme/globalStyles";
import { BaseOptionChartStyle } from "components/charts/BaseOptionChart";
import { ProgressBarStyle } from "components/LoadingScreen";
import AppRoutes from "./routes";

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <RtlLayout>
          <NotistackProvider>
            <GlobalStyles />
            <ProgressBarStyle />
            <BaseOptionChartStyle />
            <ScrollToTop />
            <Settings />
            <AppRoutes />
          </NotistackProvider>
        </RtlLayout>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
