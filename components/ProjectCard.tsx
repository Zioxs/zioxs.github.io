import { ExternalLink, Download, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/data'
import styles from './ProjectCard.module.css'
import { useLanguage } from '@/lib/LanguageContext'

interface Props {
  project: Project
  compact?: boolean
}

export default function ProjectCard({ project, compact }: Props) {
  const { t } = useLanguage()

  return (
    <div className={`card ${styles.card} ${compact ? styles.compact : ''}`}>
      <div className={styles.imageWrapper} style={{ '--card-color': project.color } as React.CSSProperties}>
        {project.image ? (
          <Image src={project.image} alt={project.title} fill className={styles.thumbnail} />
        ) : (
          <div className={styles.fallbackBg}>
            <span className={styles.initial}>{project.title[0]}</span>
          </div>
        )}
        <div className={styles.gradientOverlay} />
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className="tag" style={{ '--tag-color': tagColor(t) } as React.CSSProperties}>
              {t}
            </span>
          ))}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.footer}>
          <span className={styles.meta}>
            <span className={styles.version}>{project.mcVersion}</span>
            {project.downloads && (
              <span className={styles.downloads}>
                <Download size={12} /> {project.downloads}
              </span>
            )}
          </span>
          <div className={styles.actions}>
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline ${styles.link}`}
              >
                {t.projectCard.preview} <Play size={13} />
              </a>
            )}
            {project.modrinthUrl && (
              <a
                href={project.modrinthUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline ${styles.link}`}
              >
                {t.projectCard.modrinth} <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function tagColor(loader: string) {
  const map: Record<string, string> = {
    Forge: '#e8792b',
    Fabric: '#c4c4ff',
    NeoForge: '#ff6b6b',
    Spigot: '#f59e0b',
    Paper: '#f59e0b',
  }
  return map[loader] || 'var(--accent)'
}