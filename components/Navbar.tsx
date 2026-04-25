'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import styles from './Navbar.module.css'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const links = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.about, href: '/#about' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Zioxs logo"
              width={36}
              height={36}
              className={styles.logoImg}
              priority
            />
            <span className="logo-text">Zioxs</span>
          </Link>

          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={toggleLanguage} className={styles.langBtn} aria-label="Toggle Language" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
              <Globe size={18} />
              {language.toUpperCase()}
            </button>
            <a href="/#contact" className={`btn btn-primary ${styles.cta}`}>
              {t.nav.commission}
            </a>
          </div>

          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={styles.mobileMenu}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button onClick={toggleLanguage} className={styles.mobileLink} style={{ background: 'none', border: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', textAlign: 'left' }}>
              <Globe size={18} />
              {language === 'id' ? 'English' : 'Indonesian'}
            </button>
            <a href="/#contact" className={`btn btn-primary`} onClick={() => setOpen(false)}>
              {t.nav.commissionMe}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
