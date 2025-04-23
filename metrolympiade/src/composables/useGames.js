import { ref, onMounted } from 'vue'
import getUser from '../composables/getUser.js'

export default function useMatches() {

    const matches = ref([])
    const isLoading = ref(true)
    const error = ref(null)

    const fetchMatches = async () => {
        isLoading.value = true;
        try{
            const token = getUser().token;
            await fetch("http://localhost:3000/matches/me",{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                matches.value = data;
                isLoading.value = false;

            console.log("test")
            });
        }catch(err){
            error.value = err.message
            console.log(error.value)
        }finally{
            isLoading.value = false
        }
    }

    onMounted(fetchMatches)

    return (matches, isLoading, error)
    
}