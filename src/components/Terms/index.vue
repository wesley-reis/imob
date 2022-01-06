<template>
  <div
  id="terms"
    class="fixed sm:flex justify-between items-center text-sm bottom-20 left-5 z-30 bg-black bg-opacity-75 p-5 gap-5 w-11/12 sm:w-4/6"
  >
    <h1 class="text-gray-50 mb-4 sm:mb-0">
      Nós usamos cookies para oferecer a melhor experiência possível em nosso
      site. Para saber mais, visite nossa <a href="#" class="text-blue-400">Política de Privacidade</a>. Ao continuar a
      usar este site ou ao fechar esta caixa, você concorda com o uso de
      cookies.
    </h1>
    <button @click="close" class="border border-blue-600 w-full sm:w-auto px-4 py-1 rounded-md text-gray-50 hover:bg-sky-800 hover:border-gray-100">OK</button>
  </div>
</template>

<script>
export default {
  name: "Terms",

   
  mounted() {
      var terms = document.getElementById("terms")
      terms.style.display = "none"
      setTimeout(()=> {
         terms.style.display = "flex"
      }, 3000)
  },
  methods: {
      close()
      {
         document.getElementById("terms").style.display = "none"

      }
  }
};
</script>

<style scoped>

</style>