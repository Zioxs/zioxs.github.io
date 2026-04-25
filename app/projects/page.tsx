'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'
import type { ModLoader } from '@/lib/data'
import styles from './projects.module.css'
import { useLanguage } from '@/lib/LanguageContext'

const ALL_FILTERS: (ModLoader | 'All')[] = ['All', 'Forge', 'Fabric']

export default function ProjectsPage() {
  const [active, setActive] = useState<ModLoader | 'All'>('All')
  const { language, t } = useLanguage()

  const dataList = projects[language]

  const filtered = active === 'All'
    ? dataList
    : dataList.filter((p) => p.tags.includes(active))

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={styles.header}
          >
            <p className="section-label">Portfolio</p>
            <h1 className={`section-title ${styles.title}`}>{t.projectsPage.title}</h1>
            <p className="section-desc">
              {t.projectsPage.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={styles.filters}
          >
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`${styles.filterBtn} ${active === f ? styles.activeFilter : ''}`}
              >
                {f === 'All' ? t.projectsPage.allLoaders : f}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className={styles.grid}
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.empty}
            >
              No projects found for this filter.
            </motion.p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}