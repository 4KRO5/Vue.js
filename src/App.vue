<template>
  <div id="app">
    <main>
      <LoginComponent />
    </main>
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent/Login.vue';

export default {
  components: {
    LoginComponent,
  },
};
</script>