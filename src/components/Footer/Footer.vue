<template>
  <article class="bg-gray-900 py-12 px-5 flex flex-col justify-center w-full overflow-hidden">
    <div class="flex flex-col items-center mx-auto max-w-xl">
      <h1 class="text-3xl text-gray-200 font-medium pb-5 text-center">
        Quer ficar por dentro da novidades?
      </h1>

      <p class="text-gray-400 text-center text-sm pb-5">
        Deixe o seu nome e seu melhor e-mail nos campos abaixo e nós vamos lhe
        informar sobre os melhores negócios e todos os lançamentos do sul da
        ilha
      </p>

      <form class="flex flex-col gap-3 w-full">
        <Input
          :type="'string'"
          :name="'name'"
          :placeholder="'Digite seu nome'"
          :error="'name'"
        />
        <Input
          :type="'email'"
          :name="'email'"
          :placeholder="'Digite seu melhor email'"
          :error="'name'"
        />
        <button
          type="submit"
          class="
            bg-blue-600
            w-full
            rounded-md
            p-3
            font-extralight
            text-sm text-white
            hover:opacity-90
            flex
            justify-center
            item-center
          "
        >
          Me avise!
        </button>
      </form>
    </div>
  </article>

  <section class="main_footer bg-blue-50 font-normal">
    <div class="pt-5 pb-28">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-5 mx-5 md:mx-32">
        <div class="col-span-1">
          <h1 class="pb-2 text-2xl text-gray-600 font-normal">
            Navegue <span class="text-blue-600">Aqui!</span>
          </h1>
          <ul class="border-t-2 -mt-1">
            <li><a href="">Home</a></li>
            <li><a href="" class="text-blue-600">Destaque</a></li>
            <li><a href="">Alugar</a></li>
            <li><a href="">Comprar</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </div>

        <div class="col-span-3">
          <h1 class="pb-2 text-2xl text-gray-600 font-normal">
            Nos <span class="text-blue-600">Conheça!</span>
          </h1>
          <p class="border-t-2 -mt-1">
            Nossa maior satisfação é lhe ajudar a encontrar seu imóvel dos
            sonhos nos bairros do Sul da Ilha da Magia, em Florianópolis.
          </p>

          <h1 class="pt-5 pb-2 text-2xl text-gray-600 font-normal">Quer 
            <span class="text-blue-600">Investir?</span></h1>
          <p class="border-t-2 -mt-1">
            Entre em contato com a nossa equipe e vamos lhe informar sempre
            sobre os melhores negócios.
          </p>
        </div>

        <div class="col-span-1 flex justify-center md:justify-start items-start gap-2">
          <button class="p-3 bg-blue-base rounded-md">
            <img src="../../assets/images/icons/facebook.png" class="w-6" alt="facebook">

          </button>

          <button class="p-3 bg-blue-base rounded-md">
             <img src="../../assets/images/icons/twitter.png" class="w-6" alt="twitter">
          </button>

          <button class="p-3 bg-blue-base rounded-md">
            <img src="../../assets/images/icons/instagram.png" class="w-6" alt="instagram">
          </button>
        </div>
      </div>
    </div>
  </section>

  <div class="py-4 px-6 bg-blue-base text-white text-center text-xs font-extralight">
    <div class="col-12">
      <p class="mb-0">
        Imobiliária | CRECI 1234 | Avenida João Daher, 0 - Centro Lagoa
        Santa/MG
      </p>
      <p class="mb-0 pt-1">
        Todos os Direitos Reservados - WRRDevelopment ®
      </p>
    </div>
  </div>
</template>

<script>
import Input from "../InputWhite.vue";
export default {
  name: "Footer",
  components: { Input },
};
</script>

<style>
.main_footer {
  background: url(../../assets/images/footer.png) repeat-x bottom center;
  background-size: 20%;
}

@media (min-width: 768px) {
  .main_footer {
    background: url(../../assets/images/footer.png) repeat-x bottom center;
    background-size: 10%;
  }
}
</style>