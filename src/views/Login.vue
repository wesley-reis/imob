<template>

  <h1 class="text-5xl text-gray-400 mt-4 mb-8">Login</h1>

  <div class="w-5/6">
    <Input
      :label="'E-mail:'"
      :type="'email'"
      :name="'email'"
      :placeholder="'Informe seu e-mail'"
      :error="error=='email'"
    >
      <img src="../assets/images/icons/email.png" class="w-5" alt="mail" />
    </Input>

    <Input
      :label="'Senha:'"
      :type="'password'"
      :name="'password'"
      :placeholder="'Informe sua senha'"
       :error="error=='password'"
    >
      <img
        src="../assets/images/icons/password.png"
        class="w-4"
        alt="password"
      />
    </Input>

    <button
    @click="showAlert"
      type="submit"
      class="
        bg-blue-600
        w-full
        rounded-md
        p-4
        font-medium
        text-lg
        hover:opacity-90
        flex justify-center item-center
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
      ENTRAR
    </button>

    <div class="text-gray-500 text-center mt-10">
      <p>Desenvolvido por WRRDeveloper</p>
      <p>&copy;{{ ano }} - Todos os Direitos Reservados</p>

      <a
        href="https://wa.me/+5531986783545?text=Ola! estou com problemas para logar."
        target="_black"
        class="text-green-700 mt-4 flex justify-center items-center gap-1"
      >
        <img
          src="../assets/images/icons/whatsapp.png"
          class="w-4"
          alt="whatsapp"
        />
        Precisa de Suporte?
      </a>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue';
export default {
  name: "Home",
  components: {Input},
  data() {
    return {
      ano: new Date().getFullYear(),
      error:null,
    };
  },
  mounted(){
     this.error = 'password'
  },
  methods:{
    showAlert(){
      window.Toast.fire({text:"Dados cadastrados com sucesso", icon:"success"})
    }
  }


};
</script>
<style>
  .swal2-toast{
    width: 100%;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }
</style>
