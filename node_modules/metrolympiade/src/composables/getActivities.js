import { ref, onMounted } from 'vue'

export default function getActivities() {
  const activities = ref([])
  const isLoadingActivities = ref(true)
  const errorActivities = ref(null)

  const fetchactivities = async () => {
    isLoadingActivities.value = true
    try {
      const response = await fetch('http://localhost:3000/activities')
      if (!response.ok) throw new Error('Erreurs de chargement')
        activities.value = await response.json()
    } catch (err) {
      errorActivities.value = err.message
    } finally {
      isLoadingActivities.value = false
    }
  }

  onMounted(fetchactivities)

  return { activities, isLoadingActivities, errorActivities }
}