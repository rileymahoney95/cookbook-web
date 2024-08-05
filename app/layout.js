import { Inter } from 'next/font/google';
import './globals.css';

import MainHeader from '@/components/main-header/main-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cookbook',
  description: 'View and share delicious recipes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
