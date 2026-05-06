import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Eyebrow, Lede } from './components/Blocks'
import { discordSections } from './content/discord'
import { telegramSections } from './content/telegram'
import { compareSections } from './content/compare'
import type { Platform, Section, Theme } from './types'

const STORAGE = {
  theme: 'bfg-theme',
  platform: 'bfg-platform',
  section: 'bfg-section',
}

function readHash() {
  const h = window.location.hash.replace(/^#\/?/, '')
  if (!h) return null
  const [platform, section] = h.split('/')
  return { platform, section: section || null }
}

function writeHash(platform: Platform, section: string) {
  const next = `#/${platform}/${section}`
  if (window.location.hash !== next) {
    history.replaceState(null, '', next)
  }
}

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE.theme) as Theme | null
  if (saved === 'dark' || saved === 'light') return saved
  return 'dark'
}

function getInitialPlatform(): Platform {
  const fromHash = readHash()?.platform as Platform | undefined
  if (fromHash === 'discord' || fromHash === 'telegram' || fromHash === 'compare') {
    return fromHash
  }
  const saved = localStorage.getItem(STORAGE.platform)
  if (saved === 'discord' || saved === 'telegram' || saved === 'compare') return saved
  return 'discord'
}

function platformSections(p: Platform): Section[] {
  if (p === 'discord') return discordSections
  if (p === 'telegram') return telegramSections
  return compareSections
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [platform, setPlatform] = useState<Platform>(getInitialPlatform)
  const sections = useMemo(() => platformSections(platform), [platform])

  const initialSection =
    readHash()?.section && sections.some((s) => s.id === readHash()!.section)
      ? readHash()!.section!
      : sections[0].id
  const [activeId, setActiveId] = useState<string>(initialSection)
  const [menuOpen, setMenuOpen] = useState(false)

  // sync theme + platform attributes on root
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE.theme, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.dataset.platform = platform
    localStorage.setItem(STORAGE.platform, platform)
  }, [platform])

  useEffect(() => {
    writeHash(platform, activeId)
    // scroll to top on section change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [platform, activeId])

  // listen to back/forward
  useEffect(() => {
    const onPop = () => {
      const h = readHash()
      if (!h) return
      if (
        h.platform === 'discord' ||
        h.platform === 'telegram' ||
        h.platform === 'compare'
      ) {
        setPlatform(h.platform)
        if (h.section) setActiveId(h.section)
      }
    }
    window.addEventListener('hashchange', onPop)
    return () => window.removeEventListener('hashchange', onPop)
  }, [])

  // when platform changes, jump to its first section if active doesn't exist
  useEffect(() => {
    if (!sections.some((s) => s.id === activeId)) {
      setActiveId(sections[0].id)
    }
  }, [sections, activeId])

  const active = sections.find((s) => s.id === activeId) ?? sections[0]
  const idx = sections.findIndex((s) => s.id === active.id)
  const prev = idx > 0 ? sections[idx - 1] : null
  const next = idx < sections.length - 1 ? sections[idx + 1] : null

  const platformLabel =
    platform === 'discord'
      ? 'Discord'
      : platform === 'telegram'
        ? 'Telegram'
        : 'Compare'

  const handlePlatform = (p: Platform) => {
    setPlatform(p)
    const ss = platformSections(p)
    setActiveId(ss[0].id)
    setMenuOpen(false)
  }

  const handleSection = (id: string) => {
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <Header
        platform={platform}
        onPlatform={handlePlatform}
        theme={theme}
        onTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onMenu={() => setMenuOpen((o) => !o)}
      />
      <Sidebar
        platform={platform}
        sections={sections.map(({ id, title }) => ({ id, title }))}
        activeId={active.id}
        onSelect={handleSection}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <main className="main">
        <article className="content" key={`${platform}-${active.id}`}>
          <Eyebrow>
            {platformLabel} <span aria-hidden="true">/</span>{' '}
            {String(idx + 1).padStart(2, '0')} {active.title}
          </Eyebrow>
          <h1>{active.heading}</h1>
          {active.lede ? <Lede>{active.lede}</Lede> : null}
          {active.content}

          <div className="next-prev">
            {prev ? (
              <button
                className="np-btn"
                data-dir="prev"
                onClick={() => handleSection(prev.id)}
              >
                <span className="np-dir">← Previous</span>
                <span className="np-title">{prev.title}</span>
              </button>
            ) : (
              <span />
            )}
            {next ? (
              <button
                className="np-btn"
                data-dir="next"
                onClick={() => handleSection(next.id)}
              >
                <span className="np-dir">Next →</span>
                <span className="np-title">{next.title}</span>
              </button>
            ) : (
              <span />
            )}
          </div>
        </article>
      </main>
    </div>
  )
}
