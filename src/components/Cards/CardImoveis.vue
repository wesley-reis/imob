<template>
  <div class="flex flex-wrap -mx-4">
    <div class="w-full p-4 flex">
      <div
        class="
          c-card
          block
          bg-white
          border border-gray-200
          shadow-md
          hover:shadow-xl
          rounded
          overflow-hidden
          flex-1
        "
      >
        <div class="relative pb-48 overflow-hidden">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="@/assets/properties/1/casa1.jpg"
            :alt="title"
          />
        </div>
        <div class="p-4">
          <h2 class="mt-2 mb-2 font-semibold text-2xl text-sky-700">
            {{ title }}
          </h2>
          <p class="text-base font-semibold text-gray-600">
            {{ tipo }}
          </p>
          <p class="text-sm text-gray-600 flex justify-start items-center">
            {{ local }}
            <svg
              class="h-4 w-4 ml-1"
              baseProfile="tiny"
              height="24px"
              id="Layer_1"
              version="1.2"
              viewBox="0 0 24 24"
              width="24px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M11.087,20.914c-0.353,0-1.219-0.146-1.668-1.496L8.21,15.791l-3.628-1.209c-1.244-0.415-1.469-1.172-1.493-1.587   s0.114-1.193,1.302-1.747l11.375-5.309c1.031-0.479,1.922-0.309,2.348,0.362c0.224,0.351,0.396,0.97-0.053,1.933l-5.309,11.375   C12.223,20.744,11.48,20.914,11.087,20.914z M5.697,12.846l4.094,1.363l1.365,4.093l4.775-10.233L5.697,12.846z"
                />
              </g>
            </svg>
          </p>
          <div class="mt-5 text-sky-600 text-2xl font-bold">
            <p>R$ {{ price }}/mês</p>
          </div>
        </div>

        <div class="flex justify-center items-center">
          <a
            :href="url"
            class="
              w-11/12
              p-2
              bg-sky-700
              text-white
              rounded-md
              mt-4
              text-center
              hover:bg-sky-800
            "
            >Ver Imóvel</a
          >
        </div>

        <div
          class="
            flex
            justify-center
            items-center
            gap-16
            p-4
            border-t border-b
            mt-4
            bg-gray-50
          "
        >
          <p class="flex flex-col justify-center items-center">
            <img
              src="../../assets/images/icons/bed.png"
              class="w-9"
              alt="quartos"
            />
            {{ quartos }}
          </p>
          <p class="flex flex-col justify-center items-center">
            <img
              src="../../assets/images/icons/garage.png"
              class="w-9"
              alt="garagem"
            />
            {{ garagem }}
          </p>
          <p class="flex flex-col justify-center items-center">
            <img
              src="../../assets/images/icons/util-area.png"
              class="w-9"
              alt="area-util"
            />
            {{ area }} m²
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardImoveis",
  props: {
    title: String,
    tipo: String,
    local: String,
    price: String,
    url: String,
    quartos: String,
    garagem: String,
    area: String,
  },
};
</script>

<style scoped>
.c-card img {
  transition: transform 0.3s ease-in-out;
}
.c-card img:hover {
  transform: scale(1.05);
}
</style>
