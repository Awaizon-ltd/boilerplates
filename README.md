# awarizon-boilerplates

Minimal, unopinionated starting points for building with the [Awarizon Web3 SDK](https://awarizon.com/docs). Clone the one that fits your stack, wire in your API key, and build.

## Boilerplates

| Directory | Stack | Description |
|-----------|-------|-------------|
| [`nextjs/`](./nextjs) | Next.js 14 App Router + TypeScript | `AwarizonProvider` in layout, `ConnectButton` in header, `useWallet` example |
| [`vite-react/`](./vite-react) | Vite 5 + React 18 + TypeScript | `AwarizonProvider` in `main.tsx`, wallet state display in `App.tsx` |
| [`expo/`](./expo) | Expo SDK 51 + Expo Router | `useRNWallet` with `expo-secure-store` key persistence |

## Quick start

```bash
# Pick a boilerplate
cd nextjs        # or vite-react / expo

# Install dependencies
npm install      # or pnpm / yarn

# Set up environment
cp .env.example .env.local
# Fill in AWARIZON_API_KEY and WC_PROJECT_ID

# Run
npm run dev
```

## SDK packages used

| Package | Version | Role |
|---------|---------|------|
| `@awarizon/web3` | ^1.3.0 | Core SDK — `AwarizonWeb3` instance |
| `@awarizon/react` | ^1.4.0 | React hooks + `AwarizonProvider`, `ConnectButton` |
| `@awarizon/react-native` | ^1.0.2 | Expo hook `useRNWallet` + secure key storage |

## Links

- [Docs](https://awarizon.com/docs)
- [API key dashboard](https://awarizon.com/dashboard/api-keys)
- [WalletConnect project ID](https://cloud.walletconnect.com)
- [Templates repo](https://github.com/awarizon/awarizon-templates)
