import { useEffect, useRef } from 'react'
import {
  CloseIcon,
  CompareIcon,
  DiscordIcon,
  TelegramIcon,
} from './Icons'
import type { Platform, SectionMeta } from '../types'

type Props = {
  platform: Platform
  sections: SectionMeta[]
  activeId: string
  onSelect: (id: string) => void
  open: boolean
  onClose: () => void
}

export function Sidebar({
  platform,
  sections,
  activeId,
  onSelect,
  open,
  onClose,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  // scroll active item into view when section changes
  useEffect(() => {
    const el = ref.current?.querySelector<HTMLElement>(
      `[data-section-id="${activeId}"]`
    )
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeId])

  const Icon =
    platform === 'discord'
      ? DiscordIcon
      : platform === 'telegram'
        ? TelegramIcon
        : CompareIcon

  const platformLabel =
    platform === 'discord'
      ? 'Discord'
      : platform === 'telegram'
        ? 'Telegram'
        : 'Discord vs Telegram'

  return (
    <>
      <aside
        className={`sidebar ${open ? 'open' : ''}`}
        ref={ref}
        aria-label="Section navigation"
      >
        <div className="sidebar-platform">
          <Icon />
          <span>{platformLabel}</span>
          <button
            className="theme-toggle"
            onClick={onClose}
            aria-label="Close navigation"
            style={{ marginLeft: 'auto' }}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="sidebar-eyebrow">Sections</div>
        <ul className="toc">
          {sections.map((s, i) => (
            <li className="toc-item" key={s.id}>
              <button
                className={`toc-link ${activeId === s.id ? 'active' : ''}`}
                data-section-id={s.id}
                onClick={() => onSelect(s.id)}
              >
                <span>{s.title}</span>
                <span className="toc-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div
        className={`sidebar-backdrop ${open ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
    </>
  )
}
