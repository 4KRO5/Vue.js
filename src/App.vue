<script setup>
import { ref } from 'vue'

const people = ref([])

const firstName = ref('')
const lastName = ref('')

const saveData = () => {
  if (firstName.value && lastName.value) {
    const person = {
      firstName: firstName.value,
      lastName: lastName.value
    }
    people.value.push(person)
    firstName.value = ''
    lastName.value = ''
  }
}
</script>

<template>
  <div class="container">
    <fieldset>
      <legend>Nombre(s):</legend>
      <input type="text" v-model="firstName" placeholder="Nombres">
      <input type="text" v-model="lastName" placeholder="Apellidos">
      <button @click="saveData">Save Data</button>
    </fieldset>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.firstName + person.lastName">
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>