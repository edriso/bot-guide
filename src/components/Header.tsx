import {
  CompareIcon,
  DiscordIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  TelegramIcon,
} from './Icons'
import type { Platform, Theme } from '../types'

type Props = {
  platform: Platform
  onPlatform: (p: Platform) => void
  theme: Theme
  onTheme: () => void
  onMenu: () => void
}

export function Header({
  platform,
  onPlatform,
  theme,
  onTheme,
  onMenu,
}: Props) {
  return (
    <header className="header">
      <button
        className="menu-btn"
        onClick={onMenu}
        aria-label="Toggle navigation"
      >
        <MenuIcon />
      </button>
      <a
        className="brand"
        href="#"
        onClick={(e) => {
          e.preventDefault()
          onPlatform('discord')
        }}
        aria-label="Bot Field Guide home"
      >
        <span className="brand-glyph" aria-hidden="true" />
        Bot Field Guide <em>&nbsp;a builder's notebook</em>
      </a>

      <nav className="nav" aria-label="Primary">
        <button
          className={`nav-link ${platform === 'discord' ? 'active' : ''}`}
          data-platform="discord"
          onClick={() => onPlatform('discord')}
        >
          <DiscordIcon />
          <span>Discord</span>
        </button>
        <button
          className={`nav-link ${platform === 'telegram' ? 'active' : ''}`}
          data-platform="telegram"
          onClick={() => onPlatform('telegram')}
        >
          <TelegramIcon />
          <span>Telegram</span>
        </button>
        <button
          className={`nav-link ${platform === 'compare' ? 'active' : ''}`}
          onClick={() => onPlatform('compare')}
        >
          <CompareIcon />
          <span>Compare</span>
        </button>
        <button
          className="theme-toggle"
          onClick={onTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  )
}
