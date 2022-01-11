<template>
  <div
    class="
      z-10
      fixed
      bg-blue-1000
      w-full
      flex
      justify-between
      items-center
      py-2
      lg:px-32
      text-xs
      font-light
      text-gray-200
    "
  >
    <p class="hidden lg:flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        />
      </svg>
      Avenida João Daher, 0 - Centro, Lagoa Santa/MG
    </p>
    <p class="hidden lg:flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clip-rule="evenodd"
        />
      </svg>
      Seg/Sex: 09:00h - 18:00h Sáb/Dom: Plantão
    </p>
    <p class="hidden lg:flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
        />
      </svg>
      +55 (31) 3465-1234
    </p>
    <p class="flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
        />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
      contato@minhaimob.com.br
    </p>
  </div>

  <nav class="bg-white pt-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <router-link :to="{ name: 'index' }">
          <img
            src="../../assets/images/logo.png"
            alt="imobiliaria"
            class="w-3/6 md:w-2/5"
          />
        </router-link>

        <div
          @click="showMenu = !showMenu"
          class="absolute inset-y-0 right-0 flex items-center md:hidden"
        >
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-blue-900
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              v-if="!showMenu"
              class="block h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              v-if="showMenu"
              class="block h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Menu Web -->
        <div class="flex-1 flex items-center justify-end md:items-stretch">
          <div class="hidden md:block md:ml-6">
            <div id="nav" class="flex space-x-4 text-base font-normal">
              <router-link
              @click="close"
                class="hover:text-blue-600 px-3 py-2"
                :to="{ name: 'index' }"
                >Home</router-link
              >
              <router-link
                class="hover:text-blue-600 px-3 py-2"
                :to="{ name: 'propertie', params: { name: 'imovel-no-joa' } }"
                >Destaque</router-link
              >
              <router-link
                class="hover:text-blue-600 px-3 py-2"
                :to="{ name: 'rent' }"
                >Alugar</router-link
              >
              <router-link
                class="hover:text-blue-600 px-3 py-2"
                :to="{ name: 'sale' }"
                >Comprar</router-link
              >
              <router-link
                class="hover:text-blue-600 px-3 py-2"
                :to="{ name: 'contact' }"
                >Contato</router-link
              >
            </div>
          </div>
        </div>
        <!-- End Menu Web -->
      </div>
    </div>

    <!-- Mobile menu, show/hide -->
    <div
      :class="showMenu ? 'flex' : 'hidden'"
      class="md:hidden"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 text-base font-normal z-10 bg-gray-50 w-full">
        <div id="nav" class="flex flex-col">
          <router-link @click="close"
            class="hover:text-blue-600 px-3 py-2"
            :to="{ name: 'index' }"
            >Home</router-link
          >
          <router-link
          @click="close"
            class="hover:text-blue-600 px-3 py-2"
            :to="{ name: 'propertie', params: { name: 'imovel-no-joa' } }"
            >Destaque</router-link
          >
          <router-link
          @click="close"
            class="hover:text-blue-600 px-3 py-2"
            :to="{ name: 'rent' }"
            >Alugar</router-link
          >
          <router-link
          @click="close"
            class="hover:text-blue-600 px-3 py-2"
            :to="{ name: 'sale' }"
            >Comprar</router-link
          >
          <router-link
          @click="close"
            class="hover:text-blue-600 px-3 py-2"
            :to="{ name: 'contact' }"
            >Contato</router-link
          >
        </div>
      </div>
    </div>
    <!-- End Menu Mobile -->
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    close(){
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
.bg-blue-1000 {
  background: #16163f;
}

.bg-blue-base {
  background: #003b6a;
}

#nav a.router-link-exact-active {
  color: #2563ee;
  background: #FFFFFF;
}
</style>