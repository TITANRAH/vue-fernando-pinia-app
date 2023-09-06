import clientsAPI from "@/api/clientsAPI";
import type { Client } from "../interfaces/client";
import { useQuery } from '@tanstack/vue-query';

const getClients = async():Promise<Client[]> => {

    const {data} = await clientsAPI.get<Client[]>('/clients?_page=1')

    return data;
}

const useClients = () => {

    return {

    }
}

export default useClients;