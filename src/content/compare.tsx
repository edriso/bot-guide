import {
  Callout,
  CompareTable,
  Example,
  ProsCons,
} from '../components/Blocks'
import type { Section } from '../types'

export const compareSections: Section[] = [
  {
    id: 'verdict',
    title: 'Quick verdict',
    heading: 'A short, honest answer',
    lede: (
      <>
        Both platforms are great. They are not interchangeable. Pick the one
        whose users and culture match what you want to build.
      </>
    ),
    content: (
      <>
        <p>
          If you are building a bot for <strong>communities, gaming, or
          long-form chat</strong>, Discord is almost always the right choice.
          The UI is rich, the tooling is mature, and people expect to live
          inside servers.
        </p>
        <p>
          If you are building <strong>utility, alerts, e-commerce, or
          everyday-app experiences</strong>, Telegram is usually better. Bots
          feel native, Mini Apps unlock real product surface, and the audience
          spans the whole world.
        </p>

        <Callout label="The lazy answer">
          <p>
            Many serious bot makers ship on <strong>both</strong>. The two
            audiences barely overlap, the code shape is similar, and you
            double your reach for moderate extra effort.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'audience',
    title: 'Audience & culture',
    heading: 'Who is actually there',
    content: (
      <>
        <h3>Discord users</h3>
        <p>
          Around <strong>200 million</strong> monthly active users. Strong on
          gaming, dev communities, crypto, anime, education, and creator
          fan-bases. Skews younger. People hang out for hours; servers feel
          like clubhouses.
        </p>

        <h3>Telegram users</h3>
        <p>
          Over <strong>1 billion</strong> monthly active users. Massive in
          Eastern Europe, Latin America, the Middle East, parts of Asia, and
          tech crowds everywhere. Telegram is often the default messenger,
          alongside or instead of WhatsApp.
        </p>

        <CompareTable
          rows={[
            {
              feature: 'Audience size',
              discord: 'About 200M monthly users',
              telegram: 'Over 1B monthly users',
            },
            {
              feature: 'Where strong',
              discord: 'Gaming, dev, anime, creators',
              telegram: 'EE, LATAM, MENA, Asia, tech',
            },
            {
              feature: 'Time per user',
              discord: 'Hours per session, hangout style',
              telegram: 'Many short visits, messenger style',
            },
            {
              feature: 'Default app feel',
              discord: 'Clubhouse / forum',
              telegram: 'Messenger / app launcher',
            },
          ]}
        />
      </>
    ),
  },

  {
    id: 'discoverability',
    title: 'Discovery',
    heading: 'How users find your bot',
    content: (
      <>
        <CompareTable
          rows={[
            {
              feature: 'Official store',
              discord: 'App Directory inside Discord (verified bots)',
              telegram: 'In-app search; Mini Apps catalog',
            },
            {
              feature: 'Community lists',
              discord: 'top.gg, discords.com, discordbotlist.com',
              telegram: 'BotsArchive, Storebot, Telegram bot lists',
            },
            {
              feature: 'Viral loops',
              discord: 'Server invites, "verified" badge, embeds spread',
              telegram: 'Inline mode "via @bot" footer in any chat',
            },
            {
              feature: 'Server-level install',
              discord: 'Yes. Owners install per server',
              telegram: 'Yes. Admins add bots to groups/channels',
            },
            {
              feature: 'User-level install',
              discord: 'Yes (newer feature). Bot follows the user',
              telegram: 'Yes. Every user can DM any bot directly',
            },
          ]}
        />

        <Callout label="The biggest growth gap" tone="note">
          <p>
            Telegram's <strong>inline mode</strong> is a quiet super-power. Each
            time someone uses your bot inline (<code>@yourbot search</code>),
            the resulting message includes a small "via @yourbot" footer. Free
            advertising in any chat, on any phone. Discord has nothing like it.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'capabilities',
    title: 'What bots can do',
    heading: 'Capabilities, side by side',
    content: (
      <>
        <CompareTable
          rows={[
            {
              feature: 'Slash commands',
              discord: 'First-class. Auto-complete, options, permissions.',
              telegram: 'Yes. Simpler list registered with BotFather.',
            },
            {
              feature: 'Buttons / menus',
              discord: 'Buttons, selects, modals, components V2 (rich)',
              telegram: 'Inline keyboards (rich), reply keyboards (simple)',
            },
            {
              feature: 'Forms / pop-ups',
              discord: 'Native modals (up to 5 inputs)',
              telegram: 'Force reply or open a Mini App for richer forms',
            },
            {
              feature: 'Rich messages',
              discord: 'Embeds with title, fields, image, color stripe',
              telegram: 'Markdown / HTML formatting + media; no embeds',
            },
            {
              feature: 'Voice / audio',
              discord: 'Yes. Bots can join voice channels and stream audio',
              telegram: 'Voice notes and group calls; bot voice limited',
            },
            {
              feature: 'In-chat mini apps',
              discord: 'Activities (newer, tied to voice channels)',
              telegram: 'Mini Apps. Full HTML pages anywhere',
            },
            {
              feature: 'Read all messages',
              discord: 'Needs Message Content intent',
              telegram: 'Needs privacy-mode disabled in BotFather',
            },
            {
              feature: 'Per-channel UI',
              discord: 'Channels are first-class objects',
              telegram: 'Topics in supergroups are similar',
            },
            {
              feature: 'Inline (any chat)',
              discord: 'No equivalent',
              telegram: '@yourbot query. Works in any chat',
            },
          ]}
        />

        <Example>
          <p>
            A poll bot on Discord lets the user click buttons and edit the
            same message to update tallies. A poll bot on Telegram does the
            same with inline keyboards and callback queries. The shape of the
            code is almost identical.
          </p>
        </Example>
      </>
    ),
  },

  {
    id: 'limits',
    title: 'Limits compared',
    heading: 'The numbers, in one table',
    content: (
      <>
        <CompareTable
          rows={[
            {
              feature: 'Message text',
              discord: '2,000 characters',
              telegram: '4,096 characters',
            },
            {
              feature: 'Caption',
              discord: '4,096 in description',
              telegram: '1,024 characters',
            },
            {
              feature: 'Buttons per message',
              discord: '5 rows × 5 = 25',
              telegram: '~8 per row, many rows',
            },
            {
              feature: 'Select options',
              discord: '25',
              telegram: 'No native select; use inline keyboards',
            },
            {
              feature: 'File upload (bot)',
              discord: '10 MB free, more with Nitro/boosts',
              telegram: '50 MB (Bot API); 2 GB+ via local server / MTProto',
            },
            {
              feature: 'Rate limit',
              discord: '~50 req/s globally',
              telegram: '30/s across chats, 1/s per chat, 20/min per group',
            },
            {
              feature: 'Sharding required',
              discord: 'Yes, around 2,500 servers',
              telegram: 'Not required; webhook-based scales naturally',
            },
            {
              feature: 'Verification',
              discord: 'Required at 100 servers',
              telegram: 'No verification; identity checks for ads / payments',
            },
          ]}
        />
      </>
    ),
  },

  {
    id: 'money',
    title: 'Making money',
    heading: 'How easy is it to actually earn?',
    lede: (
      <>
        Both platforms are now real businesses. The systems are different in
        what they sell well and how they take their cut.
      </>
    ),
    content: (
      <>
        <CompareTable
          rows={[
            {
              feature: 'Native payments',
              discord: 'App Subscriptions (user + server) and one-time SKUs',
              telegram: 'Stars (digital) + card payments via Stripe etc.',
            },
            {
              feature: 'Platform fee',
              discord: 'App store-style cut on subscriptions',
              telegram: 'Stars carry a fee; cards take 0% from Telegram',
            },
            {
              feature: 'Required verification',
              discord: 'Bot must be verified before unlocking monetization',
              telegram: 'Optional; Stars works for any bot',
            },
            {
              feature: 'Best for digital goods',
              discord: 'Strong. Premium roles, in-bot upgrades, perks',
              telegram: 'Strong. Stars feels frictionless to users',
            },
            {
              feature: 'Best for physical goods',
              discord: 'Possible via external links / Stripe',
              telegram: 'Built for it. Card flow inside the chat',
            },
            {
              feature: 'Ads',
              discord: 'No native ads',
              telegram: 'Telegram Ads on channels; revenue share',
            },
            {
              feature: 'Tipping / donations',
              discord: 'External (Patreon, Ko-fi)',
              telegram: 'Stars work like tips for content creators',
            },
          ]}
        />

        <h3>What sells on each platform</h3>
        <ProsCons
          pros={[
            <span key="d1">
              <span className="brand-discord">Discord</span> wins for{' '}
              <strong>community premium</strong>: server-wide unlocks, role
              perks, recurring subscriptions tied to a clubhouse.
            </span>,
            <span key="d2">
              Strong if you already have a community willing to support you.
            </span>,
            <span key="d3">
              Cleanest in-Discord upgrade flow inside premium app interactions.
            </span>,
          ]}
          cons={[
            <span key="t1">
              <span className="brand-telegram">Telegram</span> wins for{' '}
              <strong>commerce and one-shot purchases</strong>: stickers,
              in-game items, courses, e-shops via Mini Apps.
            </span>,
            <span key="t2">
              No verification needed before earning, so first sale comes
              faster.
            </span>,
            <span key="t3">
              Card payments mean you can sell real-world goods with no extra
              site.
            </span>,
          ]}
        />

        <Callout label="Quick rule of thumb" tone="note">
          <p>
            Selling something a community uses together (premium server
            features, mod tools, event boosts)? Discord. Selling something a
            single user uses alone (a tool, a course, a pack of stickers, a
            food order)? Telegram.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'pros-cons',
    title: 'Pros & cons',
    heading: 'The honest summary',
    content: (
      <>
        <h3>Discord</h3>
        <ProsCons
          pros={[
            'Rich UI: buttons, selects, modals, components V2. Feels like an app inside chat.',
            'Voice channels and stage events are unique to Discord.',
            'Strong, tight communities with high retention and word of mouth.',
            'App Directory and verified badge build user trust.',
            'Excellent libraries (discord.js, discord.py, etc.) and active dev community.',
          ]}
          cons={[
            'Verification is required at 100 servers and can be slow.',
            'Audience is heavily gaming/Western/English-skewed.',
            'No equivalent of inline mode for cross-chat reach.',
            'Voice and streaming are CPU-heavy if you build them.',
            'Smaller everyday-utility surface; users come for the community, not for tools.',
          ]}
        />

        <h3>Telegram</h3>
        <ProsCons
          pros={[
            'Simpler API. You can ship a bot in an afternoon.',
            'Inline mode lets your bot reach chats it is not in.',
            'Mini Apps are full web apps. Anything you can build in HTML, you can ship.',
            'Native payments through Stars and through real cards.',
            'Massive, global, multilingual user base.',
            'No required verification; no privileged-intent gatekeeping.',
          ]}
          cons={[
            'Bot API has small file limits (50 MB upload, 20 MB download).',
            'No native voice channels; voice features are limited.',
            'Discoverability inside Telegram is less curated than the Discord App Directory.',
            'No "server" structure. Each chat is on its own; building communities feels different.',
            'Bot UI is less rich than Discord; modals and selects need workarounds.',
          ]}
        />
      </>
    ),
  },

  {
    id: 'when-to-pick',
    title: 'When to pick which',
    heading: 'A decision guide',
    content: (
      <>
        <h3>Pick Discord when…</h3>
        <ul>
          <li>Your users are gamers, anime fans, devs, students, creators.</li>
          <li>The bot is a community tool: moderation, roles, leveling, events.</li>
          <li>Voice or stage features matter (music, town halls, study rooms).</li>
          <li>You want to charge a server-wide premium that benefits everyone in the server.</li>
          <li>You are happy to invest in verification once you scale.</li>
        </ul>

        <h3>Pick Telegram when…</h3>
        <ul>
          <li>The bot is a single-user utility: notifications, search, alerts, reminders.</li>
          <li>You want a global, multilingual audience.</li>
          <li>You want to sell digital goods or take payments inside chat.</li>
          <li>You want to ship a Mini App: store, dashboard, calendar, game.</li>
          <li>You need quick iteration without verification gates.</li>
        </ul>

        <h3>Pick both when…</h3>
        <ul>
          <li>The product idea is platform-agnostic (a translator, a weather bot, a personal AI).</li>
          <li>Your audience is split between the two and you can serve both.</li>
          <li>You want two channels of growth and resilience against either platform's policy changes.</li>
        </ul>

        <Callout label="A practical tip">
          <p>
            Many bot frameworks (grammY for Telegram, discord.js for Discord)
            share enough patterns that you can put core logic in a shared
            module and expose two thin "chat adapters". You write the brain
            once; the two ears and mouths are small.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'whats-missing',
    title: "What's only on one side",
    heading: 'Things that exist on only one platform',
    content: (
      <>
        <h3>Only on Discord</h3>
        <ul>
          <li><strong>Voice channels</strong> with bots that can join and play audio.</li>
          <li><strong>Stage channels</strong> for talks and panels.</li>
          <li><strong>Activities</strong>. Embedded mini-games tied to voice rooms.</li>
          <li><strong>Roles</strong> with detailed, layered permissions and color hierarchy.</li>
          <li><strong>Forum and media channels</strong> built around posts.</li>
          <li><strong>Server boosting</strong> as a built-in monetization for server owners.</li>
          <li><strong>Embed cards</strong> with a colored stripe, fields, footer, timestamp.</li>
        </ul>

        <h3>Only on Telegram</h3>
        <ul>
          <li><strong>Inline mode</strong>. Call your bot from any chat.</li>
          <li><strong>Mini Apps</strong>. Full HTML/CSS/JS apps inside chat.</li>
          <li><strong>Channels</strong> with unlimited subscribers (one-to-many broadcasts).</li>
          <li><strong>Stars</strong> as a built-in micro-payment currency.</li>
          <li><strong>Native card payments</strong> with no platform fee.</li>
          <li><strong>Built-in polls and quizzes</strong> as a primitive feature.</li>
          <li><strong>Phone-number identity</strong> and SIM-tier verification.</li>
          <li><strong>Local Bot API server</strong> for huge files.</li>
        </ul>
      </>
    ),
  },

  {
    id: 'closing',
    title: 'Closing thoughts',
    heading: 'Build the thing, ship it, listen',
    content: (
      <>
        <p>
          You can read every doc, watch every tutorial, and still not know
          what people will use until you put a bot in front of them. So pick
          the platform whose audience matches your idea, ship a tiny version,
          and let the messages tell you what to build next.
        </p>
        <p>
          Both Discord and Telegram are amazing places to be a small developer
          with a big idea. The tools are friendly. The communities will tell
          you what they need if you listen. Good luck out there.
        </p>

        <p className="footnote">
          Numbers and limits in this guide are accurate as of early 2026.
          Both platforms change often, so when in doubt, check the official
          developer docs at <code>discord.com/developers/docs</code> and{' '}
          <code>core.telegram.org/bots/api</code>.
        </p>
      </>
    ),
  },
]
