import type { ReactNode } from 'react'

export type Platform = 'discord' | 'telegram' | 'compare'

export type Theme = 'dark' | 'light'

export type SectionMeta = {
  id: string
  title: string
}

export type Section = SectionMeta & {
  eyebrow?: string
  heading: string
  lede?: ReactNode
  content: ReactNode
}
