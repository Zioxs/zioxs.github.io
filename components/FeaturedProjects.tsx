'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import ProjectCard from './ProjectCard'
import AnimatedSection from './AnimatedSection'
import styles from './FeaturedProjects.module.css'
import { useLanguage } from '@/lib/LanguageContext'

export default function FeaturedProjects() {
  const { language, t } = useLanguage()
  const dataList = projects[language]
  const featured = dataList.filter((p) => p.featured)

  return (
    <section id="projects-preview" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <div className={styles.header}>
            <div>
              <p className="section-label">{t.featured.title}</p>
              <h2 className="section-title">{t.nav.projects}</h2>
              <p className="section-desc">
                {t.featured.subtitle}
              </p>
            </div>
            <Link href="/projects" className={`btn btn-outline ${styles.viewAll}`}>
              {t.featured.viewAll} <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1} className={styles.animatedCard}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}