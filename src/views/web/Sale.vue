<template>
  <div class="bg-[url('../../assets/properties/1/casa1.jpg')] bg-center w-full">
    <div class="bg-black bg-opacity-80 w-full">
      <div class="container mx-auto px-5 py-6 lg:px-10">
        <h1 class="text-4xl text-gray-300 font-medium">À Venda</h1>
        <p class="text-gray-400 text-sm font-medium mt-2">
          Escolha o imóveis ideal para você e sua família.
        </p>
      </div>
    </div>
  </div>
  <div class="container mx-auto lg:px-10">
    <div class="grid grid-cols-1 lg:grid-cols-4 lg:first-letter:gap-2">
      <!-- Search -->
      <div class="col-span-1 w-11/12 lg:w-full mx-auto">
        <div class="container">
          <h4 class="flex justify-start items-end text-3xl font-semibold text-sky-700 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clip-rule="evenodd"
              />
            </svg>
            Filtro
          </h4>
          <div class="bg-gray-50 px-4 py-5 mt-1">
            <SearchVertical />
          </div>
        </div>
      </div>

      <!-- imoveis -->
      <div class="col-span-3">
        <div class="bg-white w-full">
          <div class="container mx-auto pt-2 pb-16 px-5 sm:px-14 md:px-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14 mx-auto">
              <CardImoveis
                v-for="property in properties"
                :key="property.title"
                :property="property"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardImoveis from "../../components/Cards/CardImoveis.vue";
import SearchVertical from "../../components/SearchVertical.vue";
export default {
  name: "Sale",
  components: { CardImoveis, SearchVertical },
  data() {
    return {
      properties: [
        {
          title: "Linda Casa no Jardim Imperial",
          tipo: "imóvel Residencial",
          local: "Casa - Jardim Imperial",
          price: "1.000,00",
          url: "linda-casa-no-jardim-imperial",
          quartos: "2",
          garagem: "2",
          area: "1000",
          image:
            "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Linda Casa no Joa",
          tipo: "imóvel Residencial",
          local: "Casa - Joa",
          price: "1.500,00",
          url: "linda-casa-no-joa",
          quartos: "2",
          garagem: "1",
          area: "1500",
          image:
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Linda Casa na Varzea",
          tipo: "imóvel Residencial",
          local: "Casa - Jardim Imperial",
          price: "1.900,00",
          url: "linda-casa-no-jardim-imperial",
          quartos: "4",
          garagem: "3",
          area: "2000",
          image:
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Linda Casa na Varzea",
          tipo: "imóvel Residencial",
          local: "Casa - Jardim Imperial",
          price: "1.900,00",
          url: "linda-casa-no-jardim-imperial",
          quartos: "4",
          garagem: "3",
          area: "2000",
          image:
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
  },
};
</script>

<style>
</style>