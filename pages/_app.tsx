import '@assets/main.css';
import 'nprogress/nprogress.css';

import React from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Head } from '@components/core';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default App;
