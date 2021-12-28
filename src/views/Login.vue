<template>
  <h1 class="text-5xl text-gray-400 mt-4 mb-8">Login</h1>

<div class="w-5/6">

  <Input :label="'E-mail:'" :type="'email'" :id="'email'" :icon="'email'" :placeholder="'Informe seu e-mail'"/>

  <Input :label="'Senha:'" :type="'password'" :id="'password'" :icon="'password'" :placeholder="'Informe sua senha'"/>

  <button type="submit" class="bg-blue-600 w-full rounded-md p-4 font-medium text-lg hover:opacity-90">ENTRAR</button>

  <div class="text-gray-500 text-center mt-10">
    <p>Desenvolvido por WRRDeveloper</p>
    <p>&copy;{{ano}} - Todos os Direitos Reservados</p>
    <p class="text-green-700 mt-4 flex justify-center items-center gap-1">
      <img src="../assets/images/icons/whatsapp.png" class="w-4" alt="whatsapp">
      Precisa de Suporte?</p>
  </div>
  
 
</div>

</template>

<script>
import Input from "../components/input.vue";
export default {
  name: "Home",
  components: { Input },
  data(){
    return{
      ano: (new Date().getFullYear()),
    }
  },


};
</script>
