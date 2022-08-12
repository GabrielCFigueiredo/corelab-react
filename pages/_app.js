import { ThemeProvider } from "styled-components";
import { CartProvider } from "../Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </div>
  );
}

export default MyApp;
