'use client'
import { motion } from 'framer-motion'
import { Wrench, Box, Package, Check } from 'lucide-react'
import { services } from '@/lib/data'
import AnimatedSection from './AnimatedSection'
import styles from './Services.module.css'
import { useLanguage } from '@/lib/LanguageContext'

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={24} />,
  Box: <Box size={24} />,
  Package: <Package size={24} />,
}

export default function Services() {
  const { language, t } = useLanguage()
  const dataList = services[language]

  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <p className="section-label">{t.services.title}</p>
          <h2 className="section-title">{t.nav.services}</h2>
          <p className="section-desc">
            {t.services.subtitle}
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {dataList.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.1} className={styles.animatedCard}>
              <div className={`card ${styles.card}`}>
                <div className={styles.iconWrap}>
                  {iconMap[svc.icon]}
                </div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.description}</p>
                <ul className={styles.featureList}>
                  {svc.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <Check size={14} className={styles.check} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}