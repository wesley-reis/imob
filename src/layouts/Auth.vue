<template>
  <div class="flex justify-between bg-gray-900 text-white items-center h-screen overflow-hidden">
    <div
      class="
        flex
        justify-center
        flex-col
        items-center
        w-full
        lg:mt-0 lg:w-2/5
      "
    >
      <img src="../assets/images/favicon.png" class="w-16" alt="Imob Reis" />
     
      <router-view />

    </div>


  <div
    class="bg-white justify-center items-center w-3/5 h-screen hidden lg:flex"
  >
    <img
      src="../assets/images/bg_login.png"
      class="lg:w-3/4"
      alt="bem vindo ao imob"
    />
  </div>
  </div>

</template>

<script>
export default {
  name: "Auth",
};
</script>

<style>
</style>