<template>
  <div class="App">
    <header class="App-header">
      <div class="flex-container">
        <section class="form-register">
          <h4>Formulario Registro</h4>
          <form @submit.prevent="handleFormSubmit">
            <input class="controls" type="text" name="nombres" placeholder="Ingrese su Nombre"
              v-model="formData.nombres" />
            <input class="controls" type="text" name="apellidoPaterno" placeholder="Ingrese su Apellido Paterno"
              v-model="formData.apellidoPaterno" />
            <input class="controls" type="text" name="apellidoMaterno" placeholder="Ingrese su Apellido Materno"
              v-model="formData.apellidoMaterno" />
            <input class="controls" type="text" name="teléfono" placeholder="Ingrese su Teléfono"
              v-model="formData.teléfono" />
            <button class="botones" type="submit">{{ isEditing ? 'Guardar Cambios' : 'Registrar' }}</button>
            <button class="botones" type="button" @click="isEditing ? cancelEdit() : resetForm">
              {{ isEditing ? 'Cancelar' : 'Limpiar' }}
            </button>
          </form>
          <p v-if="error" style="color: red">{{ error }}</p>
          <button class="botones" @click="logout">Cerrar Sesión</button>
        </section>
        <Table :data="tableData" @delete="handleDeleteRecord" />
      </div>
    </header>
  </div>
</template>
  
<script src="./RegistroScript"></script>
  
<style src="src/assets/main.css"></style>