import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

import Footer from './components/layout/footer';
import Header from './components/layout/header';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%231c1917%22/><text x=%2250%22 y=%2255%22 font-family=%22Georgia, serif%22 font-weight=%22bold%22 font-size=%2260%22 fill=%22%23fafaf9%22 text-anchor=%22middle%22 dominant-baseline=%22central%22>r.</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
