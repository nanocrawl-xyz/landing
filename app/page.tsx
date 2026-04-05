export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
      {/* Nav */}
      <nav className="flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">NanoCrawl</span>
        <div className="flex gap-4 text-sm">
          <a
            href="https://nanocrawl.vercel.app/products"
            className="text-gray-400 hover:text-white transition"
          >
            Demo
          </a>
          <a
            href="https://nanocrawl.xyz/nanocrawl"
            className="text-gray-400 hover:text-white transition"
          >
            Dashboard
          </a>
          <a
            href="https://github.com/nanocrawl-xyz"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="space-y-8 pt-8">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600/20 text-blue-400 text-xs font-mono px-3 py-1 rounded-full border border-blue-600/30">
            ETHGlobal Cannes 2026
          </span>
          <span className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full live-dot"></span>{" "}
            Live on Arc Testnet
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
          <span className="gradient-text">NanoCrawl</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          An HTTP-native micropayment protocol for AI data access.{" "}
          <span className="text-gray-200">
            Content providers set a price. AI agents pay per use{" "}
            <b className="underline decoration-blue-600 decoration-[5px] underline-offset-4">
              privately
            </b>
            . Humans browse for free.
          </span>
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://nanocrawl.xyz/nanocrawl"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center gap-2"
          >
            Live Dashboard
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="https://github.com/nanocrawl-xyz"
            className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-white/10"
          >
            View on GitHub
          </a>
          <a
            href="https://nanocrawl.vercel.app/products"
            className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-white/10"
          >
            Browse Demo Store
          </a>
        </div>
      </section>

      {/* The Pitch */}
      <section className="card p-8 md:p-10 space-y-4">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          The web is broken for AI. Publishers block crawlers and earn nothing.
          Crawlers scrape anyway and risk lawsuits. We built the payment layer in
          between.{" "}
          <strong className="text-white">
            An MCP server gives any AI agent a wallet
          </strong>{" "}
          to pay for web content.{" "}
          <strong className="text-white">
            A few lines of middleware lets any content provider set a price.
          </strong>{" "}
          Circle Nanopayments handle sub-cent, gas-free transactions. It is
          chain-agnostic across Arc and Base. The result: Claude researches a
          topic across paid sites, pays fractions of a cent per page, and the
          content provider withdraws real USDC on-chain.
          <br />
          <br />
          But every payment is a data point. Without privacy, an agent&apos;s wallet
          becomes a{" "}
          <strong className="text-white">public activity trail</strong>,
          revealing what it researches, which services it uses, and how much
          it&apos;s willing to pay. That&apos;s a competitive intelligence leak no
          company can afford.{" "}
          <strong className="text-white">
            NanoCrawl uses Unlink&apos;s ZK privacy pool
          </strong>{" "}
          to shield the agent&apos;s real identity: a fresh disposable wallet per
          session, permanently destroyed when the work is done.
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Architecture</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: flow diagram */}
          <div className="card p-8 space-y-0">
            <div className="flex items-center gap-3 pb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 text-lg font-bold">
                A
              </div>
              <div>
                <p className="font-semibold">AI Agent</p>
                <p className="text-xs text-gray-500">
                  Claude Code, Codex, custom
                </p>
              </div>
            </div>
            <div className="flow-line ml-5 pl-8 py-4">
              <span className="text-xs text-gray-500 font-mono">
                MCP protocol
              </span>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-lg font-bold">
                M
              </div>
              <div>
                <p className="font-semibold">MCP Server</p>
                <p className="text-xs text-gray-500">
                  wallet, budget, receipts, proactive payment
                </p>
              </div>
            </div>
            <div className="flow-line ml-5 pl-8 py-4 flex items-start gap-4">
              <span className="text-xs text-gray-500 font-mono">
                HTTP + PAYMENT-SIGNATURE
              </span>
              <div className="flex items-center gap-2 ml-4 bg-purple-600/10 border border-purple-600/20 rounded-lg px-3 py-1.5 -mt-0.5">
                <div className="w-5 h-5 rounded bg-purple-600/30 flex items-center justify-center text-purple-300 text-xs font-bold">
                  U
                </div>
                <div>
                  <p className="text-xs text-purple-300 font-semibold leading-none">
                    Unlink ZK
                  </p>
                  <p className="text-xs text-gray-500 leading-none mt-0.5">
                    ephemeral burner · identity shielded
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center text-green-400 text-lg font-bold">
                C
              </div>
              <div>
                <p className="font-semibold">Circle Nanopayments</p>
                <p className="text-xs text-gray-500">
                  gas-free USDC, EIP-3009, batch settlement
                </p>
              </div>
            </div>
            <div className="flow-line ml-5 pl-8 py-4">
              <span className="text-xs text-gray-500 font-mono">
                Gateway settle()
              </span>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="w-10 h-10 rounded-lg bg-orange-600/20 flex items-center justify-center text-orange-400 text-lg font-bold">
                P
              </div>
              <div>
                <p className="font-semibold">Content Provider Middleware</p>
                <p className="text-xs text-gray-500">
                  detect agents (user-agent, robots.txt), 402, verify, serve
                </p>
              </div>
            </div>
          </div>
          {/* Right: key metrics */}
          <div className="space-y-4">
            <div className="card p-6 space-y-2">
              <p className="text-3xl font-bold text-blue-400">$0.001</p>
              <p className="text-gray-500 text-sm">per page, gas-free</p>
            </div>
            <div className="card p-6 space-y-2">
              <p className="text-3xl font-bold text-green-400">0 gas</p>
              <p className="text-gray-500 text-sm">
                per payment — off-chain EIP-3009 signatures batched by Gateway.
                Sub-cent crawl economics only work at scale because there is no
                per-payment gas cost.
              </p>
            </div>
            <div className="card p-6 space-y-2">
              <p className="text-3xl font-bold text-purple-400">63%</p>
              <p className="text-gray-500 text-sm">
                faster with proactive flow — 1 HTTP request instead of 2
              </p>
            </div>
            <div className="card p-6 space-y-2">
              <p className="text-3xl font-bold text-orange-400">&lt;0.5s</p>
              <p className="text-gray-500 text-sm">
                Arc Testnet block time — deposits and withdrawals confirm
                instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Privacy */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Agent Identity is Private</h2>
        <div className="card p-8 md:p-10 space-y-6 border-purple-600/20">
          <p className="text-lg text-gray-300 leading-relaxed">
            An agent&apos;s wallet is its fingerprint. Every page it visits, every
            service it calls, every cent it spends is visible on-chain. That&apos;s
            not just a privacy problem —{" "}
            <strong className="text-white">
              it&apos;s a competitive intelligence leak.
            </strong>{" "}
            A company&apos;s AI agent reveals its research strategy, vendor choices,
            and budget to anyone watching.
          </p>
          <p className="text-gray-400 leading-relaxed">
            NanoCrawl uses{" "}
            <strong className="text-purple-300">
              Unlink&apos;s ZK privacy pool
            </strong>{" "}
            to create a fresh disposable wallet for each agent session. The real
            identity is shielded by a zero-knowledge proof on Base Sepolia —
            never linked to the burner on-chain. When the session ends, the
            wallet key is permanently destroyed. No history. No trace. No
            fingerprint.
          </p>
          {/* ZK flow diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div className="bg-purple-600/10 border border-purple-600/20 rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-purple-400 font-mono">
                Real Identity
              </p>
              <p className="text-xs text-gray-500">agent EOA</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-gray-300 font-mono">
                ZK Privacy Pool
              </p>
              <p className="text-xs text-gray-500">Unlink · Base Sepolia</p>
            </div>
            <div className="bg-blue-600/10 border border-blue-600/20 rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-blue-400 font-mono">Burner Wallet</p>
              <p className="text-xs text-gray-500">ephemeral EOA</p>
            </div>
            <div className="bg-green-600/10 border border-green-600/20 rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-green-400 font-mono">
                Payment + Destroy
              </p>
              <p className="text-xs text-gray-500">key gone forever</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 font-mono">
            Real identity → ZK proof (shielded) → burner wallet → payments → key
            destroyed
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-8 space-y-4">
            <div className="text-4xl font-bold text-blue-500/30">01</div>
            <h3 className="text-lg font-semibold">Price discovery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Content providers publish pricing in{" "}
              <code className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded text-xs">
                robots.txt
              </code>{" "}
              for proactive agents, or return{" "}
              <code className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded text-xs">
                HTTP 402
              </code>{" "}
              with a{" "}
              <code className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded text-xs">
                PAYMENT-REQUIRED
              </code>{" "}
              header on first contact. Either way the agent learns price,
              network, and recipient address.
            </p>
          </div>
          <div className="card p-8 space-y-4">
            <div className="text-4xl font-bold text-blue-500/30">02</div>
            <h3 className="text-lg font-semibold">
              Agent pays — one request
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              MCP server signs an off-chain EIP-3009 authorization (zero gas).{" "}
              <strong className="text-gray-200">Proactive flow:</strong> payment
              attached on the first request — no 402 round-trip.{" "}
              <strong className="text-gray-200">Reactive flow:</strong> retries
              after the 402 with a{" "}
              <code className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded text-xs">
                PAYMENT-SIGNATURE
              </code>{" "}
              header.
            </p>
          </div>
          <div className="card p-8 space-y-4">
            <div className="text-4xl font-bold text-blue-500/30">03</div>
            <h3 className="text-lg font-semibold">Content delivered</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Circle Gateway verifies the signature and locks funds. Content
              provider sees revenue on the dashboard in real time.{" "}
              <strong className="text-gray-200">
                Withdraw with one click
              </strong>{" "}
              — real USDC on-chain via Arc or cross-chain via CCTP.
            </p>
          </div>
        </div>
      </section>

      {/* Two Products */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Two Products, Two Sides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-8 space-y-4 border-blue-600/30">
            <div className="text-sm font-mono text-blue-400">Agent Side</div>
            <h3 className="text-xl font-semibold">MCP Server</h3>
            <p className="text-gray-400 text-sm">
              Any AI agent connects via MCP. Calls{" "}
              <code className="text-blue-400">browse(url)</code> and gets
              content back. Payment happens automatically — the agent never
              touches private keys or knows about x402.
            </p>
            <div className="space-y-1 text-sm text-gray-500 font-mono">
              <p>
                <span className="text-gray-300">browse(url)</span> — pay and
                fetch
              </p>
              <p>
                <span className="text-gray-300">peek(url)</span> — check price
              </p>
              <p>
                <span className="text-gray-300">get_balance()</span> — check
                funds
              </p>
              <p>
                <span className="text-gray-300">set_budget(max)</span> —
                spending cap
              </p>
              <p>
                <span className="text-gray-300">get_receipts()</span> — payment
                log
              </p>
              <p>
                <span className="text-purple-400">unlink_status()</span> —
                privacy mode on/off
              </p>
              <p>
                <span className="text-purple-400">close_session()</span> —
                destroy burner key
              </p>
            </div>
          </div>
          <div className="card p-8 space-y-4 border-green-600/30">
            <div className="text-sm font-mono text-green-400">
              Publisher Side
            </div>
            <h3 className="text-xl font-semibold">Middleware + Dashboard</h3>
            <p className="text-gray-400 text-sm">
              Any Next.js site adds middleware + config. Humans see the site as
              usual. AI crawlers get a 402 with the price. Revenue appears on a
              live dashboard. Withdraw earnings with one click.
            </p>
            <div className="space-y-1 text-sm text-gray-500">
              <p>
                <span className="text-gray-300">Traffic classification</span> —
                human vs. crawler
              </p>
              <p>
                <span className="text-gray-300">x402 402 responses</span> —
                machine-readable pricing
              </p>
              <p>
                <span className="text-gray-300">Circle Gateway settle</span> —
                instant verification
              </p>
              <p>
                <span className="text-gray-300">SSE dashboard</span> — real-time
                revenue
              </p>
              <p>
                <span className="text-gray-300">CCTP withdrawal</span> — 6
                chains supported
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Built With</h2>
        <div className="flex flex-wrap gap-3">
          <span className="card px-4 py-2 text-sm text-gray-300">
            Circle Nanopayments
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">
            x402 Protocol (v2)
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">
            Arc Testnet
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">Redis</span>
          <span className="card px-4 py-2 text-sm text-purple-300">
            Unlink ZK Privacy
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">
            Base Sepolia
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">
            Model Context Protocol
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">
            EIP-3009
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">
            EIP-712
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">USDC</span>
          <span className="card px-4 py-2 text-sm text-gray-300">
            Next.js 16
          </span>
          <span className="card px-4 py-2 text-sm text-gray-300">Vercel</span>
          <span className="card px-4 py-2 text-sm text-gray-300">viem</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-10 pb-6 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
        <p>NanoCrawl — ETHGlobal Cannes 2026</p>
        <div className="flex gap-6">
          <a
            href="https://nanocrawl.xyz"
            className="hover:text-white transition"
          >
            Demo
          </a>
          <a
            href="https://nanocrawl.xyz/nanocrawl"
            className="hover:text-white transition"
          >
            Dashboard
          </a>
          <a
            href="https://github.com/nanocrawl-xyz"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
