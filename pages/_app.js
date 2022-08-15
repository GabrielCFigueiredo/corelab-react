import { ThemeProvider } from "styled-components";
import { CartProvider } from "../Context";
import { GlobalStyles } from "../GlobalStyles/globalStyles";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </div>
  );
}

export default MyApp;
