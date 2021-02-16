import React from 'react';
import NextHead from 'next/head';

interface Props {
  children?: React.ReactNode;
}

const Head: React.FC<Props> = ({ children, ...props }) => {
  return (
    <NextHead {...props}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      {children}
    </NextHead>
  );
};

export default Head;
