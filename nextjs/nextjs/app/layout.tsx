import type { Metadata } from 'next'
import "./style.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
<Header/>

        {children}
<Footer/>
      
        </body>
    </html>
  )
}
