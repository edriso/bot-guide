import { Fragment, type ReactNode } from 'react'

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="eyebrow">{children}</div>
)

export const Lede = ({ children }: { children: ReactNode }) => (
  <p className="lede">{children}</p>
)

type CalloutTone = 'info' | 'warn' | 'note'

export const Callout = ({
  label,
  tone = 'info',
  children,
}: {
  label: string
  tone?: CalloutTone
  children: ReactNode
}) => (
  <div className="callout" data-tone={tone}>
    <div className="callout-label">{label}</div>
    {children}
  </div>
)

export const Example = ({ children }: { children: ReactNode }) => (
  <div className="example">{children}</div>
)

export const Terms = ({
  items,
}: {
  items: { term: string; def: ReactNode }[]
}) => (
  <dl className="terms">
    {items.map((it) => (
      <Fragment key={it.term}>
        <dt>{it.term}</dt>
        <dd>{it.def}</dd>
      </Fragment>
    ))}
  </dl>
)

export const Limits = ({
  items,
}: {
  items: { label: string; value: string; meta?: string }[]
}) => (
  <div className="limits-grid">
    {items.map((it) => (
      <div className="limit" key={it.label}>
        <div className="limit-label">{it.label}</div>
        <div className="limit-value">{it.value}</div>
        {it.meta ? <div className="limit-meta">{it.meta}</div> : null}
      </div>
    ))}
  </div>
)

export const ProsCons = ({
  pros,
  cons,
}: {
  pros: ReactNode[]
  cons: ReactNode[]
}) => (
  <div className="proscons">
    <div className="pros">
      <h4>What's great</h4>
      <ul>
        {pros.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
    <div className="cons">
      <h4>What's not</h4>
      <ul>
        {cons.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  </div>
)

export const Tags = ({ items }: { items: string[] }) => (
  <div className="tag-row">
    {items.map((t) => (
      <span className="tag" key={t}>
        {t}
      </span>
    ))}
  </div>
)

export const CompareTable = ({
  rows,
}: {
  rows: { feature: ReactNode; discord: ReactNode; telegram: ReactNode }[]
}) => (
  <div className="compare-table">
    <div className="ct-head">Feature</div>
    <div className="ct-head">Discord</div>
    <div className="ct-head">Telegram</div>
    {rows.map((r, i) => (
      <Fragment key={i}>
        <div className="ct-feature ct-row">{r.feature}</div>
        <div className="ct-discord">{r.discord}</div>
        <div className="ct-telegram">{r.telegram}</div>
      </Fragment>
    ))}
  </div>
)
