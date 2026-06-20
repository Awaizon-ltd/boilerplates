import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AwarizonProvider } from '@awarizon/react'
import { AwarizonWeb3 } from '@awarizon/web3'
import App from './App'
import './index.css'

const awarizon = new AwarizonWeb3({
  chain: import.meta.env.VITE_CHAIN ?? 'base',
  apiKey: import.meta.env.VITE_AWARIZON_API_KEY,
  walletConnectProjectId: import.meta.env.VITE_WC_PROJECT_ID,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AwarizonProvider awarizon={awarizon}>
      <App />
    </AwarizonProvider>
  </StrictMode>,
)
