<template>


  <div class="grid grid-cols-12">
      <!-- Menu Lateral Web -->
    <div class="hidden md:grid md:relative md:col-span-2 bg-gray-900 h-screen overflow-hidden text-gray-300 text-sm">
      <Menu/>
    </div>

    <!-- Menu Mobile -->
    <div v-if="isClose" @click="isClose = !isClose" class="w-full h-screen bg-black bg-opacity-25 z-10 absolute overflow-hidden text-gray-300 text-sm">
        <div class="w-1/2 bg-sky-900 h-screen z-20">
            <Menu/>
        </div>
    </div>
    <!-- Menu Top -->
    <div class="col-span-12 md:col-span-10">
      <div
        class="bg-white shadow-md flex justify-start gap-6 md:justify-between items-center px-7 py-3"
      >
        <button @click="isClose = !isClose" class="md:hidden bg-sky-700 hover:opacity-90 px-2 py-1 text-gray-50 rounded-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <router-link :to="{name:'dash'}" class="flex justify-start items-stretch text-2xl text-gray-400 transition ease-in-out delay-75  hover:translate-x-2 duration-300">
             <img
            src="../../assets/images/favicon.png"
            alt="Imob"
            class="w-7 mr-2"
          />
           Imob<b>Admin</b>
        </router-link>
       
        <a

          class="
            hidden
            text-red-600 text-sm
            font-semibold
            md:flex
            justify-start
            items-center
          "
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Sair</a
        >
      </div>

      <div class="p-5"><slot/></div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue';
export default {
  components: { Menu },
    name:"Header",
    data() {
        return{
            isClose:false,
        }
    }
};
</script>

<style>
</style>