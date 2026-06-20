import { Stack } from 'expo-router'
import { AwarizonProvider } from '@awarizon/react'
import { AwarizonWeb3 } from '@awarizon/web3'

export const awarizon = new AwarizonWeb3({
  chain: process.env.EXPO_PUBLIC_CHAIN ?? 'base',
  apiKey: process.env.EXPO_PUBLIC_AWARIZON_API_KEY!,
})

export default function RootLayout() {
  return (
    <AwarizonProvider awarizon={awarizon}>
      <Stack screenOptions={{ headerStyle: { backgroundColor: '#0a0a0a' }, headerTintColor: '#ededed' }} />
    </AwarizonProvider>
  )
}
