<template>
  <div class="container mt-5 px-4 py-10">
    <h1 class="text-4xl text-sky-700">
      Linda Casa no Joa com vista para a Lagoa Central
    </h1>
    <p class="text-gray-600 text-sm font-medium mt-2">
      Imóvel Residencial - Casa Joa
    </p>

    <div>
      <slider/>
    </div>
    <p class="text-gray-500 text-sm font-normal">
      IPTU: R$ 100,00 | Condomínio: R$ 350,00
    </p>
    <p class="text-gray-500 text-2xl font-normal">
      Valor do Aluguel: R$ 1.200,00
    </p>
  </div>
</template>

<script>
import Slider from '../../components/Slider/Slider.vue';
export default {
  components: { Slider },
  name: "Propertie",

  
};
</script>

<style>
</style>