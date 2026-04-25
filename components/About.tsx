'use client'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import AnimatedSection from './AnimatedSection'
import styles from './About.module.css'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <AnimatedSection>
            <div className={styles.textSide}>
              <p className="section-label">{t.about.whoAmI}</p>
              <h2 className="section-title">{t.about.title}</h2>
              <p className={styles.bio}>
                {t.about.whoAmIDesc}
              </p>
              <p className={styles.bio}>
                {t.about.whatIDoDesc}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className={styles.skillsSide}>
              <h3 className={styles.skillsTitle}>{t.about.skills}</h3>
              <div className={styles.skills}>
                {skills.map((skill, i) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.barFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}