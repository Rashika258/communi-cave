import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'

const font = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord',
  description: 'Created by Rashika',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={
        cn(font.className, 'bg-white dark:bg-[#313338]')
        }>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} storageKey='discord-theme'>
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
