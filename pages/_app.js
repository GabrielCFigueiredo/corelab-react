import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "../Context";
import { GlobalStyles } from "../GlobalStyles/globalStyles";
import { Provider } from "react-redux";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SkeletonTheme>
  );
}

export default MyApp;
