import type { Metadata } from 'next';
import './globals.css';
import SideBar from '@/components/SideBar';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={'h-full'}>
            <body className={'h-full'}>
                <div className={'flex h-full'}>
                    <SideBar />
                    <section className={'flex-1 bg-white m-6 rounded p-10'}>{children}</section>
                </div>
            </body>
        </html>
    );
}
