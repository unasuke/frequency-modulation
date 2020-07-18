import "../styles/global.css";
import { AppProps } from "next/app";

export default function UnasukeFmApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
