'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import styles from './Hero.module.css'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [shown, setShown] = useState(true)
  const { t } = useLanguage()

  const words = t.hero.words

  useEffect(() => {
    const interval = setInterval(() => {
      setShown(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length)
        setShown(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.badge}
        >
          <span className="tag green">{t.hero.available}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heading}
        >
          {t.hero.title}
          <br />
          {t.hero.builtFor}
          <span className={styles.wordWrap}>
            <span
              className={`text-gradient ${styles.word} ${shown ? styles.wordIn : styles.wordOut}`}
            >
              {words[wordIndex]}
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={styles.sub}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className={styles.actions}
        >
          <Link href="/projects" className="btn btn-primary">
            {t.hero.viewProjects} <ArrowRight size={16} />
          </Link>
          <a href="/#contact" className="btn btn-outline">
            {t.nav.commissionMe} <ExternalLink size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={styles.stats}
        >
          {[
            { value: '30+', label: t.hero.stats.projects },
            { value: '1', label: t.hero.stats.published },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={styles.visual}
        aria-hidden="true"
      >
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.top}`} />
          <div className={`${styles.face} ${styles.left}`} />
          <div className={`${styles.face} ${styles.right}`} />
        </div>
        <div className={styles.cubeGlow} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </motion.div>
    </section>
  )
}