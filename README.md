# Bot Field Guide

A friendly, complete reference for building Discord and Telegram bots in
JavaScript or TypeScript. Less code, more clarity. Covers every term and
limit you keep forgetting, plus a full side-by-side comparison.

## What's inside

- **Discord** — servers, channels, roles, intents, slash commands,
  interactions, embeds, webhooks, sharding, rate limits, verification,
  monetization, publishing.
- **Telegram** — chats, BotFather, Bot API vs MTProto, polling vs webhooks,
  commands, inline mode, keyboards, callback queries, Mini Apps, payments
  (Stars + cards), files, limits, monetization.
- **Compare** — audience, discovery, capabilities, limits, money, pros and
  cons, when to pick which (and when to ship both).

## Stack

React 19 + TypeScript + Vite. No router, no state library. Hash-based
section navigation, per-platform accent colors, and dark/light themes.

## Run it

```sh
pnpm install
pnpm dev      # local dev at http://localhost:5173
pnpm build    # production build into dist/
```

## How content is organised

Each platform has its own file in `src/content/`. Sections are plain
TSX objects with `id`, `title`, `heading`, `lede`, and `content`. Add a
new section by appending to the array — the sidebar picks it up
automatically.

```ts
{
  id: 'something',
  title: 'Sidebar label',
  heading: 'Page heading',
  lede: <>One line summary.</>,
  content: <>JSX content...</>,
}
```

Reusable building blocks live in `src/components/Blocks.tsx`:

- `Callout` (info, warn, note tones)
- `Example`
- `Terms` for definition lists
- `Limits` for the cheatsheet grids
- `ProsCons`
- `CompareTable`

## Notes on accuracy

Numbers and limits are accurate as of early 2026. Both platforms move
fast — when in doubt, check the official docs at
`discord.com/developers/docs` and `core.telegram.org/bots/api`.
