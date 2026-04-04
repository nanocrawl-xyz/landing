# NanoCrawl

**An HTTP-native micropayment protocol for AI data access.**

Publishers set a price. AI agents pay per page. Humans browse for free.

> Built at ETHGlobal Cannes 2026 with Circle Nanopayments, x402 Protocol, and Arc Testnet.

**Live demo:** [nanocrawl.vercel.app](https://nanocrawl.vercel.app)
**Dashboard:** [nanocrawl.vercel.app/nanocrawl/dashboard](https://nanocrawl.vercel.app/nanocrawl/dashboard)

---

## The Problem

AI crawlers consume web content at industrial scale without compensation. The only options today are total blocking (losing value) or total openness (losing revenue). NanoCrawl is the middle ground: **every page has a price, every agent has a budget.**

## Architecture

```
AI Agent (Claude Code, Codex, custom)
    |  MCP protocol
MCP Server  (wallet, budget, receipts, proactive payment)
    |  HTTP + PAYMENT-SIGNATURE header
Circle Nanopayments  (gas-free USDC, EIP-3009, batch settlement)
    |  Gateway settle()
Publisher Middleware  (classify traffic -> 402 or pass-through)
    |  verify-and-serve
Publisher App  (content + dashboard + withdrawal)
```

**Two products:**

| Side | What | How |
|------|------|-----|
| **Agent (MCP Server)** | AI agents call `browse(url)` and get content back. Payment is automatic. | `@nanocrawl/mcp-server` — 5 tools via Model Context Protocol |
| **Publisher (Middleware)** | Any site adds middleware + config. Humans unaffected. Crawlers pay. | Next.js middleware + Circle Gateway settlement |

## Payment Flows

**Standard flow** (2 HTTP requests):
```
GET /products/1             -> 402 + PAYMENT-REQUIRED header
GET /products/1 + Payment-Signature  -> 200 + content
```

**Proactive flow** (1 HTTP request, 63% faster):
```
[parse robots.txt -> sign EIP-3009 locally]
GET /products/1 + Payment-Signature  -> 200 + content
```

The MCP server automatically uses proactive flow after the first request to a domain.

## Repository Structure

```
nanocrawl/
├── mcp-server/          MCP server (agent-side buyer)
│   ├── src/index.ts     5 MCP tools + proactive payment flow
│   └── src/test.ts      Integration test
├── web/                 Publisher app (Next.js 16 on Vercel)
│   ├── proxy.ts         Traffic classification + 402 responses
│   ├── lib/             x402, settlement, bot detection
│   ├── app/             Pages, API routes, dashboard
│   └── shared/          Types + Arc Testnet config
├── paidweb-demo/        Second publisher demo (article paywall)
└── landing/             This landing page
```

## Quick Start

### 1. MCP Server (Agent Side)

```bash
cd mcp-server
npm install
npm run build

# Test against the live demo site
NANOCRAWL_BUYER_PRIVATE_KEY=0x... npm test

# Connect to Claude Code
claude mcp add nanocrawl -- node /path/to/mcp-server/dist/index.js
```

**Environment variables:**
| Variable | Required | Description |
|----------|----------|-------------|
| `NANOCRAWL_BUYER_PRIVATE_KEY` | Yes | Agent's EVM private key (Arc Testnet) |
| `NANOCRAWL_AUTO_DEPOSIT` | No | USDC to auto-deposit into Gateway (default: 1) |
| `NANOCRAWL_BUDGET` | No | Spending cap in USDC (default: unlimited) |

### 2. Publisher App

```bash
cd web
npm install
cp .env.example .env.local  # fill in your seller wallet + private key
npm run dev
```

**Environment variables:**
| Variable | Required | Description |
|----------|----------|-------------|
| `NANOCRAWL_SELLER_WALLET` | Yes | Your EVM address to receive payments |
| `NANOCRAWL_SELLER_PRIVATE_KEY` | Yes | For withdrawals only (never sent to client) |
| `NANOCRAWL_DEFAULT_PRICE_USDC` | No | Price per page (default: 0.001) |

### 3. Fund Your Wallets

1. Go to [faucet.circle.com](https://faucet.circle.com)
2. Select **Arc Testnet**
3. Request USDC (for payments) and native tokens (for gas on deposit/withdrawal)

## MCP Tools

| Tool | Description |
|------|-------------|
| `browse(url)` | Pay for and retrieve content. Proactive flow if robots.txt cached. |
| `peek(url)` | Check price without paying. |
| `get_balance()` | Wallet + Gateway balance + session spend. |
| `get_receipts()` | All payments this session. |
| `set_budget(max)` | Spending cap. `browse()` refuses once exceeded. |

## On-Chain Interaction Points

| Moment | What | When |
|--------|------|------|
| **Deposit** | Agent deposits USDC into Circle Gateway | MCP server startup |
| **Nanopayments** | Off-chain EIP-3009 signatures (zero gas) | Every `browse()` call |
| **Withdrawal** | Merchant withdraws USDC on-chain | Dashboard "Withdraw" button |

Blockchain bookends the demo. The product magic (gasless micropayments) happens in the middle.

## Key Technical Decisions

- **x402 v2 with Circle Nanopayments** — same negotiation protocol as standard x402, but signed against `GatewayWalletBatched` EIP-712 domain for gas-free batched settlement.
- **`settle()` in the hot path** — Circle recommends calling settle directly (low latency, guaranteed settlement) rather than verify-then-settle.
- **Arc Testnet** — ~0.5s block time vs 13-19 min on other testnets. Deposits and withdrawals confirm instantly for the demo.
- **Proactive flow** — parse robots.txt once per domain, sign locally, skip the 402 round-trip. 63% faster at scale.

## Tech Stack

Circle Nanopayments, x402 Protocol (v2), Arc Testnet, Model Context Protocol, EIP-3009, EIP-712, USDC, Next.js 16, Vercel, viem, TypeScript

## License

MIT
