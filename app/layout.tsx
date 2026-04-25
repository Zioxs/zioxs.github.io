import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Zioxs — Custom Minecraft Mod Developer',
  description: 'Professional Minecraft mod developer crafting custom mods for content creators. Forge, Fabric & Spigot expertise.',
  keywords: 'minecraft mods, custom minecraft mods, minecraft mod developer, forge mods, fabric mods, content creator mods',
  openGraph: {
    title: 'Zioxs — Custom Minecraft Mod Developer',
    description: 'Custom Minecraft mods for content creators. Professional, polished, and tailored to your vision.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="bg-grid" aria-hidden="true" />
          <div className="bg-glow-top" aria-hidden="true" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
