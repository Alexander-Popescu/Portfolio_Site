import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";


function MyApp({ Component, pageProps }: AppProps) {

  const darkTheme = createTheme({type: "dark"});

  return (
    <>
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
      <Analytics />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
