<template>
  <div class="container">
    <div class="language-select">
      <label for="language"> {{ language.selectLanguage }} </label>
      <select id="language" v-model="currentLanguage" @change="changeLanguage(currentLanguage)">
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>

    <fieldset>
      <legend>{{ language.login }}</legend>
      <input type="email" v-model="email" :placeholder="language.email">
      <input type="password" v-model="password" :placeholder="language.password">
      <button @click="login">{{ language.loginButton }}</button>
      <p v-if="error" class="error-message">{{ language.errorMessage }}</p>
    </fieldset>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
const error = ref(false)

const currentLanguage = ref('en')

import languageData from './language.json'

const changeLanguage = (language) => {
  currentLanguage.value = language
}

const language = computed(() => {
  return languageData[currentLanguage.value]
})

const login = async () => {
  try {
    const response = await fetch('src/users.json')
    const userData = await response.json()

    const foundUser = userData.find(user => {
      return email.value === user.email && password.value === user.password
    })

    if (foundUser) {
      alert(`${language.value.welcome} ${foundUser.name}`);
      localStorage.setItem('user_data', JSON.stringify(foundUser))
      error.value = false
    } else {
      error.value = true
    }
  } catch (e) {
    console.error(`${language.value.error}`, e);
    error.value = true
  }
}
</script>