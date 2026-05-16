import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Zioxs — Minecraft Mod Developer',
  description: 'Minecraft mod developer crafting mods and basic 3D models for creators and players.',
  keywords: 'minecraft mods, minecraft mod developer, forge mods, fabric mods, blockbench modeling',
  openGraph: {
    title: 'Zioxs — Minecraft Mod Developer',
    description: 'Minecraft mods and 3D modeling for content creators and players. Professional, polished, and tailored to your vision.',
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
