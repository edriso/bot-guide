import { Callout, Example, Limits, Terms } from '../components/Blocks'
import type { Section } from '../types'

export const discordSections: Section[] = [
  {
    id: 'intro',
    title: 'What is Discord',
    heading: 'Discord, in plain words',
    lede: (
      <>
        A chat app first built for gamers, now used by communities of every
        kind. You join <em>servers</em>, talk in <em>channels</em>, and bots can
        live there with you.
      </>
    ),
    content: (
      <>
        <p>
          Think of Discord like a city of clubhouses. Each clubhouse is a{' '}
          <strong>server</strong>. Inside a clubhouse there are different rooms
          for different topics. Those rooms are called <strong>channels</strong>
          . People in the clubhouse are <strong>members</strong>, and the
          clubhouse owner can give them special <strong>roles</strong> like
          "moderator" or "VIP".
        </p>
        <p>
          A <strong>bot</strong> is a special kind of member. It is a piece of
          software that joins servers and reacts to what people do. Bots can
          welcome new members, run games, post news, take payments, moderate
          chat, and much more.
        </p>

        <h3>Why people build Discord bots</h3>
        <ul>
          <li>
            Discord communities are large, loud, and active. Your bot can be
            used by thousands of servers.
          </li>
          <li>
            The platform gives you rich UI: buttons, menus, forms, embeds, and
            more.
          </li>
          <li>
            You can earn money through <strong>App Subscriptions</strong>{' '}
            without building your own payment system.
          </li>
          <li>
            The community is friendly to small developers, and small bots can
            grow huge if they fill a real need.
          </li>
        </ul>

        <Callout label="Quick mental model">
          <p>
            Server <em>contains</em> channels. Channels <em>contain</em>{' '}
            messages. Members <em>have</em> roles. Roles <em>grant</em>{' '}
            permissions. Bots are members with code behind them.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'servers',
    title: 'Servers (Guilds)',
    heading: 'Servers: also called "guilds"',
    lede: (
      <>
        Every community on Discord lives inside a server. In the API, a server
        is called a <em>guild</em>, but most people just say "server".
      </>
    ),
    content: (
      <>
        <p>
          A server is a private space owned by one person (the{' '}
          <strong>owner</strong>). The owner can invite people, create channels,
          set rules, and add bots. Each server has its own settings, members,
          roles, and chat history.
        </p>

        <h3>Things that belong to a server</h3>
        <Terms
          items={[
            { term: 'Owner', def: 'The single person who created the server. Has full power over everything.' },
            { term: 'Members', def: 'People (and bots) who joined the server.' },
            { term: 'Channels', def: 'Rooms where chat or voice happens.' },
            { term: 'Roles', def: 'Labels you give to members to grant powers and colors.' },
            { term: 'Emojis & Stickers', def: 'Custom reactions the server made or uploaded.' },
            { term: 'Invite links', def: 'Codes like discord.gg/abc that let new people join.' },
            { term: 'Boosts', def: 'A paid perk from members that unlocks better audio, more emoji slots, and a fancy banner.' },
          ]}
        />

        <h3>Server vs Direct Message</h3>
        <p>
          A <strong>DM</strong> (direct message) is a private chat between two
          users. A <strong>group DM</strong> can have up to 10 people. These
          live outside any server. Bots <em>can</em> message users in DMs, but
          users have to allow it (they can block DMs from server members).
        </p>

        <Example>
          <p>
            "FreeCodeCamp" is a server. Inside it, <code>#announcements</code>{' '}
            is a channel. <em>Bob</em> joined the server, so he is a member.
            Bob has the <em>Helper</em> role. Bob can chat in{' '}
            <code>#general</code> but not in <code>#staff-only</code> because
            his role does not have permission there.
          </p>
        </Example>

        <h3>Server tiers</h3>
        <p>
          When members boost a server, it climbs through Levels 1, 2, and 3.
          Higher levels mean better voice quality, more emoji and sticker
          slots, custom banner, vanity invite URL, and a few small extras.
        </p>
      </>
    ),
  },

  {
    id: 'channels',
    title: 'Channels',
    heading: 'Channels: the rooms inside a server',
    lede: (
      <>
        Discord has many channel flavors. Each one is built for a different
        kind of conversation, and your bot can post in (or react to) any of
        them.
      </>
    ),
    content: (
      <>
        <h3>Channel types</h3>
        <Terms
          items={[
            {
              term: 'Text',
              def: 'A regular chat room. Members type, bots type, life is good.',
            },
            {
              term: 'Voice',
              def: 'A voice room. People join and talk live. Bots can join too if they handle audio.',
            },
            {
              term: 'Category',
              def: 'A folder that groups related channels together (like "Staff" or "Games").',
            },
            {
              term: 'Announcement',
              def: 'A text channel that other servers can "follow" so messages there spread to other servers.',
            },
            {
              term: 'Stage',
              def: 'A voice channel for talks and panels. Speakers on stage, audience listens, like a town hall.',
            },
            {
              term: 'Forum',
              def: 'A channel of posts (each post is its own thread). Great for help or feature ideas.',
            },
            {
              term: 'Media',
              def: 'A forum-like channel built for sharing images and videos.',
            },
            {
              term: 'Thread',
              def: 'A small side conversation that branches off a single message in a text channel.',
            },
          ]}
        />

        <Callout label="Tip">
          <p>
            Threads are perfect for keeping channels tidy. A bot answer can
            spawn a thread so every back-and-forth stays separate from the main
            chat.
          </p>
        </Callout>

        <h3>What you can do in a channel</h3>
        <ul>
          <li>Send and edit messages</li>
          <li>React with emojis</li>
          <li>Pin important messages</li>
          <li>Send embeds (rich, styled boxes. See the embeds page)</li>
          <li>Send files (images, video, audio, archives)</li>
          <li>Send buttons, menus, and forms (see interactions)</li>
          <li>Start threads and polls</li>
        </ul>

        <h3>Channel permissions</h3>
        <p>
          Each channel can override server-wide permissions. So even if a role
          can normally send messages, a channel can say "this role cannot speak
          here". When your bot fails to do something, the cause is almost
          always missing permissions in <em>that specific channel</em>.
        </p>
      </>
    ),
  },

  {
    id: 'roles',
    title: 'Roles & Permissions',
    heading: 'Roles, permissions, and the hierarchy',
    lede: (
      <>
        Roles are how Discord decides "who can do what". Get this part right
        and your bot will feel safe and predictable.
      </>
    ),
    content: (
      <>
        <p>
          A <strong>role</strong> is a label with permissions attached. When you
          give a role to a member, that member gains those permissions. A
          member can have many roles at once, and Discord adds the permissions
          together.
        </p>

        <h3>The role list is a stack</h3>
        <p>
          Roles live in a list, top to bottom. The top role wins for things
          like display color and "who can manage who". A bot can only manage
          (kick, ban, role-change) members whose top role is <em>below</em> the
          bot's top role.
        </p>

        <Callout label="Common gotcha" tone="warn">
          <p>
            If your bot can't add a role to a user, the role you're trying to
            add is probably <em>above</em> the bot's own role in the list. Drag
            the bot role higher and it works.
          </p>
        </Callout>

        <h3>Permissions you'll meet often</h3>
        <Terms
          items={[
            { term: 'Administrator', def: 'A god-mode flag. Skips all checks. Give carefully.' },
            { term: 'Manage Server', def: 'Edit server settings, name, icon, etc.' },
            { term: 'Manage Channels', def: 'Create, delete, rename channels.' },
            { term: 'Manage Roles', def: 'Create roles and assign them (only roles below your top role).' },
            { term: 'Kick / Ban Members', def: 'Remove people. Ban also blocks them from rejoining.' },
            { term: 'Send Messages', def: 'Self-explanatory.' },
            { term: 'Embed Links', def: 'Required to send links that "preview" or to send rich embeds.' },
            { term: 'Attach Files', def: 'Upload images and files.' },
            { term: 'Use External Emojis', def: 'Use emojis from other servers (often used by bots).' },
            { term: 'Read Message History', def: 'See messages sent before you joined.' },
            { term: 'Mention @everyone', def: 'Power tool. Usually only for staff.' },
          ]}
        />

        <Example>
          <p>
            Your music bot tries to join voice. It needs <em>Connect</em> in
            that voice channel and <em>Speak</em> too. If it can connect but
            stays silent, it's almost always missing <em>Speak</em>.
          </p>
        </Example>
      </>
    ),
  },

  {
    id: 'members',
    title: 'Members & Users',
    heading: 'Users, members, and the difference',
    lede: (
      <>
        These two words sound the same but they mean different things in the
        API. Mixing them up is one of the most common bugs.
      </>
    ),
    content: (
      <>
        <Terms
          items={[
            {
              term: 'User',
              def: 'A Discord account. Has a global username, an avatar, and an ID. Same across every server.',
            },
            {
              term: 'Member',
              def: 'A user inside a specific server. Has a server-only nickname, a join date, roles, and a server avatar.',
            },
          ]}
        />

        <p>
          So the same person Bob has <strong>one user</strong> but{' '}
          <strong>many member objects</strong>. One per server he's in. When
          you ban "Bob", you ban the user. When you give him a role, you
          change a member.
        </p>

        <h3>User identity these days</h3>
        <p>
          Discord moved away from the old <code>Bob#1234</code> format. Today
          everyone has a global <strong>username</strong> (lowercase, unique)
          and a <strong>display name</strong> (what people see, can repeat).
          Server members can override the display name with a per-server{' '}
          <strong>nickname</strong>.
        </p>

        <h3>Presence</h3>
        <p>
          Presence means a member's online status (online, idle, do not
          disturb, offline) plus what they're currently playing or listening
          to. Reading presence requires a special permission called the{' '}
          <em>Presence Intent</em>. See the Intents section.
        </p>
      </>
    ),
  },

  {
    id: 'bots',
    title: 'What is a bot',
    heading: 'A bot is just an account with code',
    lede: (
      <>
        On Discord, a bot account looks almost like a normal user. The only
        magic is that you control it from your server somewhere on the
        internet.
      </>
    ),
    content: (
      <>
        <p>
          A bot can do almost everything a user can: send messages, react,
          create channels, kick people, play voice, and more. The list of what
          it cannot do is short. Bots can't add friends, can't run on the
          official Discord client, and can't bypass permissions.
        </p>

        <h3>What bots are great for</h3>
        <ul>
          <li>
            <strong>Moderation</strong>. Auto-delete bad words, mute spam,
            warn-and-ban systems.
          </li>
          <li>
            <strong>Fun</strong>. Games, quizzes, music, role-playing dice.
          </li>
          <li>
            <strong>Utility</strong>. Polls, reminders, translation, weather,
            search.
          </li>
          <li>
            <strong>Community</strong>. Welcome new members, give roles based
            on choices, run leveling systems.
          </li>
          <li>
            <strong>Business</strong>. Accept payments, sell digital goods,
            run subscriptions, support tickets.
          </li>
          <li>
            <strong>Integrations</strong>. Bring news from GitHub, YouTube,
            X/Twitter, RSS, etc., into Discord.
          </li>
        </ul>

        <h3>Bot account vs user account</h3>
        <Terms
          items={[
            {
              term: 'Bot account',
              def: 'Created in the Developer Portal. Has a token. Can be added to many servers. Allowed and supported.',
            },
            {
              term: 'User account',
              def: 'Real human accounts. Automating them ("self-bots") breaks the Terms of Service and can get banned.',
            },
          ]}
        />

        <Callout tone="warn" label="Do not self-bot">
          <p>
            Logging into a real user account from code is against Discord's
            rules. Always create a real bot account through the Developer
            Portal. It's free.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'dev-portal',
    title: 'Developer Portal',
    heading: 'The Discord Developer Portal',
    lede: (
      <>
        This is the website where you give birth to your bot, get its token,
        set its avatar, and decide which servers can install it.
      </>
    ),
    content: (
      <>
        <p>
          Visit <code>discord.com/developers/applications</code>. Click{' '}
          <em>New Application</em>. Give it a name. That name and avatar is
          what users will see when they invite your bot.
        </p>

        <h3>Application vs Bot</h3>
        <p>
          The big object is an <strong>Application</strong>. Inside the
          application, the <strong>Bot</strong> tab gives the application a
          chat presence (a member that can join servers). The application also
          owns slash commands, OAuth2 settings, secrets, and integration
          metadata.
        </p>

        <h3>Important pages inside an application</h3>
        <Terms
          items={[
            { term: 'General Information', def: 'Name, description, app icon. Also where you find the Application ID.' },
            { term: 'OAuth2', def: 'How users invite your bot. Generates the install URL with the right scopes and permissions.' },
            { term: 'Bot', def: 'Bot username, avatar, banner, token, intents.' },
            { term: 'Installation', def: 'Lets your app be installed on a user (DMs follow them) or on a server.' },
            { term: 'Rich Presence', def: 'For game-style "Now Playing" status integrations.' },
            { term: 'App Testers', def: 'Adds testers who can install your app before it is public.' },
          ]}
        />

        <h3>Inviting your bot to a server</h3>
        <p>
          Build an OAuth2 URL with the <code>bot</code> scope and the
          permissions your bot needs. Send that link to a server owner. They
          click it, pick a server, and the bot joins. Pick the smallest set of
          permissions that does the job. Owners trust apps that don't ask for
          everything.
        </p>

        <Callout label="Scope" tone="note">
          <p>
            The <code>applications.commands</code> scope is required so your
            bot can register slash commands in that server. It's almost always
            picked together with <code>bot</code>.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'token',
    title: 'Bot Token',
    heading: 'The bot token: your bot\'s password',
    lede: (
      <>
        The token is a long secret string. Anyone who has it can fully control
        your bot. Treat it like a password to your bank account.
      </>
    ),
    content: (
      <>
        <h3>Where to find it</h3>
        <p>
          Developer Portal → your application → <em>Bot</em> tab →{' '}
          <em>Reset Token</em>. Discord shows the token only once, so copy it
          immediately into a safe place.
        </p>

        <h3>Where to keep it</h3>
        <ul>
          <li>
            Use environment variables (a <code>.env</code> file in dev, secrets
            in prod). Never paste tokens into code.
          </li>
          <li>
            Add <code>.env</code> to <code>.gitignore</code>. Never commit
            tokens to git.
          </li>
          <li>
            If a token leaks (even just for a second), reset it immediately.
            Discord can also reset it for you when its scanner finds your
            token in a public repo.
          </li>
        </ul>

        <Callout label="If your token leaks" tone="warn">
          <p>
            Reset it the moment you notice. Then check the audit log for
            actions you didn't perform. A leaked token can spam your servers,
            ban members, or post scams in seconds.
          </p>
        </Callout>

        <h3>Tokens vs OAuth2</h3>
        <p>
          The bot token is for <em>your bot</em> talking to Discord. OAuth2
          tokens are for <em>users</em> giving your app permission to read
          their data (like their email or guild list). They're different and
          both useful.
        </p>
      </>
    ),
  },

  {
    id: 'intents',
    title: 'Intents',
    heading: 'Intents: telling Discord what events you want',
    lede: (
      <>
        Intents are check boxes you toggle to say: "I care about these events,
        please send them to me." If you don't enable an intent, those events
        never reach your bot.
      </>
    ),
    content: (
      <>
        <p>
          Intents save bandwidth and protect privacy. There are two groups:
          regular intents that anyone can enable, and{' '}
          <strong>privileged intents</strong> that need extra approval from
          Discord once your bot is in many servers.
        </p>

        <h3>Common intents</h3>
        <Terms
          items={[
            { term: 'Guilds', def: 'When servers add or remove your bot, channels change, etc. Almost always required.' },
            { term: 'GuildMembers (privileged)', def: 'Member join, leave, role change events. Without it, you do not see new members.' },
            { term: 'GuildMessages', def: 'Message create / edit / delete events.' },
            { term: 'MessageContent (privileged)', def: 'Lets you read what messages actually say. Without it, message content is empty for messages your bot was not mentioned in.' },
            { term: 'GuildPresences (privileged)', def: 'Online status and "currently playing" info. Heavy and rarely needed.' },
            { term: 'GuildVoiceStates', def: 'Who is in voice channels. Required for music bots.' },
            { term: 'DirectMessages', def: 'Messages in DMs with your bot.' },
          ]}
        />

        <Callout label="The big ones to know" tone="warn">
          <p>
            <strong>Message Content</strong>, <strong>Server Members</strong>,
            and <strong>Presence</strong> are <em>privileged</em>. Toggle them
            on in the Bot tab. Once your bot is in 100 servers, Discord asks
            you to verify your bot before they keep working. See Verification.
          </p>
        </Callout>

        <h3>You probably need MESSAGE_CONTENT only if…</h3>
        <p>
          …you build a bot that reads everyday chat (like a chat-game bot or a
          legacy "prefix command" bot using <code>!play</code>). If you only
          use <strong>slash commands</strong>, buttons, and mentions, you do{' '}
          <em>not</em> need it. Discord prefers slash commands for this reason.
        </p>
      </>
    ),
  },

  {
    id: 'commands',
    title: 'Slash Commands',
    heading: 'Slash commands: the modern way',
    lede: (
      <>
        Slash commands are the official, native way for users to talk to bots.
        Type <code>/</code> in Discord, see a list, fill the fields, hit Enter.
      </>
    ),
    content: (
      <>
        <h3>Why slash commands rule</h3>
        <ul>
          <li>
            Discord shows your command names, descriptions, and options for
            free.
          </li>
          <li>
            You don't need to read every message, so you don't need the
            Message Content intent.
          </li>
          <li>
            Each option has a strict type. Text, number, user, channel, role,
            file. Validation is automatic.
          </li>
          <li>Auto-complete: as the user types, your bot can suggest values.</li>
          <li>Permissions: you can hide a command from users who shouldn't run it.</li>
        </ul>

        <h3>Anatomy of a slash command</h3>
        <Terms
          items={[
            { term: 'Name', def: 'The word users type after the slash. Lowercase, no spaces.' },
            { term: 'Description', def: 'A short line shown next to the command in the picker.' },
            { term: 'Options', def: 'The fields the user fills. Each has a type and may be required or optional.' },
            { term: 'Subcommands', def: 'Group related commands together: /poll create, /poll close.' },
            { term: 'Subcommand groups', def: 'A second layer of grouping under one command.' },
            { term: 'Default permissions', def: 'Which built-in permission users need to even see the command.' },
            { term: 'Guild vs Global', def: 'Guild-only commands are instant during dev. Global commands roll out everywhere within minutes.' },
          ]}
        />

        <Example>
          <p>
            <code>/poll create question:"Pizza or sushi?" duration:60</code>{' '}
            is a slash command with a subcommand <em>create</em> and two
            options: <em>question</em> (string, required) and{' '}
            <em>duration</em> (integer, optional, in minutes).
          </p>
        </Example>

        <h3>Other command types</h3>
        <Terms
          items={[
            { term: 'Message commands', def: 'Right-click a message, click "Apps", run a command on that message. Great for "report" or "translate".' },
            { term: 'User commands', def: 'Right-click a user, click "Apps", run a command on that user. Great for "show profile" or "warn".' },
            { term: 'Prefix commands (legacy)', def: 'Reading messages like !play or .help. Still works but needs Message Content intent. Discord prefers slash commands.' },
          ]}
        />

        <h3>Auto-complete</h3>
        <p>
          When the user types in an option, your bot can return a list of up
          to 25 choices. Use this for searching: a movie name, a city, a song,
          a member of the server.
        </p>
      </>
    ),
  },

  {
    id: 'interactions',
    title: 'Buttons, menus, modals',
    heading: 'Interactions: clickable UI inside chat',
    lede: (
      <>
        Beyond slash commands, your bot can send buttons, drop-downs, and pop-up
        forms. Users click. You handle. The result feels like a tiny app.
      </>
    ),
    content: (
      <>
        <h3>The pieces</h3>
        <Terms
          items={[
            { term: 'Buttons', def: 'Up to 5 in a row. Up to 5 rows. Styles: primary (blue), secondary (gray), success (green), danger (red), and link (opens a URL).' },
            { term: 'String select menus', def: 'A drop-down with up to 25 options.' },
            { term: 'User / Role / Channel / Mentionable selects', def: 'Drop-downs that list real users, roles, or channels from the server.' },
            { term: 'Modals', def: 'Pop-up forms with text inputs (single-line or paragraph). Up to 5 inputs per modal.' },
            { term: 'Components V2', def: 'A newer way to build messages purely from layout components. Sections, dividers, galleries. Without using embeds at all.' },
          ]}
        />

        <h3>Custom IDs</h3>
        <p>
          Every button or menu carries a <code>custom_id</code> string you set.
          When the user clicks, Discord sends that string back. People often
          pack data into it, like <code>vote:42</code>, so they know what to
          do without storing extra state.
        </p>

        <Callout label="Plan your interaction lifetime">
          <p>
            Components in old messages still work, even after a server reboot.
            Make your custom IDs stable and easy to parse. Or set buttons to
            disable themselves after one use.
          </p>
        </Callout>

        <h3>Replying to interactions</h3>
        <p>
          You have <strong>3 seconds</strong> to acknowledge an interaction.
          If your work takes longer, send a "thinking…" reply first
          (<em>defer</em>), then edit it later within 15 minutes.
        </p>
      </>
    ),
  },

  {
    id: 'embeds',
    title: 'Embeds',
    heading: 'Embeds: beautiful boxes inside messages',
    lede: (
      <>
        An embed is a styled card with a colored side bar, title, description,
        fields, footer, image, and more. They're how bots make messages look
        polished.
      </>
    ),
    content: (
      <>
        <h3>Parts of an embed</h3>
        <Terms
          items={[
            { term: 'Author', def: 'Tiny name + small icon at the top.' },
            { term: 'Title', def: 'Big bold heading.' },
            { term: 'URL', def: 'Makes the title clickable.' },
            { term: 'Description', def: 'A block of text under the title. Markdown is supported.' },
            { term: 'Fields', def: 'Name + value pairs. Up to 25 of them. Can be set inline (side by side) or stacked.' },
            { term: 'Footer', def: 'Small line at the bottom.' },
            { term: 'Timestamp', def: 'Time shown next to the footer.' },
            { term: 'Color', def: 'The colored stripe on the left side.' },
            { term: 'Thumbnail / Image', def: 'A small image to the side / a big image below.' },
          ]}
        />

        <h3>Hard limits inside one embed</h3>
        <Limits
          items={[
            { label: 'Title', value: '256', meta: 'characters' },
            { label: 'Description', value: '4,096', meta: 'characters' },
            { label: 'Fields', value: '25', meta: 'max per embed' },
            { label: 'Field name', value: '256', meta: 'characters' },
            { label: 'Field value', value: '1,024', meta: 'characters' },
            { label: 'Footer text', value: '2,048', meta: 'characters' },
            { label: 'Author name', value: '256', meta: 'characters' },
            { label: 'Total chars', value: '6,000', meta: 'across all text in one embed' },
            { label: 'Embeds per message', value: '10', meta: 'separate boxes' },
          ]}
        />

        <Callout label="Embed limit math" tone="note">
          <p>
            Even if each piece is under its limit, the embed fails if the
            <em> total characters across all text fields </em> goes over 6,000.
            Watch your descriptions when listing many items.
          </p>
        </Callout>

        <Example>
          <p>
            A weather bot replies with an embed: title "Tokyo, Japan", a
            description with the forecast, fields for "High", "Low", "Wind",
            and a small thumbnail with the weather icon. One message, looks
            great, fits inside the limits.
          </p>
        </Example>
      </>
    ),
  },

  {
    id: 'webhooks',
    title: 'Webhooks',
    heading: 'Webhooks: a no-bot way to send messages',
    lede: (
      <>
        A webhook is a special URL that posts messages into a single channel.
        No bot account needed. No code listening. Just hit the URL and a
        message appears.
      </>
    ),
    content: (
      <>
        <h3>Webhook vs Bot</h3>
        <Terms
          items={[
            { term: 'Bot', def: 'Two-way: receives events and sends messages. Lives in many servers. Has a token.' },
            { term: 'Webhook', def: 'One-way: send-only. Tied to one channel. Each webhook has its own URL. Simpler but limited.' },
          ]}
        />

        <h3>What webhooks are great for</h3>
        <ul>
          <li>Forwarding GitHub commits, deploys, or build results to a channel.</li>
          <li>Posting from systems where running a full bot is overkill (CI, cron jobs, alerts).</li>
          <li>Letting messages appear under any name and avatar you want, per message.</li>
        </ul>

        <Callout label="Treat webhook URLs as secrets" tone="warn">
          <p>
            Anyone who has the webhook URL can post anything to that channel.
            If a URL leaks, delete the webhook in channel settings and create
            a new one.
          </p>
        </Callout>

        <p>
          You can also turn a webhook into a "follower" of an{' '}
          <em>announcement channel</em>. Posts in the source server show up in
          your server too, no code involved.
        </p>
      </>
    ),
  },

  {
    id: 'sharding',
    title: 'Sharding',
    heading: 'Sharding: splitting a big bot across processes',
    lede: (
      <>
        When your bot grows past a few thousand servers, one process can't keep
        up. Sharding splits the load.
      </>
    ),
    content: (
      <>
        <p>
          A <strong>shard</strong> is one connection to Discord that handles a
          portion of all your servers. Discord groups servers across shards by
          their server ID. With four shards, each shard handles roughly a
          quarter of the servers.
        </p>

        <h3>When you need it</h3>
        <ul>
          <li>
            Discord <strong>requires</strong> sharding once your bot is in
            about <strong>2,500 servers</strong>. The Gateway will tell you
            the recommended shard count.
          </li>
          <li>
            Long before that, you might still want to shard for fault
            isolation. One crashed shard doesn't kill your whole bot.
          </li>
        </ul>

        <h3>Internal vs external sharding</h3>
        <Terms
          items={[
            { term: 'Internal sharding', def: 'One Node.js process runs many shards. Easy. Fine until you hit memory or CPU limits.' },
            { term: 'External sharding', def: 'Multiple processes (or machines) each run a few shards. More complex but scales further.' },
            { term: 'Cluster managers', def: 'Libraries like discord.js sharding manager handle spinning shards up across processes.' },
          ]}
        />

        <Callout label="Don't pre-optimize">
          <p>
            If your bot is in 50 servers, sharding is a distraction. Build
            features first. You'll know when you need to shard. Discord will
            literally tell you.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'rate-limits',
    title: 'Rate Limits',
    heading: 'Rate limits: how often you can hit the API',
    lede: (
      <>
        Discord limits how many requests you can send. Every API endpoint has
        its own bucket. If you go too fast, you get a 429 response and a
        "wait this many seconds" header.
      </>
    ),
    content: (
      <>
        <h3>Two layers</h3>
        <Terms
          items={[
            { term: 'Per-route bucket', def: 'Each endpoint, per server, has its own quota. Sending in #general is a different bucket from sending in #news.' },
            { term: 'Global rate limit', def: 'Across the whole bot, you can do roughly 50 API requests per second. Going over gets a global 429.' },
            { term: 'Gateway events', def: 'You can send up to 120 outbound gateway events per minute on a single shard (status updates, voice connects).' },
          ]}
        />

        <h3>Common rate-limited actions</h3>
        <ul>
          <li>Sending messages in the same channel</li>
          <li>Editing a message many times in a row</li>
          <li>Adding many reactions to a single message</li>
          <li>Editing a member's roles in a tight loop</li>
        </ul>

        <Callout label="Good libraries handle it">
          <p>
            Libraries like discord.js queue your requests and respect 429
            responses for you. You almost never have to write retry logic
            yourself.
          </p>
        </Callout>

        <h3>Invalid request limit</h3>
        <p>
          If your bot sends about <strong>10,000 invalid requests in 10
          minutes</strong> (401, 403, 429), Discord blocks the bot for an
          hour. Bad permissions and missing channels are the usual reason.
          Fix the actual error, don't just retry.
        </p>
      </>
    ),
  },

  {
    id: 'verification',
    title: 'Verification',
    heading: 'Verification and the 100-server cliff',
    lede: (
      <>
        Once your bot is in 100 servers, Discord wants to know who's behind it.
        Get verified before that point or your bot stops working as expected.
      </>
    ),
    content: (
      <>
        <h3>What changes at 100 servers</h3>
        <ul>
          <li>
            Privileged intents (Message Content, Server Members, Presence)
            <strong> stop working </strong> until your bot is verified.
          </li>
          <li>
            You cannot add the bot to new servers until verification is
            approved.
          </li>
          <li>
            You unlock the verified checkmark, the App Directory, and App
            Subscriptions for monetization.
          </li>
        </ul>

        <h3>What Discord asks for</h3>
        <Terms
          items={[
            { term: 'ID verification', def: 'A government ID for the developer who owns the application.' },
            { term: 'A description of the bot', def: 'What it does, how it uses each privileged intent, what data you store, how long, where.' },
            { term: 'A privacy policy and terms of service', def: 'Links to public pages.' },
            { term: 'Tags', def: 'Up to 5 categories so users can find you in the App Directory.' },
          ]}
        />

        <Callout label="Apply early" tone="note">
          <p>
            Verification can take days or weeks. Plan for it as soon as your
            bot has steady growth. Not on the day you cross 100 servers.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'limits-cheatsheet',
    title: 'Limits cheatsheet',
    heading: 'The numbers you keep forgetting',
    lede: (
      <>
        A quick reference. Keep this open while you build. It saves you from
        countless surprise errors.
      </>
    ),
    content: (
      <>
        <h3>Messages</h3>
        <Limits
          items={[
            { label: 'Message text', value: '2,000', meta: 'characters (4,000 with Nitro)' },
            { label: 'File upload', value: '10 MB', meta: 'free tier (up to 500 MB with boosts/Nitro)' },
            { label: 'Files per message', value: '10', meta: 'attachments' },
            { label: 'Reactions per message', value: '20', meta: 'unique emojis' },
            { label: 'Embeds per message', value: '10', meta: 'styled boxes' },
            { label: 'Pinned per channel', value: '50', meta: 'messages' },
          ]}
        />

        <h3>Servers and channels</h3>
        <Limits
          items={[
            { label: 'Servers a user can join', value: '200', meta: 'per account' },
            { label: 'Channels per server', value: '500', meta: 'text + voice' },
            { label: 'Categories per server', value: '50', meta: '' },
            { label: 'Roles per server', value: '250', meta: '' },
            { label: 'Roles per member', value: '~100', meta: 'practical limit' },
            { label: 'Server members', value: '500,000', meta: 'soft cap before community sharding kicks in' },
          ]}
        />

        <h3>Components</h3>
        <Limits
          items={[
            { label: 'Buttons per row', value: '5', meta: '' },
            { label: 'Rows per message', value: '5', meta: 'so 25 buttons max' },
            { label: 'Select menu options', value: '25', meta: '' },
            { label: 'Modals', value: '5 inputs', meta: 'per modal' },
          ]}
        />

        <h3>Slash commands</h3>
        <Limits
          items={[
            { label: 'Global commands', value: '100', meta: 'top-level' },
            { label: 'Guild commands', value: '100', meta: 'per server' },
            { label: 'Options per command', value: '25', meta: '' },
            { label: 'Choices per option', value: '25', meta: '' },
            { label: 'Auto-complete results', value: '25', meta: 'per response' },
          ]}
        />

        <h3>API behaviour</h3>
        <Limits
          items={[
            { label: 'Global API rate', value: '~50/s', meta: 'requests' },
            { label: 'Interaction reply', value: '3 s', meta: 'before deferring' },
            { label: 'Followup window', value: '15 min', meta: 'after deferring' },
            { label: 'Sharding required', value: '2,500', meta: 'servers' },
            { label: 'Verification required', value: '100', meta: 'servers' },
          ]}
        />
      </>
    ),
  },

  {
    id: 'monetization',
    title: 'Monetization',
    heading: 'Making money on Discord',
    lede: (
      <>
        Discord opened official monetization for developers. You can sell
        subscriptions and one-time purchases through their system, and they
        handle the payments.
      </>
    ),
    content: (
      <>
        <h3>App Subscriptions</h3>
        <p>
          Once your app is verified, you can create <strong>SKUs</strong>{' '}
          (products) inside the Developer Portal. There are two flavors:
        </p>
        <Terms
          items={[
            { term: 'User subscriptions', def: 'A user pays. Premium features follow them across every server they bring the bot to.' },
            { term: 'Server subscriptions', def: 'A server pays. Everyone in that server gets premium features.' },
            { term: 'One-time purchases', def: 'For unlocks like a special role, a unique cosmetic, or a credit pack.' },
          ]}
        />

        <h3>The numbers (good to know up front)</h3>
        <ul>
          <li>
            Discord takes a platform fee. Plan for roughly the same kind of
            cut Apple or Google take on their stores.
          </li>
          <li>
            Payouts come once your balance crosses a minimum, and there's a
            short hold period for refunds and chargebacks.
          </li>
          <li>
            Pricing is set in tiers picked from a list, not free-form. You
            can localize prices for different countries.
          </li>
        </ul>

        <h3>Premium app interactions</h3>
        <p>
          When a user runs a premium command without a subscription, you can
          send a special "Upgrade" button. Clicking it opens Discord's payment
          flow right inside the app. No external website needed.
        </p>

        <Callout label="Other ways people make money" tone="note">
          <p>
            Outside the official system: external donation links (Patreon,
            Ko-fi), selling roles in your own community, paid premium tiers
            handled with your own Stripe account, sponsorships from servers
            that want their brand mentioned. Mix and match.
          </p>
        </Callout>
      </>
    ),
  },

  {
    id: 'publishing',
    title: 'Publishing & growth',
    heading: 'Where to list your bot',
    lede: (
      <>
        Building the bot is half the work. Now people have to find it. Here's
        the playbook.
      </>
    ),
    content: (
      <>
        <h3>The official App Directory</h3>
        <p>
          When your bot is verified, it can show up in the App Directory inside
          Discord itself. This is the most trustworthy and visible place to
          be. Pick relevant tags, write a clear description, and add nice
          screenshots.
        </p>

        <h3>Community bot lists</h3>
        <ul>
          <li>
            <strong>top.gg</strong>. The biggest community list. Vote-based
            ranking. Many bots get most of their growth here.
          </li>
          <li>
            <strong>discord.bots.gg</strong>, <strong>discords.com</strong>,
            <strong> discordbotlist.com</strong>. Smaller but useful.
          </li>
          <li>
            <strong>r/discordapp</strong> on Reddit, plus subreddits for
            specific use cases (r/discordbots, r/discord).
          </li>
        </ul>

        <h3>Other growth channels</h3>
        <ul>
          <li>
            Build for a niche (a specific game, a job market, language
            learning). Generic bots have to fight giants.
          </li>
          <li>
            Open-source it. People pick bots they can audit and trust.
          </li>
          <li>
            Maintain a support server. Active help builds reputation.
          </li>
          <li>
            Document well. Good docs = fewer support tickets and better
            reviews.
          </li>
        </ul>

        <Callout label="What kills bots fast" tone="warn">
          <p>
            Going offline often, ignoring DM scams using your name,
            data leaks, and breaking changes that surprise users. Stability
            and trust matter more than features.
          </p>
        </Callout>
      </>
    ),
  },
]
