async function loadDataFromJsonFile() {
  try {
    const response = await fetch('/src/components/RegistroComponent/DatosPruba.json');
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error al cargar los datos desde el archivo JSON:', error);
    return [];
  }
}

let tableData = await loadDataFromJsonFile();

// function saveDataToLocalStorage(data) {
//   localStorage.setItem('registros', JSON.stringify(data));
// }

// function loadDataFromLocalStorage() {
//   const jsonData = localStorage.getItem('registros');
//   return jsonData ? JSON.parse(jsonData) : [];
// }

// let tableData = loadDataFromLocalStorage();

import Table from '../TableComponent/Table.vue';

export default {
  data() {
    return {
      formData: {
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        teléfono: '',
      },
      tableData: tableData,
      error: '',
      isEditing: false,
      editIndex: -1,
    };
  },
  methods: {
    isAlphaWithSpacesAndAccents(value) {
      return /^[A-Za-záéíóúñÁÉÍÓÚÑ\s]+$/.test(value);
    },
    isNumeric(value) {
      return /^[0-9]{10}$/.test(value);
    },
    handleFormSubmit() {
      if (
        this.formData.nombres.trim() === '' ||
        this.formData.apellidoPaterno.trim() === '' ||
        this.formData.apellidoMaterno.trim() === '' ||
        this.formData.teléfono.trim() === ''
      ) {
        this.error = 'Todos los campos deben estar llenos.';
        return;
      }

      if (!this.isAlphaWithSpacesAndAccents(this.formData.nombres)) {
        this.error = 'El campo "Nombre" debe contener solo letras, espacios y tildes.';
        return;
      }

      if (!this.isAlphaWithSpacesAndAccents(this.formData.apellidoPaterno)) {
        this.error = 'El campo "Apellido Paterno" debe contener solo letras, espacios y tildes.';
        return;
      }

      if (!this.isAlphaWithSpacesAndAccents(this.formData.apellidoMaterno)) {
        this.error = 'El campo "Apellido Materno" debe contener solo letras, espacios y tildes.';
        return;
      }

      if (!this.isNumeric(this.formData.teléfono)) {
        this.error = 'El campo "Teléfono" debe contener exactamente 10 números.';
        return;
      }

      if (this.isEditing) {
        this.tableData[this.editIndex] = { ...this.formData };
      } else {
        const newRecord = { ...this.formData };
        this.tableData.push(newRecord);
      }

      this.resetForm();
      this.isEditing = false;
    },
    logout() {
      localStorage.removeItem('isLoggedIn');
      this.isLoggedIn = false;
      location.reload();
    },
    resetForm() {
      this.formData.nombres = '';
      this.formData.apellidoPaterno = '';
      this.formData.apellidoMaterno = '';
      this.formData.teléfono = '';
      this.error = '';
      this.isEditing = false;
    },
    handleDeleteRecord(index) {
      this.tableData.splice(index, 1);
    },
    editRecord(index) {
      this.isEditing = true;
      this.editIndex = index;
      const record = this.tableData[index];
      this.formData.nombres = record.nombres;
      this.formData.apellidoPaterno = record.apellidoPaterno;
      this.formData.apellidoMaterno = record.apellidoMaterno;
      this.formData.teléfono = record.teléfono;
    },
    cancelEdit() {
      this.isEditing = false;
      this.resetForm();
    },
  },
  components: {
    Table,
  },
};