<template>
  <div class="App">
    <header class="App-header">
      <div class="flex-container">
        <section v-if="!isLoggedIn" class="form-register">
          <h4>Formulario de Inicio de Sesión</h4>
          <form @submit.prevent="handleLoginFormSubmit">
            <input class="controls" type="text" name="email" placeholder="Ingrese su EMail" v-model="formData.email" />
            <input class="controls" type="password" name="password" placeholder="Ingrese su Password"
              v-model="formData.password" />
            <button class="botones" type="submit">Iniciar Sesión</button>
          </form>
          <p v-if="loginError" style="color: red">{{ loginError }}</p>
        </section>
        <RegistroComponent v-else />
        <Table :data="tableData" @delete="handleDeleteRecord" />
      </div>
    </header>
  </div>
</template>

<script src="./LoginScript"></script>

<style src="src/assets/main.css"></style>