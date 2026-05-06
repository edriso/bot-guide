import { Callout, Example, Limits, Terms } from '../components/Blocks'
import type { Section } from '../types'

export const telegramSections: Section[] = [
  {
    id: 'intro',
    title: 'What is Telegram',
    heading: 'Telegram, in plain words',
    lede: (
      <>
        A messaging app with phone-number identity, fast servers, and a
        famously open bot platform. Bots are everywhere on Telegram, from
        tiny utilities to full mini-apps.
      </>
    ),
    content: (
      <>
        <p>
          Telegram is more like WhatsApp than Discord: people chat one-on-one
          or in groups, and there are also <strong>channels</strong> where one
          voice broadcasts to many. Bots are first-class citizens. They get
          a special <code>@bot</code> name, can be added to chats, and can
          power little apps that open right inside Telegram.
        </p>

        <h3>Why people build Telegram bots</h3>
        <ul>
          <li>
            Telegram has more than a billion users. Reach is huge, and
            bot-friendly cultures love bots for everything.
          </li>
          <li>
            The Bot API is simple and well-documented. You can ship a useful
            bot in an afternoon.
          </li>
          <li>
            Mini Apps let you embed full HTML pages right inside chat. Your
            bot can launch a calendar, a store, or a game.
          </li>
          <li>
            Telegram has a built-in payment system using <strong>Stars</strong>{' '}
            for digital goods, plus card payments for physical goods.
          </li>
        </ul>

        <Callout label="Quick mental model">
          <p>
            Chat <em>contains</em> messages. A chat can be a private chat, a
            group, a supergroup, or a channel. A bot is a special account
            (with a name ending in <code>bot</code>) you control over an HTTP
            API.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'chats',
    title: 'Chats',
    heading: 'Chats: every conversation has a type',
    lede: (
      <>
        On Telegram, every conversation is called a chat, and there are four
        kinds. The differences matter: each one has different limits and
        rules for bots.
      </>
    ),
    content: (
      <>
        <h3>The four chat types</h3>
        <Terms
          items={[
            { term: 'Private chat', def: 'A direct message between two users (or a user and a bot). Like a DM.' },
            { term: 'Group', def: 'A small chat with up to ~200 members. Closer to a basic chat room.' },
            { term: 'Supergroup', def: 'A bigger group, up to 200,000 members. Has admin tools, slow mode, topics, and more. Most "big" Telegram groups are supergroups.' },
            { term: 'Channel', def: 'One-way broadcast. Admins post, everyone else reads. Channels can have unlimited subscribers.' },
          ]}
        />

        <Example>
          <p>
            "Daily News" is a channel. The owner posts updates; subscribers
            read them. "Daily News Discussion" is a linked supergroup. The
            channel posts auto-cross to the supergroup so people can chat
            about each post.
          </p>
        </Example>

        <h3>Topics inside supergroups</h3>
        <p>
          Big supergroups can split themselves into <strong>topics</strong>,
          like channels inside a Discord server. Each topic is its own thread.
          Members pick which topics to watch.
        </p>

        <h3>Public vs private</h3>
        <p>
          Any chat can be made public with a <code>@username</code>. Public
          chats appear in search and can be joined by link. Private chats
          require an invite link.
        </p>
      </>
    ),
  },

  {
    id: 'bots',
    title: 'What is a bot',
    heading: 'A bot is a chat-shaped HTTP service',
    lede: (
      <>
        Telegram bots are even simpler than Discord ones. You send and receive
        messages over a normal HTTP API. No constant socket connection
        required.
      </>
    ),
    content: (
      <>
        <p>
          A bot has a name ending in <code>bot</code> (like{' '}
          <code>@CoolWeatherBot</code>) and looks like a regular contact with a
          few small differences. Users can talk to it directly, add it to
          groups, or follow buttons it sends.
        </p>

        <h3>What bots are great for</h3>
        <ul>
          <li>
            <strong>Notifications</strong>: alerts from your servers,
            CI builds, news, sports scores.
          </li>
          <li>
            <strong>Search and lookup</strong>: query a database, scan
            menus, look up tickets, find a user.
          </li>
          <li>
            <strong>Games and quizzes</strong>: Telegram has a built-in
            "games" feature, or use Mini Apps for richer ones.
          </li>
          <li>
            <strong>E-commerce</strong>: show a catalog, take orders, charge
            money via Stars or card payments.
          </li>
          <li>
            <strong>Customer service</strong>: small businesses run their
            entire support flow through a bot.
          </li>
          <li>
            <strong>Admin helpers</strong>: moderate big supergroups,
            kick spam, gate joins, set captchas.
          </li>
        </ul>

        <h3>Two big differences from Discord</h3>
        <Terms
          items={[
            { term: 'Bots are quiet by default in groups', def: 'In groups, bots only see commands aimed at them or messages that mention them. To see all messages you must turn off "privacy mode" in BotFather.' },
            { term: 'No persistent connection needed', def: 'You can poll Telegram for updates, or have Telegram POST to a webhook. Either works. Hosting is simpler than a Discord bot.' },
          ]}
        />
      </>
    ),
  },

  {
    id: 'botfather',
    title: 'BotFather',
    heading: 'BotFather: your bot\'s parent',
    lede: (
      <>
        BotFather is a bot run by Telegram itself. You talk to it to create
        bots, change names, set commands, and manage everything else.
      </>
    ),
    content: (
      <>
        <p>
          Search for <code>@BotFather</code> in Telegram and start a chat.
          Send <code>/newbot</code>, pick a display name, pick a unique
          username ending in <code>bot</code>, and BotFather hands you a token.
          That's it. Your bot exists.
        </p>

        <h3>Useful BotFather commands</h3>
        <Terms
          items={[
            { term: '/newbot', def: 'Create a new bot. Get a token.' },
            { term: '/mybots', def: 'List your bots and edit them.' },
            { term: '/setname / /setdescription / /setabouttext', def: 'Change how your bot looks in profiles and chats.' },
            { term: '/setuserpic', def: 'Upload an avatar image.' },
            { term: '/setcommands', def: 'Register the slash-command list users see when they type /. One per line: command - description.' },
            { term: '/setprivacy', def: 'Decide whether the bot sees every group message or only commands aimed at it.' },
            { term: '/setjoingroups', def: 'Allow or block the bot from being added to groups.' },
            { term: '/setinline', def: 'Turn on inline mode (typing @bot in any chat to call it).' },
            { term: '/newapp / /editapp', def: 'Configure Mini Apps and Web Apps.' },
            { term: '/revoke', def: 'Reset the bot token if it leaks.' },
          ]}
        />

        <Callout label="Privacy mode default" tone="warn">
          <p>
            New bots start with privacy mode <em>on</em>. In groups, your bot
            only sees: commands, messages that <code>@mention</code> it, and
            replies to its own messages. Turn it off only if you really need
            to read every message.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'token',
    title: 'Bot Token',
    heading: 'The token: your bot\'s password',
    lede: (
      <>
        Telegram tokens look like <code>123456789:ABCdef...</code>. The number
        before the colon is your bot's user ID; the rest is the secret.
        Treat the whole thing like a password.
      </>
    ),
    content: (
      <>
        <h3>Where to find or reset it</h3>
        <p>
          BotFather → <code>/mybots</code> → pick your bot → <em>API Token</em>.
          To reset, send <code>/revoke</code> in BotFather and pick the bot.
          The old token stops working immediately.
        </p>

        <h3>Where to keep it</h3>
        <ul>
          <li>Environment variables in your app, never inline in code.</li>
          <li>Add <code>.env</code> to <code>.gitignore</code>. Never commit tokens.</li>
          <li>If you suspect it leaked, revoke and replace right away.</li>
        </ul>

        <Callout label="Tokens are scoped to one bot" tone="note">
          <p>
            Each bot has its own token. Unlike Discord, a single Telegram
            developer often has many bots, each with its own token. There's
            no umbrella "application" object.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'api-vs-mtproto',
    title: 'Bot API vs MTProto',
    heading: 'Two different APIs: pick the right one',
    lede: (
      <>
        Telegram has two ways to talk to it. Most bot makers use the simpler
        Bot API, but the more powerful MTProto exists too.
      </>
    ),
    content: (
      <>
        <Terms
          items={[
            { term: 'Bot API', def: 'A simple HTTP API at api.telegram.org. JSON in, JSON out. This is what 95% of bots use. Limits: small file uploads, can\'t see chat history before the bot joined.' },
            { term: 'MTProto', def: 'The same protocol the official Telegram apps use. Much more powerful. Large files, full history, all client features. More complex. Can be used for bots through libraries like Telethon (Python) or GramJS (Node).' },
          ]}
        />

        <h3>What you can&rsquo;t do with Bot API alone</h3>
        <ul>
          <li>Upload files larger than 50 MB.</li>
          <li>Download files larger than 20 MB through Telegram&rsquo;s servers.</li>
          <li>See messages sent before your bot was added to a group.</li>
          <li>Search across history (you only see new updates).</li>
          <li>Some niche actions (deeper admin controls, advanced media).</li>
        </ul>

        <Callout label="If you only need normal chat features" tone="note">
          <p>
            Use the Bot API. It is faster to learn, easier to host, and the
            limits don't matter for most apps. Only reach for MTProto when
            you genuinely need the extra power.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'updates',
    title: 'Updates: polling vs webhooks',
    heading: 'How your bot hears about new messages',
    lede: (
      <>
        Two delivery modes. They give the same data. What's different is how
        the messages reach your code.
      </>
    ),
    content: (
      <>
        <Terms
          items={[
            { term: 'Long polling (getUpdates)', def: 'Your bot asks Telegram "anything new?" every few seconds. The request waits up to 30 seconds before returning. Easy to run on a laptop, free hosts, anywhere.' },
            { term: 'Webhooks (setWebhook)', def: 'Telegram POSTs new updates to a public HTTPS URL you choose. No constant polling, lower latency, but you need a public URL.' },
          ]}
        />

        <h3>When to pick which</h3>
        <ul>
          <li>
            <strong>Polling</strong>: local development, hobby projects,
            servers without a public URL, runtimes that sleep when idle.
          </li>
          <li>
            <strong>Webhooks</strong>: production bots, serverless platforms,
            anywhere you want the lowest latency and don't pay for idle time.
          </li>
        </ul>

        <Callout label="One mode at a time" tone="warn">
          <p>
            A bot can only use one method. Setting a webhook turns off
            polling. Calling <code>deleteWebhook</code> turns polling back on.
            If polling silently stops working, check whether someone left a
            stale webhook configured.
          </p>
        </Callout>

        <h3>The Update object</h3>
        <p>
          Each update is a small JSON object. It might be a new message, an
          edit, a callback button press, an inline query, a payment, a poll
          answer, and so on. Each update has a unique ID. Store the last one
          if you want to resume after a crash.
        </p>
      </>
    ),
  },

  {
    id: 'commands',
    title: 'Commands',
    heading: 'Commands: those /things at the start of a message',
    lede: (
      <>
        Commands on Telegram start with a slash, like <code>/start</code> or
        <code> /weather Tokyo</code>. They're just regular messages, but
        users get a nice picker if you register them.
      </>
    ),
    content: (
      <>
        <h3>The convention</h3>
        <ul>
          <li>
            <code>/start</code> is the very first command a user sees. Use it
            to welcome them and explain what your bot does.
          </li>
          <li>
            <code>/help</code> shows the help menu.
          </li>
          <li>
            In a group, commands can target your bot specifically:{' '}
            <code>/play@MyMusicBot</code>. Be ready for that suffix.
          </li>
          <li>
            Anything after the command is a free-form text argument. Parse it
            yourself.
          </li>
        </ul>

        <h3>Registering commands with BotFather</h3>
        <p>
          Use <code>/setcommands</code> in BotFather, then send a list:
        </p>
        <Example>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.9em' }}>
            start - say hello
            <br />
            weather - get the weather for a city
            <br />
            settings - change your preferences
          </p>
          <p>
            Now users see this list when they tap the menu button or type{' '}
            <code>/</code> in your chat.
          </p>
        </Example>

        <h3>Different command lists per audience</h3>
        <p>
          You can also set commands through the API for different scopes: one
          list in private chats, another in groups, another for admins only,
          another for a specific user. Useful when admin commands shouldn't
          be visible to regular members.
        </p>
      </>
    ),
  },

  {
    id: 'inline',
    title: 'Inline mode',
    heading: 'Inline mode: your bot inside any chat',
    lede: (
      <>
        Inline lets users type <code>@yourbot something</code> in <em>any</em>{' '}
        chat (even one without your bot) and pick from results your bot
        returns.
      </>
    ),
    content: (
      <>
        <p>
          Turn it on with <code>/setinline</code> in BotFather. After that,
          your bot starts receiving inline queries. Short search-style
          messages. And responds with up to 50 result cards. The user picks
          one, and that result is posted in their chat.
        </p>

        <Example>
          <p>
            A GIF bot: a user types <code>@gif catwave</code> in any chat. Your
            bot searches a GIF library, returns 50 candidates. The user picks
            one. The chat now shows that GIF, posted by the user, with a small
            "via @gif" label underneath.
          </p>
        </Example>

        <h3>Why this is special</h3>
        <ul>
          <li>
            Your bot reaches users in chats it isn't even part of.
          </li>
          <li>
            Great for sticker packs, GIF search, translations, dictionary
            lookups, image search.
          </li>
          <li>
            Telegram caches your results for a short time per user. Fast
            repeated queries.
          </li>
        </ul>

        <Callout label="Inline limits">
          <p>
            Up to 50 results per query. You have a few seconds to respond.
            Result IDs must be unique within a query.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'keyboards',
    title: 'Keyboards & buttons',
    heading: 'Two kinds of keyboards',
    lede: (
      <>
        Telegram has two button systems with similar names but different
        purposes. Pick the right one and your UX feels native.
      </>
    ),
    content: (
      <>
        <Terms
          items={[
            { term: 'Reply keyboard', def: 'Replaces the user\'s normal keyboard with custom buttons. When tapped, the button text is sent as a message. Great for guided flows and menu-driven bots.' },
            { term: 'Inline keyboard', def: 'Buttons attached to a specific message. Tapping them does NOT send a message; instead, your bot gets a callback query with a small data payload.' },
            { term: 'One-time reply keyboard', def: 'A reply keyboard that disappears after one tap.' },
            { term: 'Force reply', def: 'Tells the user\'s app: "the next message will reply to mine". Useful for asking a single follow-up question.' },
          ]}
        />

        <h3>Inline keyboard buttons can do…</h3>
        <ul>
          <li>
            Send <strong>callback data</strong> back to your bot (the most
            common use).
          </li>
          <li>Open a <strong>URL</strong> in the user's browser.</li>
          <li>Launch a <strong>Mini App / Web App</strong>.</li>
          <li>Switch to inline mode in the same or a different chat.</li>
          <li>Trigger a payment (a "Pay" button).</li>
          <li>Login to a website using Telegram's login widget.</li>
        </ul>

        <Example>
          <p>
            A poll: your bot sends "Pizza or sushi?" with two inline buttons,
            "🍕 Pizza" (callback_data=<code>pizza</code>) and "🍣 Sushi"
            (callback_data=<code>sushi</code>). When someone taps, you receive
            a callback query, count the vote, and edit the same message to
            update the score.
          </p>
        </Example>
      </>
    ),
  },

  {
    id: 'callback-queries',
    title: 'Callback queries',
    heading: 'Callback queries: the click event',
    lede: (
      <>
        When a user taps an inline button, Telegram sends your bot a callback
        query. You should always answer it, even if just to acknowledge.
      </>
    ),
    content: (
      <>
        <p>
          A callback query carries: who clicked, which message the button is
          on, and the <code>callback_data</code> string you set. Pack any
          state you need into that string (it can be up to 64 bytes).
        </p>

        <h3>Always answer</h3>
        <p>
          Call <code>answerCallbackQuery</code> after handling. You can:
        </p>
        <ul>
          <li>Answer empty. The loading spinner on the button just stops.</li>
          <li>Show a small toast at the top of the chat ("Vote received!").</li>
          <li>Show a pop-up alert (use sparingly).</li>
          <li>Open a URL. Useful for sending the user somewhere.</li>
        </ul>

        <Callout label="If you don't answer" tone="warn">
          <p>
            The user sees a loading spinner that never stops, and after a
            while the click times out. Always answer, even if you only do it
            so the spinner disappears.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'mini-apps',
    title: 'Mini Apps (Web Apps)',
    heading: 'Mini Apps: full pages inside Telegram',
    lede: (
      <>
        A Mini App is a regular HTML page (your website) that opens inside
        Telegram. It can talk to your bot, use Telegram's look and feel, and
        even take payments without leaving chat.
      </>
    ),
    content: (
      <>
        <p>
          You build a normal web page hosted at an HTTPS URL. Telegram
          provides a small JavaScript SDK with the user's ID, language, theme
          colors, the back button, the main button at the bottom, and a way
          to send data back to your bot.
        </p>

        <h3>What Mini Apps unlock</h3>
        <ul>
          <li>
            Rich UI a chat can't express: forms, calendars, maps, dashboards,
            photo editors, real-time games.
          </li>
          <li>
            Stores with images, filters, search, and a checkout that uses
            Telegram payments.
          </li>
          <li>
            Multiplayer and social features, since you know the user's
            Telegram identity already.
          </li>
        </ul>

        <Example>
          <p>
            A pizza-delivery bot greets the user, then a "Order Now" inline
            button opens a Mini App with the menu. The user picks toppings
            and pays in Stars. The bot gets a confirmation and books the
            order.
          </p>
        </Example>

        <h3>How users find Mini Apps</h3>
        <ul>
          <li>The bot can show a "Launch" button next to the message field.</li>
          <li>An inline button in any message can open the Mini App.</li>
          <li>You can place an attachment menu icon for instant access.</li>
          <li>Telegram has a Mini App store inside the official client.</li>
        </ul>

        <Callout label="The web is huge" tone="note">
          <p>
            Anything you can build for the web, you can put inside a Mini App.
            React, Vue, Svelte. All fine. The Telegram SDK is just a few
            lightweight helpers.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'payments',
    title: 'Payments & Stars',
    heading: 'Taking money inside Telegram',
    lede: (
      <>
        Telegram has built-in payments. There are two flavors: Stars (for
        digital goods) and traditional payments (for real-world goods).
      </>
    ),
    content: (
      <>
        <Terms
          items={[
            { term: 'Stars', def: 'A virtual currency users buy from Telegram. Bots charge Stars for digital goods like subscriptions, in-game items, premium features. Telegram handles compliance with app-store rules.' },
            { term: 'Telegram Payments (cards)', def: 'For real-world goods (food, shipping, services). You connect a payment provider (Stripe, etc.) through BotFather; Telegram passes the buyer\'s card details to the provider directly. Telegram doesn\'t take a cut here.' },
            { term: 'Premium gifts', def: 'A bot can gift Telegram Premium to users. Stars-powered.' },
          ]}
        />

        <h3>How a Stars purchase works</h3>
        <ul>
          <li>You send the user an invoice with a price in Stars.</li>
          <li>The user taps "Pay", Telegram confirms with their account.</li>
          <li>Your bot receives a successful_payment update. Deliver the goods.</li>
          <li>Stars accumulate in your bot's balance and can be withdrawn (or used to buy ads, premium gifts, etc.).</li>
        </ul>

        <Callout label="Use Stars for digital, cards for physical" tone="warn">
          <p>
            Telegram's rules require Stars for anything purely digital
            (subscriptions, unlocks, virtual goods). Card payments are only
            for goods and services delivered outside Telegram (a pizza, a
            haircut, a hotel night).
          </p>
        </Callout>

        <h3>Refunds and reporting</h3>
        <p>
          Refunds for Stars are handled by Telegram and you can issue them
          from your bot. Card refunds go through whatever payment provider
          you connected.
        </p>
      </>
    ),
  },

  {
    id: 'channels-admin',
    title: 'Channels & admin bots',
    heading: 'Admin bots in groups and channels',
    lede: (
      <>
        Bots can be admins. With the right permissions they can post in
        channels, kick spammers, restrict members, manage topics, and more.
      </>
    ),
    content: (
      <>
        <h3>Admin permissions you can grant</h3>
        <Terms
          items={[
            { term: 'Post messages', def: 'Channel-only. The bot can publish posts.' },
            { term: 'Edit messages', def: 'Edit any message, including those by other admins.' },
            { term: 'Delete messages', def: 'Remove messages from the chat.' },
            { term: 'Restrict members', def: 'Mute, ban, or limit what a member can do.' },
            { term: 'Invite users', def: 'Add new members and create invite links.' },
            { term: 'Pin messages', def: 'Pin a message to the top.' },
            { term: 'Manage topics', def: 'Create, edit, close topics in supergroups.' },
            { term: 'Manage video chats', def: 'Start and run voice/video chats.' },
            { term: 'Promote members', def: 'Make others admins. Risky. Give carefully.' },
          ]}
        />

        <h3>Anti-spam and moderation</h3>
        <p>
          Big public groups need bots. Common patterns:
        </p>
        <ul>
          <li>
            <strong>Captcha gates</strong>: new members must tap a button
            within X seconds or get kicked.
          </li>
          <li>
            <strong>Word filters</strong>: auto-delete or warn for banned
            phrases.
          </li>
          <li>
            <strong>Slow mode</strong>: limit how often each user can post.
          </li>
          <li>
            <strong>Reputation systems</strong>: track helpful answers, give
            badges.
          </li>
        </ul>

        <Callout label="Don't overdo it" tone="note">
          <p>
            The best moderation bots do a few things very well. Generic
            mega-bots that try to do everything are easy to misconfigure.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'files',
    title: 'Files & media',
    heading: 'What your bot can send and receive',
    lede: (
      <>
        Telegram is fast and generous with media. But Bot API has tighter
        file limits than the official apps.
      </>
    ),
    content: (
      <>
        <h3>Bot API file limits</h3>
        <Limits
          items={[
            { label: 'Upload (send)', value: '50 MB', meta: 'photos / docs / video / audio' },
            { label: 'Download (get)', value: '20 MB', meta: 'via getFile through Telegram\'s servers' },
            { label: 'Photo', value: 'JPEG', meta: 'auto-compressed; send as document for original quality' },
            { label: 'Animation', value: 'GIF/MP4', meta: 'short, looping' },
            { label: 'Voice', value: 'OGG (opus)', meta: 'special voice-message format' },
            { label: 'Video note', value: 'round MP4', meta: 'circular video bubbles' },
          ]}
        />

        <h3>Working around the limits</h3>
        <ul>
          <li>
            For larger files, use a <strong>local Bot API server</strong>{' '}
            (Telegram's open-source binary). It allows uploads up to 2 GB and
            downloads without size cap.
          </li>
          <li>
            Or switch to <strong>MTProto</strong> through a library; Premium
            users can send up to 4 GB; non-Premium up to 2 GB.
          </li>
          <li>
            For very common files, Telegram returns a <code>file_id</code>{' '}
            you can re-send forever without re-uploading.
          </li>
        </ul>

        <Callout label="The file_id trick" tone="note">
          <p>
            Once you upload a file, Telegram gives you a <code>file_id</code>.
            Save it. Next time you want to send the same file, just send the
            ID. No upload, instant delivery.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'limits-cheatsheet',
    title: 'Limits cheatsheet',
    heading: 'Numbers worth memorizing',
    lede: (
      <>
        Quick reference for sizes, rates, and the boundaries you keep
        bumping into.
      </>
    ),
    content: (
      <>
        <h3>Messages</h3>
        <Limits
          items={[
            { label: 'Message text', value: '4,096', meta: 'characters' },
            { label: 'Media caption', value: '1,024', meta: 'characters' },
            { label: 'Inline button text', value: 'short', meta: 'one line, ~few words' },
            { label: 'Buttons in a row', value: '8', meta: 'practical max' },
            { label: 'Inline result', value: '50', meta: 'per query' },
            { label: 'Callback data', value: '64', meta: 'bytes' },
          ]}
        />

        <h3>Sending rate limits</h3>
        <Limits
          items={[
            { label: 'To different chats', value: '~30/s', meta: 'broadcasts; sustained higher = throttled' },
            { label: 'To the same chat', value: '1/s', meta: 'one message per second per chat' },
            { label: 'In a group', value: '20/min', meta: 'per group, all bots combined' },
            { label: 'getUpdates', value: '~1/s', meta: 'recommended polling rate' },
          ]}
        />

        <h3>Chat sizes</h3>
        <Limits
          items={[
            { label: 'Group', value: '~200', meta: 'members; auto-converts to supergroup if it grows' },
            { label: 'Supergroup', value: '200,000', meta: 'members' },
            { label: 'Channel subscribers', value: 'unlimited', meta: '' },
            { label: 'Pinned messages', value: 'unlimited', meta: 'in supergroups' },
          ]}
        />

        <h3>Bot accounts</h3>
        <Limits
          items={[
            { label: 'Bots per developer', value: '20', meta: 'soft cap; ask Telegram for more if needed' },
            { label: 'Username', value: '5–32', meta: 'chars, must end in "bot"' },
            { label: 'Description', value: '512', meta: 'characters in /setdescription' },
            { label: 'About text', value: '120', meta: 'characters in /setabouttext' },
          ]}
        />
      </>
    ),
  },

  {
    id: 'monetization',
    title: 'Monetization',
    heading: 'Making money on Telegram',
    lede: (
      <>
        You have several routes: Stars, card payments, ads, premium tiers,
        and partnerships. Stars is the most "platform-native".
      </>
    ),
    content: (
      <>
        <h3>The official routes</h3>
        <Terms
          items={[
            { term: 'Stars', def: 'Charge Stars for digital goods. Telegram handles user purchases. Your balance can be withdrawn or spent on Telegram features.' },
            { term: 'Card payments', def: 'Through providers like Stripe. Telegram doesn\'t cut. For physical goods only.' },
            { term: 'Telegram Ads', def: 'Show small ads in your channel via the official Telegram Ad Platform; revenue split with Telegram.' },
            { term: 'Premium gifts', def: 'Bots can gift Premium subscriptions, sometimes as a perk or upsell.' },
            { term: 'Affiliate programs', def: 'Bots can run referral links and tracked rewards directly through Stars-based commissions.' },
          ]}
        />

        <h3>Other patterns that work</h3>
        <ul>
          <li>
            <strong>Paid channels</strong>: you sell access to a private
            channel with exclusive content; subscribers pay through Stars or
            an external system.
          </li>
          <li>
            <strong>Mini Apps</strong>: full e-commerce or SaaS UIs inside
            Telegram, often the highest-grossing kind of "bot".
          </li>
          <li>
            <strong>White-label admin bots</strong>: sell your moderation or
            analytics bot to community owners as a subscription.
          </li>
          <li>
            <strong>External funnel</strong>: give a free taste in the bot,
            sell via your own site for the full product.
          </li>
        </ul>

        <Callout label="Telegram is generous about payouts" tone="note">
          <p>
            Card-based revenue is yours; Stars revenue carries Telegram's
            platform fee. Always read the current Stars terms before making
            big plans. Exact percentages and minimums change.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'publishing',
    title: 'Publishing & growth',
    heading: 'Helping people find your bot',
    lede: (
      <>
        Telegram's discovery is more "share and word of mouth" than store-style.
        That changes the playbook.
      </>
    ),
    content: (
      <>
        <h3>Where to be listed</h3>
        <ul>
          <li>
            <strong>Telegram's in-app search</strong>: your username has to
            be public for users to find it.
          </li>
          <li>
            <strong>BotsArchive, Telegram Bot Store, Storebot</strong>:
            community lists where users browse new bots.
          </li>
          <li>
            <strong>Public channels and groups</strong> in your niche. Show
            up, help people, drop your bot only when relevant.
          </li>
          <li>
            <strong>ProductHunt, IndieHackers, X/Twitter</strong>: outside
            Telegram, but Telegram-native creators read these.
          </li>
        </ul>

        <h3>Things that drive growth</h3>
        <ul>
          <li>
            <strong>Inline mode</strong>: every time someone uses your bot
            inline in a chat, the recipients see the "via @yourbot" footer.
            Free advertising.
          </li>
          <li>
            <strong>Mini Apps</strong> with social hooks. Invite a friend,
            share results, race a leaderboard.
          </li>
          <li>
            <strong>Deep links</strong> like <code>t.me/yourbot?start=X</code>{' '}
            opens the bot with extra context. Use it for referrals, share
            tracking, special promos.
          </li>
        </ul>

        <Callout label="Stay on the right side of policy" tone="warn">
          <p>
            Bots that send unsolicited DMs to lists of users get banned fast.
            Don't scrape contacts. Don't spam groups you don't own. Build
            things people add on purpose.
          </p>
        </Callout>
      </>
    ),
  },
]
