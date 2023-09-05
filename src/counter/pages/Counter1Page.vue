<script setup lang='ts'>

import { useCounterStore } from '@/stores/counter';
import CounterOptionValue from '../components/CounterOptionValue.vue';

const countStore = useCounterStore()

</script>

<template>


<h1>Pinia Setup</h1>

<h4>Counter: {{ countStore.count }}</h4>
<h4>Square: {{ countStore.squareCount }}</h4>

<br>

<button @click="countStore.increment"> +1 </button>
<button @click="countStore.incrementBy(2)"> +2 </button>
<button @click="countStore.incrementBy(5)"> +5 </button>
<button @click="countStore.$reset()"> Reset </button>

<br>

<CounterOptionValue/>



</template>

<style>

</style>