import { ref, onMounted } from 'vue'

export default function useMatches() {

    const matches = ref([])
    const isLoading = ref(true)
    const error = ref(null)

    const fetchMatches = async () => {
        isLoading.value = true;
        try{
        const response = await fetch("http://localhost:3000/matches/me");
        if (!response.ok) throw new Error('Erreur de chargement')
        response
        .then((response) => response.json())
        .then((data) => {
            matches.value = data;
            isLoading.value = false;
        });
        }catch(err){
            error.value = err.message
        }finally{
            isLoading.value = false
        }
    }

    onMounted(fetchMatches)

    return (matches, isLoading, error)
    
}