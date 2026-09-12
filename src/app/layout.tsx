import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AnalyticsTracker from '@/components/analytics/AnalyticsTracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'DevTools Hub - Free Developer Tools & APIs',
    template: '%s | DevTools Hub',
  },
  description: 'Curated collection of free and open source developer tools, APIs, and resources. Boost your productivity without breaking the bank.',
  metadataBase: new URL('https://devtools-hub.pages.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DevTools Hub',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
