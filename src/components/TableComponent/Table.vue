<template>
  <div class="table-container">
    <h4>Tabla de Registros</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in data" :key="index">
          <td>{{ record.nombres }}</td>
          <td>{{ record.apellidoPaterno }}</td>
          <td>{{ record.apellidoMaterno }}</td>
          <td>{{ record.teléfono }}</td>
          <td>
            <button class="edit-button" @click="editRecord(index)">Editar</button>
            <button class="delete-button" @click="deleteRecord(index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script src="./TableScript"></script>
  
<style src="src/assets/main.css"></style>