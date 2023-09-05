import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const lastChange = ref<Date>();
  
  const incrementBy = (value: number) => {
    count.value += value;
    lastChange.value = new Date()
  }
  
  function increment() {
    incrementBy(1)
  }
  
  const squareCount = computed(() => count.value * count.value)
  
  return {
       count, 
       lastChange, 
       squareCount, 
       increment,
       incrementBy
  }
})
