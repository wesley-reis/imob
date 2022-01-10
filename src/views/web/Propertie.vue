<template>
  <div class="bg-gray-100 w-full">
    <div class="px-5 py-12">
      <h1 class="text-4xl text-sky-700 font-medium">
        Linda Casa no Joa com vista para a Lagoa Central
      </h1>
      <p class="text-gray-500 text-sm font-medium mt-2">
        Imóvel Residencial - Casa Joa
      </p>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 md:grid-cols-3 gap-5 px-5 py-10">
      <section class="md:col-span-2">
        <div class="bg-white">
          <slider :propertyImages="images" />

          <p class="text-gray-500 text-sm font-normal">
            IPTU: R$ 100,00 | Condomínio: R$ 350,00
          </p>
          <p class="text-gray-500 text-2xl font-normal">
            Valor do Aluguel: R$ 1.200,00
          </p>
          <h2 class="text-sky-600 text-3xl font-medium mt-10">
            Conheça mais o imóve
          </h2>
          <p class="leading-6 mt-5 text-sm font-normal text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            cumque distinctio doloribus fugiat perspiciatis quae quaerat quod
            sint? Alias amet dolorum illum ipsa itaque laborum, porro
            praesentium quam. A atque in ut. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto cumque distinctio doloribus
            fugiat perspiciatis quae quaerat quod sint? Alias amet dolorum illum
            ipsa itaque laborum, porro praesentium quam. A atque in ut.
          </p>

          <div>
            <h2 class="text-sky-600 text-3xl font-medium mt-10">
              Características
            </h2>
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
              <li
                class="grid grid-cols-2 justify-between items-center px-4 py-3"
              >
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
              <li
                class="grid grid-cols-2 justify-between items-center px-4 py-3"
              >
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
              <li
                class="grid grid-cols-2 justify-between items-center px-4 py-3"
              >
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
                <p class="mx-auto">300 m²</p>
              </li>
              <li
                class="grid grid-cols-2 justify-between items-center px-4 py-3"
              >
                <p>Área Útil</p>
                <p class="mx-auto">150 m²</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-sky-600 text-3xl font-medium mt-10">Estrutura</h2>
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

          <div class="flex flex-col items-start gap-5">
            <h2 class="text-sky-600 text-3xl font-medium mt-10">Localização</h2>
            <location :property="property" />
          </div>
        </div>
      </section>
      <section class="md:col-span-1 flex flex-col justify-center items-center">
        <a class="flex justify-center items-center gap-2 border border-green-500 rounded-md px-4 py-2 w-full text-center text-green-500 text-lg font-medium hover:bg-green-500 hover:text-white" target="_blank" href="https://wa.me/5531986783545?text=Ol%C3%A1%2C+tenho+interesse+no+im%C3%B3vel+%23123">
        <svg class="h-5 w-5 fill-current"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>

        Converse com o Corretor!</a>
        <div class="mt-4 border border-gray-500 rounded-md w-full bg-sky-500">
          <div class="bg-sky-700 text-gray-100 py-4 px-4">
              <p class="font-medium text-lg">Entre em contato</p>
          </div>

          <div class="px-4 mt-5">
            <input-white :label="'Seu Nome:'"/>
          </div>
          
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/Slider/Slider.vue";
import Location from "../../components/Maps/Location.vue";
import InputWhite from "../../components/InputWhite.vue";
export default {
  components: { Slider, Location, InputWhite },
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

      property: {
        endereco:
          "Rua Luiz Carlos dos Santos , Jardim Imperial, Lagoa Santa, MG",
      },
    };
  },
};
</script>

<style>
</style>