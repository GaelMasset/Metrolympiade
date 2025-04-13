import { ref, onMounted } from 'vue'

export default function useLeaderboard() {
  const leaderboard = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const fetchleaderboard = async () => {
    isLoading.value = true
    try {
      const response = await fetch('http://localhost:3000/ranking')
      if (!response.ok) throw new Error('Erreur de chargement')
      leaderboard.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchleaderboard)

  return { leaderboard, isLoading, error }
}
