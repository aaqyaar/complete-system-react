import "simplebar/dist/simplebar.css";
// import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store/store";
import { HelmetProvider } from "react-helmet-async";
import { CollapseDrawerProvider } from "contexts/CollapseDrawerContext";
import { SettingsProvider } from "contexts/SettingsContext";

import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingScreen } from "components";
import { AxiosInterceptor } from "utils/axios";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <SettingsProvider>
            <CollapseDrawerProvider>
              <AxiosInterceptor>
                <App />
              </AxiosInterceptor>
            </CollapseDrawerProvider>
          </SettingsProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
