<template>
  <MainSlider />
  <!-- Search -->
  <div class="container mx-auto py-10 px-5 sm:px-14 md:px-20"><Search /></div>
  <!-- End Search -->

  <!-- Cards -->
  <div class="bg-gray-100 w-full">
    <div class="container mx-auto py-16 px-5 sm:px-14 md:px-20">
      <div class="flex flex-col items-center text-center w-full border-b border-sky-800 gap-3">
        <h2 class="text-4xl text-black font-semibold">Ambiente no seu <b class="text-sky-700 font-bold">estilo</b></h2>
        <p class="text-xl text-gray-500 font-medium mb-6">Encontre o imóvel com a expereiência que você quer vicer</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-auto">
        <CardAmbiente cardTitle="Cobertura" cardImage="cobertura"/>
        <CardAmbiente cardTitle="Alto Padrão" cardImage="alto-padrao"/>
        <CardAmbiente cardTitle="De frente para Lagoa" cardImage="lagoa"/>
        <CardAmbiente cardTitle="Condomínio Fechado" cardImage="condominio"/>
        <CardAmbiente cardTitle="Compacto" cardImage="compacto"/>
        <CardAmbiente cardTitle="Lojas e Salas" cardImage="lojas-salas"/>
      </div>
    </div>
  </div>
  <!-- End Cards -->

<!-- Card Imoveis À Venda -->
  <div class="bg-white w-full">
    <div class="container mx-auto py-16 px-5 sm:px-14 md:px-20">
      <div class="flex justify-between items-center w-full border-b border-sky-800">
        <h2 class="mb-2 text-4xl text-sky-700 font-semibold">À Venda</h2>
        <p class="text-md text-sky-700 font-normal hover:underline cursor-pointer">Ver mais...</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-auto">
        <CardImoveis />
        <CardImoveis />
        <CardImoveis />
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

    };
  },
  mounted() {},
  methods: {},
};
</script>
<style>
</style>

