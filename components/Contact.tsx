'use client'
import { MessageCircle, Phone } from 'lucide-react'
import { socials } from '@/lib/data'
import AnimatedSection from './AnimatedSection'
import styles from './Contact.module.css'
import { useLanguage } from '@/lib/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <p className="section-label">{t.contact.getInTouch}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-desc">
            {t.contact.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className={styles.cards}>
            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className={`card ${styles.contactCard}`}>
              <div className={`${styles.contactIcon} ${styles.whatsapp}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              </div>
              <div className={styles.contactInfo}>
                <h3 className={styles.contactTitle}>{t.contact.cards.whatsappTitle}</h3>
                <p className={styles.contactDesc}>{t.contact.cards.whatsappDesc}</p>
              </div>
              <span className={`btn btn-outline ${styles.contactBtn}`}>{t.contact.cards.whatsappBtn}</span>
            </a>

            <div className={`card ${styles.contactCard} ${styles.disabled}`} title="Discord server is currently under maintenance">
              <div className={`${styles.contactIcon} ${styles.discord}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                </svg>
              </div>
              <div className={styles.contactInfo}>
                <h3 className={styles.contactTitle}>{t.contact.cards.discordTitle}</h3>
                <p className={styles.contactDesc}>{t.contact.cards.discordDesc}</p>
              </div>
              <span className={`btn btn-primary ${styles.contactBtn}`} style={{ pointerEvents: 'none' }}>{t.contact.cards.discordBtn}</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className={styles.cta}>
            <div className={styles.ctaGlow} />
            <p className={styles.ctaText}>
              {t.contact.ctaPrefix}
              <a href={socials.modrinth} target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
                Modrinth ↗
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}