<template>
  <div
    class="
      grid grid-cols-1
      justify-center
      items-center
      gap-4
    "
  >
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
  <div class="flex flex-col-reverse mt-4">
    <div class="flex justify-between items-center mt-1">
      <a
        href="#"
        class="
          tab__link
          mb-1
          p-4
          block
          no-underline
          text-sky-700 text-sm
          font-normal
          rounded
          transition
          hover:underline
        "
        @click.prevent="active = !active"
      >
        <p v-show="!active" class="flex justify-start items-center">
          Filtro Avançado
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
        </p>
        <p v-show="active" class="flex justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Fechar
        </p>
      </a>
      <button
        type="submit"
        class="
          bg-sky-700
          p-2
          rounded-md
          text-white text-base
          font-normal
          text-sm
          flex
          justify-center
          items-center
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        Pesquisar
      </button>
    </div>
    <div
      class="
        grid grid-cols-1
        justify-center
        items-center
        gap-4
        w-full
      "
      v-show="active"
    >
      <Select
        :data="quarto"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Quartos</template>
      </Select>

      <Select
        :data="suite"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Suítes</template>
      </Select>

      <Select
        :data="banheiro"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Banheiros</template>
      </Select>

      <Select
        :data="garage"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Garagem</template>
      </Select>

      <Select
        :data="priceBase"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Preço Base</template>
      </Select>

      <Select
        :data="priceLimit"
        v-model="selectedOption"
        v-on:valueSelect="onValueSelect"
      >
        <template v-slot:SelectLabel>Preço Limite</template>
      </Select>
    </div>
  </div>
</template>

<script>
import Select from "./Select/Select.vue";

export default {
  name: "SearchVertical",
  components: {
    Select,
  },
  data() {
    return {
      selectedOption: null,
      imovel: null,
      finality: null,
      tipo: null,
      local: null,
      quarto: null,
      suite: null,
      banheiro: null,
      garage: null,
      priceBase: null,
      priceLimit: null,
      active: false,
    };
  },
  mounted() {
    let imoveis = ["Imóvel Residencial", "Comercial/Industrial", "Terreno"];
    let finality = ["Comprar", "Alugar"];
    let tipos = ["Casa", "Apartamento", "Terreno", "Comercial"];
    let locais = ["Varzea", "Palmital","Joa","Visão"];
    let quartos = [1, 2, 3, "4+"];
    let suites = [0,1, 2, 3, "4+"];
    let banheiros = [1, 2, 3, "4+"];
    let garagens = [0,1, 2, 3, "4+"];
    let base = ["A partir de R$ 100.000,00", "A partir de R$ 300.000,00"];
    let limit = ["Até R$ 1.000.000,00"];

    this.local = locais;
    this.tipo = tipos;
    this.finality = finality;
    this.imovel = imoveis;
    this.quarto = quartos;
    this.suite = suites;
    this.banheiro = banheiros;
    this.garage = garagens;
    this.priceBase = base;
    this.priceLimit = limit;
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