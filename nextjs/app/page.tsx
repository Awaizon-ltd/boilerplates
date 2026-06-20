'use client'
import { ConnectButton, useWallet } from '@awarizon/react'

export default function Home() {
  const { address, isConnected, chainId, isChainMismatch } = useWallet()

  return (
    <main>
      <header>
        <h1>Awarizon Next.js Boilerplate</h1>
        <ConnectButton />
      </header>

      {isConnected ? (
        <div className="card">
          <p>
            Address <code>{address}</code>
          </p>
          <p>
            Chain ID <code>{chainId}</code>
          </p>
          {isChainMismatch && (
            <p className="warning">Wrong network — please switch chains.</p>
          )}
        </div>
      ) : (
        <p className="muted">Connect your wallet to get started.</p>
      )}
    </main>
  )
}
