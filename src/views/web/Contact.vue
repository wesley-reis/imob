<template>
  <div class="container mx-auto py-12 px-5 sm:px-14 md:px-20">
    <div
      class="
        flex flex-col
        justify-center
        items-center
        text-gray-800 text-center
      "
    >
      <h1 class="text-4xl text-center font-semibold text-sky-700 text-center">
        Entre em Contato Conosco
      </h1>
      <p>
        Quer conversar com um corretor exclusivo e ter o atendimento
        diferenciado em busca do seu imóvel dos sonhos?
      </p>
      <p>
        Preencha o formulário abaixo e vamos lhe direcionar para alguém que
        entende a sua necessidade!
      </p>
    </div>

    <div class="w-full px-6 py-7 bg-gray-200 mt-10">
      <p>Envie um e-mail</p>
      <form class="flex flex-col gap-3 w-full mt-4">
        <InputWhite
          :type="'string'"
          :name="'name'"
          :placeholder="'Digite seu nome'"
          :error="'name'"
        />

        <InputWhite
          :type="'email'"
          :name="'email'"
          :placeholder="'Digite seu melhor e-mail'"
          :error="'email'"
        />

        <TextArea
          :type="'message'"
          :name="'message'"
          :placeholder="'Escreva sua mensagem...'"
          :error="'message'"
        />

        <div class="flex justify-end">
          <button
            type="submit"
            class="
              bg-sky-700
              w-32
              rounded-md
              p-3
              font-normal
              text-sm text-white
              hover:opacity-90
              flex
              justify-center
              item-center
            "
          >
            Enviar Contato
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputWhite from "../../components/InputWhite.vue";
import TextArea from "../../components/TextArea.vue";

export default {
  name: "Contact",
  components: {
    InputWhite,
    TextArea,
  },
};
</script>
