import { ref, onMounted } from 'vue'

export default function getTeams() {
  const teams = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const fetchteams = async () => {
    isLoading.value = true
    try {
      const response = await fetch('http://localhost:3000/teams')
      if (!response.ok) throw new Error('Erreurs de chargement')
        teams.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchteams)

  return { teams, isLoading, error }
}