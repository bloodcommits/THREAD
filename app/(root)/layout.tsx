import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import Leftsidebar from '@/components/shared/Leftsidebar';
import Rightsidebar from '@/components/shared/Rightsidebar';
import Bottombar from '@/components/shared/Bottombar';
import Topbar from '@/components/shared/Topbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thread Clone',
  description: 'Clone by trust',
  icons:"/favicon"
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* //Top bar */}
        <Topbar/>

        <main className='flex flex-row'>
          <Leftsidebar/>
          <section className='main-container'>
            <div className='w-full max-w-4xl'>
              {children}
            </div>

          </section>
          <Rightsidebar/>
        </main>
        <Bottombar/>
        
        </body>
    </html>
  </ClerkProvider>
  )
}
