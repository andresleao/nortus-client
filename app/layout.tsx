import type { Metadata } from 'next';
import './globals.css';
import SideMenu from '@/components/side-menu';
import Header from '@/components/header';
import { Montserrat } from 'next/font/google';
import { ReduxProvider } from '@/components/provider/redux-provider';

export const metadata: Metadata = {
  title: 'Nortus Dashboard',
  description: 'Gráficos inteligentes.',
};

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={montserrat.variable}>
            <body className="h-screen overflow-hidden">
                <ReduxProvider>
                    <div className="flex h-full">
                        <SideMenu />
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <Header />
                            <main className="flex-1 overflow-y-auto overflow-x-hidden flex justify-center">
                                <div
                                    className="w-full max-w-[1370px]"
                                    style={{
                                        width: 'calc(100vw - var(--side-menu-width))',
                                        marginLeft: 'calc(var(--side-menu-width))',
                                    }}
                                >
                                    {children}
                                </div>
                            </main>
                        </div>
                    </div>
                </ReduxProvider>
            </body>
        </html>
    );
}
