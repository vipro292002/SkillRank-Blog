import type { AppProps } from 'next/app';
import { AuthProvider } from '../state/auth/AuthContext';
import './globals.css';
import { NextPageWithLayout } from './page';
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import "@code-hike/mdx/dist/index.css"
import { ThemeProvider } from 'next-themes'


NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return <ThemeProvider attribute="class" disableTransitionOnChange>
    <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
  </ThemeProvider>

}

export default MyApp;
