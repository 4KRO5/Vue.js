<script setup>
import { ref } from 'vue'

const count = ref(0)
const name = ref('')
const num1 = ref()
const num2 = ref()
const resultado = ref()

function incrementCount() {
  count.value++
}

function sumar() {
  resultado.value = num1.value + num2.value
}
</script>

<template>
  <div class="container">
    <!-- Contador de clicks -->
    <fieldset>
      <legend>Contador de clicks</legend>
      <button @click="incrementCount">No. Clicks: {{ count }}</button>
    </fieldset>
    <br>

    <!-- v-model -->
    <fieldset>
      <legend>Bienvenido {{ name }}</legend>
      <input type="text" v-model="name" placeholder="Escribe aquí tu nombre">
    </fieldset>
    <br>

    <!-- Suma de numeros -->
    <fieldset>
      <legend>Suma de numeros</legend>
      <input type="number" v-model="num1" placeholder="Primer número">
      <input type="number" v-model="num2" placeholder="Segundo número">
      <button @click="sumar">Sumar</button>
      <h4>Resultado: {{ resultado }}</h4>
    </fieldset>
  </div>
</template>