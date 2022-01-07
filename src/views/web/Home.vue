<template>
  <MainSlider />
  <!-- Search -->
  <div class="container mx-auto py-10 px-5 sm:px-14 md:px-20"><Search /></div>
  <!-- End Search -->

  <!-- Cards -->
  <div class="bg-gray-100 w-full">
    <div class="container mx-auto py-16 px-5 sm:px-14 md:px-20">
      <div
        class="
          flex flex-col
          items-center
          text-center
          w-full
          border-b border-sky-800
          gap-3
        "
      >
        <h2 class="text-4xl text-black font-semibold">
          Ambiente no seu <b class="text-sky-700 font-bold">estilo</b>
        </h2>
        <p class="text-xl text-gray-500 font-medium mb-6">
          Encontre o imóvel com a expereiência que você quer vicer
        </p>
      </div>
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          mt-10
          mx-auto
        "
      >
        <CardAmbiente v-for="card in cards" :key="card.title" :card="card" />

      </div>
    </div>
  </div>
  <!-- End Cards -->

  <!-- Card Imoveis À Venda -->
  <div class="bg-white w-full">
    <div class="container mx-auto py-16 px-5 sm:px-14 md:px-20">
      <div
        class="flex justify-between items-center w-full border-b border-sky-800"
      >
        <h2 class="mb-2 text-4xl text-sky-700 font-semibold">À Venda</h2>
        <a
          href="#"
          class="
            text-md text-sky-700
            font-normal
            hover:underline
            cursor-pointer
          "
        >
          Ver mais...
        </a>
      </div>

      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-7
          mt-10
          mx-auto
        "
      >
        <CardImoveis v-for="property in properties" :key="property.title" :property="property" />
      </div>
    </div>
  </div>
  <!-- End Card -->

    <!-- Card Imoveis Alugar -->
  <div class="bg-gray-100 w-full">
    <div class="container mx-auto py-16 px-5 sm:px-14 md:px-20">
      <div
        class="flex justify-between items-center w-full border-b border-sky-800"
      >
        <h2 class="mb-2 text-4xl text-sky-700 font-semibold">Para Alugar</h2>
        <a
          href="#"
          class="
            text-md text-sky-700
            font-normal
            hover:underline
            cursor-pointer
          "
        >
          Ver mais...
        </a>
      </div>

      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-7
          mt-10
          mx-auto
        "
      >
         <CardImoveis v-for="property in properties" :key="property.title" :property="property" />
      </div>
    </div>
  </div>
  <!-- End Card -->
</template>

<script>
import CardImoveis from "../../components/Cards/CardImoveis.vue";
import MainSlider from "../../components/Home/MainSlider.vue";
import Search from "../../components/Home/Search.vue";
import CardAmbiente from "../../components/Cards/CardAmbiente.vue";
export default {
  name: "Home",
  components: {
    MainSlider,
    Search,
    CardImoveis,
    CardAmbiente,
  },
  data() {
    return {

      cards:[
        { title:"Cobertura", image:"cobertura"},
        { title:"Alto Padrão", image:"alto-padrao"},
        { title:"De frente para Lagoa", image:"lagoa"},
        { title:"Condomínio Fechado", image:"condominio"},
        { title:"Compacto", image:"compacto"},
        { title:"Lojas e Salas", image:"lojas-salas"},
      ],

      properties:[
        { title:"Linda Casa no Jardim Imperial", tipo:"imóvel Residencial", local:"Casa - Jardim Imperial", price:"1.000,00", url:"linda-casa-no-jardim-imperial"
          , quartos:"2", garagem:"2", area:"1000", image:"https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        { title:"Linda Casa no Joa", tipo:"imóvel Residencial", local:"Casa - Joa", price:"1.500,00", url:"linda-casa-no-joa"
          , quartos:"2", garagem:"1", area:"1500", image:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
        { title:"Linda Casa na Varzea", tipo:"imóvel Residencial", local:"Casa - Jardim Imperial", price:"1.900,00", url:"linda-casa-no-jardim-imperial"
          , quartos:"4", garagem:"3", area:"2000", image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      ]
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style></style>
