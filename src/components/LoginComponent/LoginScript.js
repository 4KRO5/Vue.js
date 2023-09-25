import RegistroComponent from '../RegistroComponent/Registro.vue';

export default {
  components: {
    RegistroComponent,
  },
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      loginError: null,
      isLoggedIn: false,
      tableData: []
    };
  },
  created() {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedLoggedIn === 'true') {
      this.isLoggedIn = true;
    }
  },
  methods: {
    handleLoginFormSubmit() {
      if (this.formData.email === 'root' && this.formData.password === '123') {
        this.isLoggedIn = true;
        this.loginError = null;

        localStorage.setItem('isLoggedIn', 'true');
      } else {
        this.loginError = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
      }
    },  
  }
};