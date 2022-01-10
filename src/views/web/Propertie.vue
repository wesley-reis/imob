<template>
  <div class="container mt-5 px-4 py-10">
    <h1 class="text-4xl text-sky-700">
      Linda Casa no Joa com vista para a Lagoa Central
    </h1>
    <p class="text-gray-600 text-sm font-medium mt-2">
      Imóvel Residencial - Casa Joa
    </p>

    <div>
      <slider :propertyImages="images"/>
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
  data(){
    return{
      images:[
        {image:'https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=', name:'casa para alugar'},
        {image:'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', name:'casa para alugar'},
        {image:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', name:'casa para alugar'},
      ]
    }
  }

  
};
</script>

<style>
</style>