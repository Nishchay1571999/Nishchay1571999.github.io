import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/shared';
import { profile } from '@/content/site';

const displayFont = localFont({
  src: '../../node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2',
  variable: '--font-display-asset',
  weight: '100 900',
  display: 'swap',
});

const bodyFont = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2',
      weight: '400',
    },
    {
      path: '../../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2',
      weight: '500',
    },
  ],
  variable: '--font-body-asset',
  display: 'swap',
});

const monoFont = localFont({
  src: '../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2',
  variable: '--font-mono-asset',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'http://localhost:3000'),
  ),
  title: {
    default: 'Nishchay Bhatt — Frontend & React Native Engineer',
    template: '%s | Nishchay Bhatt',
  },
  description:
    'Frontend and mobile engineer in Bengaluru building production React and React Native systems across native Android, real-time products, payments, telephony, performance, and operational tools.',
  applicationName: 'Nishchay Bhatt — Portfolio',
  authors: [{ name: profile.name }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: profile.name,
    title:
      'Frontend engineering across interface, native platform, and real-time state.',
    description: profile.summary,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Nishchay Bhatt — Frontend & Mobile Engineer',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export const viewport: Viewport = { themeColor: '#f3f0e8' };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="shell" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              jobTitle: profile.role,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bengaluru',
                addressCountry: 'IN',
              },
              sameAs: [profile.github, profile.linkedin],
              knowsAbout: [
                'React',
                'React Native',
                'TypeScript',
                'Native Android',
                'Real-time applications',
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
