'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { reviews } from '@/lib/data'
import AnimatedSection from './AnimatedSection'
import styles from './Testimonials.module.css'
import { useLanguage } from '@/lib/LanguageContext'

const platformColors: Record<string, string> = {
  YouTube: '#ff4444',
  Twitch: '#9146ff',
}

export default function Testimonials() {
  const rowRef = useRef<HTMLDivElement>(null)
  const { language, t } = useLanguage()
  const dataList = reviews[language]

  const scroll = (dir: 'left' | 'right') => {
    if (!rowRef.current) return
    rowRef.current.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  const averageRating = dataList.length > 0 
    ? (dataList.reduce((sum, review) => sum + review.rating, 0) / dataList.length).toFixed(1)
    : '0.0'

  return (
    <section id="reviews" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <div className={styles.header}>
            <div>
              <p className="section-label">{t.testimonials.title}</p>
              <h2 className="section-title">{t.testimonials.title}</h2>
              <p className="section-desc">
                {t.testimonials.subtitle}
              </p>
            </div>
            <div className={styles.ratingBadge}>
              <div className={styles.stars}>
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className={styles.star} />)}
              </div>
              <span className={styles.ratingNum}>{averageRating}</span>
              <span className={styles.ratingLabel}>from {dataList.length} clients</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className={styles.carouselWrap}>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>

            <div className={styles.track} ref={rowRef}>
              {dataList.map((review, i) => (
                <motion.div
                  key={review.handle}
                  className={`card ${styles.card}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className={styles.stars}>
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className={styles.star} />
                    ))}
                  </div>

                  <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>

                  <div className={styles.author}>
                    {review.avatarUrl ? (
                      <img src={review.avatarUrl} alt={review.name} className={styles.avatarImage} />
                    ) : (
                      <div
                        className={styles.avatar}
                        style={{ background: `linear-gradient(135deg, var(--accent), #a78bfa)` }}
                      >
                        {review.avatar}
                      </div>
                    )}
                    <div className={styles.authorInfo}>
                      <span className={styles.name}>{review.name}</span>
                      <span className={styles.handle}>{review.handle}</span>
                    </div>
                    <div className={styles.metaInfo}>
                      <span
                        className={styles.platform}
                        style={{ color: platformColors[review.platform] ?? 'var(--text-muted)' }}
                      >
                        {review.platform}
                      </span>
                      <span className={styles.projectsCount}>
                        {review.projectsCount} project{review.projectsCount === 1 ? '' : 's'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}