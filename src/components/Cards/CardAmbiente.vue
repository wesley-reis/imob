<template>
  <article class="">
    <a href="#">
      <div
      
        class="text flex justify-center items-center w-full py-24"
        :class="card.image"
      >
        <p class="absolute text-gray-100 text-2xl font-semibold text-center">
          {{ card.title }}
        </p>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: "CardAmbiente",
  props: {
    card:Object,
  }
};
</script>

<style scoped>
.cobertura {
  background: url("../../assets/images/home/cobertura_oto_1.jpg") no-repeat;
  background-size: cover;
}

.alto-padrao {
  background: url("../../assets/images/home/alto_padrao_1.jpg") no-repeat;
  background-size: cover;
}
.lagoa {
  background: url("../../assets/images/home/de_frente_pro_mar_original.jpg") no-repeat;
  background-size: cover;
}
.condominio {
  background: url("../../assets/images/home/condominio_fechado_1.jpg") no-repeat;
  background-size: cover;
}
.compacto {
  background: url("../../assets/images/home/compacto_1.jpg") no-repeat;
  background-size: cover;
}
.lojas-salas {
  background: url("../../assets/images/home/sala_comercial_original.jpg") no-repeat;
  background-size: cover;
}


.text p {
  transition: transform 0.2s ease-in-out;
}
.text p:hover {
  transform: scale(1.05);
}
</style>