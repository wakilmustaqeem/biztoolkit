import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BizToolkit — Free Business Tools',
  description: 'Free, simple tools and calculators for freelancers and small businesses.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
