<template>
  <MainSlider />
  <div class="container mx-auto">
    <!-- Search -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 p-10">
      <Select
        :data="finality"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Comprar ou Alugar?</template>
      </Select>

       <Select
        :data="imovel"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>O que você quer?</template>
      </Select>


       <Select
        :data="tipo"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Qual o tipo de imóvel?</template>
      </Select>


       <Select
        :data="local"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Onde você quer?</template>
      </Select>      
    </div>
    <!-- Acordeon -->
    <div class="flex flex-col-reverse px-10 -mt-5">
      <div class="flex justify-between items-center">
        <a href="#" class="tab__link mb-1 p-4 block no-underline text-sky-700 text-sm font-normal rounded transition hover:underline"  @click.prevent="active = !active">
            <p v-show="!active" class="flex justify-start items-center">Filtro Avançado
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
              </svg>
            </p> 
            <p v-show="active" class="flex justify-start items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              Fechar
            </p>           
        </a>
        <button type="submit" class="bg-sky-700 py-2 px-5 rounded-md text-white text-base font-normal flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Pesquisar
        </button>      
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4" v-show="active">

        <Select
          :data="local"
          v-model="selectedOption"
          v-on:valueSelect="onValueSelect"
        >
          <template v-slot:SelectLabel>Onde você quer?</template>
        </Select>

          <Select
          :data="local"
          v-model="selectedOption"
          v-on:valueSelect="onValueSelect"
        >
          <template v-slot:SelectLabel>Onde você quer?</template>
        </Select>

          <Select
          :data="local"
          v-model="selectedOption"
          v-on:valueSelect="onValueSelect"
        >
          <template v-slot:SelectLabel>Onde você quer?</template>
        </Select>

          <Select
          :data="local"
          v-model="selectedOption"
          v-on:valueSelect="onValueSelect"
        >
          <template v-slot:SelectLabel>Onde você quer?</template>
        </Select>

                <Select
          :data="local"
          v-model="selectedOption"
          v-on:valueSelect="onValueSelect"
        >
          <template v-slot:SelectLabel>Onde você quer?</template>
        </Select>

                <Select
          :data="local"
          v-model="selectedOption"
          v-on:valueSelect="onValueSelect"
        >
          <template v-slot:SelectLabel>Onde você quer?</template>
        </Select>

        

      </div>            
    </div>
    <!-- end Search -->
  </div>
</template>

<script>
import MainSlider from "../../components/Home/MainSlider.vue";
import Select from "../../components/Select/Select.vue";
export default {
  name: "Home",
  components: {
    MainSlider,
    Select,
  },
  data() {
    return {
      selectedOption: null,
      imovel: null,
      finality:null,
      tipo:null,
      local:null,
      active: false,
    };
  },
  mounted(){
    let imoveis = [
      {id:1, name:"Imóvel Residencial"},
        {id:2, name:"Comercial/Industrial"},
        {id:3, name:"Terreno"},
        
    ];

    let finality = [
      {id:1, name:"Comprar"},
        {id:2, name:"Alugar"},        
    ];

    let tipos = [
      {id:1, name:"Casa"},
        {id:2, name:"Apartamento"},
        {id:3, name:"Terreno"},
           {id:4, name:"Comercial"},
    ];

    let locais = [
      {id:1, name:"Varzea"},
        {id:2, name:"Palmital"}, 
        {id:3, name:"Joa"},   
        {id:4, name:"Visão"},          
    ];

    this.local = locais;
    this.tipo = tipos;
    this.finality = finality;
    this.imovel = imoveis;
  },
  methods: {
    onValueSelect(value) {
      this.selectedOption = value;
    },
  },
};
</script>
<style>
</style>
