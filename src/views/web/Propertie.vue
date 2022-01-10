<template>
  <div class="container">
    <section class="bg-gray-100 w-full">
      <div class="px-5 py-12">
        <h1 class="text-4xl text-sky-700 font-medium">
          Linda Casa no Joa com vista para a Lagoa Central
        </h1>
        <p class="text-gray-500 text-sm font-medium mt-2">
          Imóvel Residencial - Casa Joa
        </p>
      </div>

      <div class="bg-white px-5 py-10">
        <slider :propertyImages="images" />
        <p class="text-gray-500 text-sm font-normal">
          IPTU: R$ 100,00 | Condomínio: R$ 350,00
        </p>
        <p class="text-gray-500 text-2xl font-normal">
          Valor do Aluguel: R$ 1.200,00
        </p>
        <h2 class="text-sky-600 text-3xl font-normal mt-10">
          Conheça mais o imóve
        </h2>
        <p class="leading-6 mt-5 text-sm font-normal text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          cumque distinctio doloribus fugiat perspiciatis quae quaerat quod
          sint? Alias amet dolorum illum ipsa itaque laborum, porro praesentium
          quam. A atque in ut. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Architecto cumque distinctio doloribus fugiat
          perspiciatis quae quaerat quod sint? Alias amet dolorum illum ipsa
          itaque laborum, porro praesentium quam. A atque in ut.
        </p>

        <h2 class="text-sky-600 text-3xl font-normal mt-10">Características</h2>
        <ul class="text-base text-gray-900 grid grid-cols-1 mt-5">
          <li
            class="
              grid grid-cols-2
              justify-between
              items-center
              px-4
              py-3
              border-y-2 border-gray-200
              bg-gray-100
            "
          >
            <p>Dormitórios</p>
            <p class="mx-auto">2</p>
          </li>
          <li class="grid grid-cols-2 justify-between items-center px-4 py-3">
            <p>Suítes</p>
            <p class="mx-auto">1</p>
          </li>
          <li
            class="
              grid grid-cols-2
              justify-between
              items-center
              px-4
              py-3
              border-y-2 border-gray-200
              bg-gray-100
            "
          >
            <p>Banheiros</p>
            <p class="mx-auto">3</p>
          </li>
          <li class="grid grid-cols-2 justify-between items-center px-4 py-3">
            <p>Salas</p>
            <p class="mx-auto">1</p>
          </li>
          <li
            class="
              grid grid-cols-2
              justify-between
              items-center
              px-4
              py-3
              border-y-2 border-gray-200
              bg-gray-100
            "
          >
            <p>Garagem</p>
            <p class="mx-auto">2</p>
          </li>
          <li class="grid grid-cols-2 justify-between items-center px-4 py-3">
            <p>Garagem Coberta</p>
            <p class="mx-auto">2</p>
          </li>
          <li
            class="
              grid grid-cols-2
              justify-between
              items-center
              px-4
              py-3
              border-y-2 border-gray-200
              bg-gray-100
            "
          >
            <p>Área Total</p>
            <p class="mx-auto">300m</p>
          </li>
          <li class="grid grid-cols-2 justify-between items-center px-4 py-3">
            <p>Área Útil</p>
            <p class="mx-auto">150m</p>
          </li>
        </ul>

        <h2 class="text-sky-600 text-3xl font-normal mt-10">Estrutura</h2>
        <div class="mt-5 flex justify-between items-center gap-2 flex-wrap">
          <span
            class="
              flex
              justify-items-start
              items-center
              gap-1
              p-2
              bg-teal-500
              text-white
              font-normal
              text-sm
              rounded-md
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Churrasqueira</span
          >
          <span
            class="
              flex
              justify-items-start
              items-center
              gap-1
              p-2
              bg-teal-500
              text-white
              font-normal
              text-sm
              rounded-md
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Biblioteca</span
          >
          <span
            class="
              flex
              justify-items-start
              items-center
              gap-1
              p-2
              bg-teal-500
              text-white
              font-normal
              text-sm
              rounded-md
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Edicula</span
          >
          <span
            class="
              flex
              justify-items-start
              items-center
              gap-1
              p-2
              bg-teal-500
              text-white
              font-normal
              text-sm
              rounded-md
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Piscina</span
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "../../components/Slider/Slider.vue";
export default {
  components: { Slider },
  name: "Propertie",
  data() {
    return {
      images: [
        {
          image:
            "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
          name: "casa para alugar",
        },
        {
          image:
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          name: "casa para alugar",
        },
        {
          image:
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          name: "casa para alugar",
        },
      ],
    };
  },
};
</script>

<style>
</style>