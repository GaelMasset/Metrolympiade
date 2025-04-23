import { ref, onMounted } from 'vue'

export default function getTeams() {
  const teams = ref([])
  const isLoadingTeams = ref(true)
  const errorTeams = ref(null)

  const fetchteams = async () => {
    isLoadingTeams.value = true
    try {
      const response = await fetch('http://localhost:3000/teams')
      if (!response.ok) throw new Error('Erreurs de chargement')
        teams.value = await response.json()
    } catch (err) {
      errorTeams.value = err.message
    } finally {
      isLoadingTeams.value = false
    }
  }

  onMounted(fetchteams)

  return { teams, isLoadingTeams, errorTeams }
}