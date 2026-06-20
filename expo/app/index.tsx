import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from 'react-native'
import * as ExpoSecureStore from 'expo-secure-store'
import { useRNWallet, createSecureStorage } from '@awarizon/react-native'
import { awarizon } from './_layout'

const storage = createSecureStorage(ExpoSecureStore)

export default function HomeScreen() {
  const { address, isConnected, isLoading, create, deleteWallet } = useRNWallet({
    awarizon,
    storage,
  })

  async function handleCreate() {
    try {
      await create()
    } catch (e) {
      Alert.alert('Error', String(e))
    }
  }

  async function handleDelete() {
    Alert.alert('Delete Wallet', 'This will permanently remove your wallet from this device.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteWallet() },
    ])
  }

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color="#ededed" />
        <Text style={styles.muted}>Restoring wallet…</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Awarizon Expo Boilerplate</Text>

      {isConnected ? (
        <View style={styles.card}>
          <Text style={styles.label}>Connected Address</Text>
          <Text style={styles.address}>{address}</Text>
          <TouchableOpacity style={styles.dangerBtn} onPress={handleDelete}>
            <Text style={styles.dangerBtnText}>Delete Wallet</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.muted}>No wallet yet.</Text>
          <TouchableOpacity style={styles.btn} onPress={handleCreate}>
            <Text style={styles.btnText}>Create Wallet</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#0a0a0a' },
  center:    { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, backgroundColor: '#0a0a0a' },
  title:     { fontSize: 20, fontWeight: '600', color: '#ededed', marginBottom: 24, marginTop: 48 },
  card:      { backgroundColor: '#111', borderRadius: 12, padding: 20, gap: 14, borderWidth: 1, borderColor: '#1e1e1e' },
  label:     { fontSize: 11, color: '#555', textTransform: 'uppercase', letterSpacing: 0.8 },
  address:   { fontSize: 13, color: '#ededed', fontFamily: 'monospace' },
  muted:     { color: '#555', fontSize: 14, marginBottom: 4 },
  btn:       { backgroundColor: '#2563eb', borderRadius: 8, padding: 14, alignItems: 'center' },
  btnText:   { color: '#fff', fontWeight: '600', fontSize: 15 },
  dangerBtn: { backgroundColor: '#1a1a1a', borderRadius: 8, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: '#3f1a1a' },
  dangerBtnText: { color: '#ef4444', fontWeight: '600', fontSize: 15 },
})
