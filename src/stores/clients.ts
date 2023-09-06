import { ref } from "vue";
import { defineStore } from "pinia";
import type { Client } from "@/clients/interfaces/client";

export const useClientStore = defineStore("client", () => {
  // currentPage en que pagina estoy
  const currentPage = ref<number>(0);
  const totalPage = ref<number>(5);
  const clients = ref<Client[]>([]);

  const setClients = (newClients : Client[]) => {
    clients.value = newClients;
  }

  const setPage = (page: number) => {
    // si la pagina que envio de argumento es igual a la pagina en que estoy (currentpage)
    // no hagas nada retorna
    if (currentPage.value === page) {
        return
    } 
    // si pasa la validacion la pagina en la que estoy es igual al argumento page
        currentPage.value = page
 
  }

  return {
    currentPage,
    totalPage,
    clients,
    setClients,
    setPage
  };
});
