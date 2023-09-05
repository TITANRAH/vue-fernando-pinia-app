<script setup lang='ts'>
import { useCounterStore } from '@/stores/counter';


const counterStore = useCounterStore()

</script>

<template>
<h1>El valor es: {{ counterStore.count }}</h1>
<h4>El ultimo cambio fue: {{ counterStore.lastChange }}</h4>
</template>

<style>

</style>