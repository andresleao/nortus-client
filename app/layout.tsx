import type { Metadata } from 'next';
import './globals.css';
import SideMenu from '@/components/side-menu';
import Header from '@/components/header';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Nortus Dashboard',
  description: 'Gráficos inteligentes.',
};

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="h-screen overflow-hidden">
        <div className="flex h-full">
          <SideMenu />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
