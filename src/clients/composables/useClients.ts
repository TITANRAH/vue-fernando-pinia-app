import clientsAPI from "@/api/clientsAPI";
import type { Client } from "../interfaces/client";
import { useQuery } from '@tanstack/vue-query';
import { useClientStore } from "@/stores/clients";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const getClients = async():Promise<Client[]> => {

    const {data} = await clientsAPI.get<Client[]>('/clients?_page=1')
    
    console.log(data, 'data')
    
    return data;
}

const useClients = () => {
    
    // dentro del composable llamo a mi store
    const store = useClientStore();

    const {currentPage, clients, totalPage} = storeToRefs(store)

    const {isLoading, data } = useQuery(
        ['clients?page=', 1],
        () => getClients(),
    )

    // ASI RELACIONO MI VARIABLE REACTIVA DE CLIENTES CON LA DATA QUE GENERO ACA EN EL COMPOSABLE
    // VUEQUERY GENERA LA FUNCIONALIDAD DE TRAERME LA DATA MEDIANTE LA FUNCION GETCLIENTS 
    // DESTRUCTURO LOS PARAMETROS QUE TRAE USEQUERY Y LLAMO A LOS CLIENTES 
    // EL WATCH ESTARA ATENTO A LA DATA RESULTANTE DE LA PERTICION HTTP 
    // Y LLAMO AL STORE , Y USO MI FUNCION DEL STORE QUE LLENA LA VARIABLE REACTIVA 
    // QUE VIVE EN EL STORE Y DESDE EL COMPOSABLE RETORNO CLIENTS QUE VIENE DESDE EL STORE 
    watch(data, (clients) => {
        if(clients)
            store.setClients(clients)
    })

    return {
        isLoading,
        clients
        
     
    }
}

export default useClients;