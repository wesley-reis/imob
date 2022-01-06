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
      <h1 class="text-4xl font-semibold text-sky-700">
        Entre em Contato Conosco
      </h1>
      <p class="mt-3">
        Quer conversar com um corretor exclusivo e ter o atendimento
        diferenciado em busca do seu imóvel dos sonhos?
      </p>
      <p>
        Preencha o formulário abaixo e vamos lhe direcionar para alguém que
        entende a sua necessidade!
      </p>
    </div>

    <div class="w-full lg:w-4/6 xl:w-3/6 px-6 py-7 bg-gray-200 mt-10 mx-auto">
      <p
        class="
          text-gray-500 text-lg
          font-medium
          flex
          justify-start
          items-center
          gap-1
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Envie um e-mail
      </p>
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

    <div class="w-full py-7 mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div class="flex flex-col justify-center items-center text-center mt-5">
        <h2
          class="
            text-xl text-gray-500
            font-medium
            flex
            justify-start
            items-center
            gap-2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Por E-mail
        </h2>
        <p class="font-light text-sm mt-2">
          Nossos atendentes irão entrar em contato com você assim que possível.
        </p>
        <a
          href="mailto:wrrdeveloper@gmail.com"
          class="text-sm text-sky-700 mt-5"
          >contao@imob.com.br</a
        >
      </div>

      <div class="flex flex-col justify-center items-center text-center mt-5">
        <h2
          class="
            text-xl text-gray-500
            font-medium
            flex
            justify-start
            items-center
            gap-2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          Por Telefone
        </h2>
        <p class="font-light text-sm mt-2">
          Estamos disponíveis nos números abaixo no horário comercial.
        </p>
        <span class="text-sm text-sky-700 mt-5">+55 (31) 5454-2222</span>
      </div>

      <div class="flex flex-col justify-center items-center text-center mt-5">
        <h2
          class="
            text-xl text-gray-500
            font-medium
            flex
            justify-start
            items-center
            gap-2
          "
        >
          <svg
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path
              d="M16.5,14a3.47675,3.47675,0,0,0-2.65356,1.24176L9.88025,12.86212a3.16321,3.16321,0,0,0,0-1.72424l3.96619-2.37964A3.4825,3.4825,0,1,0,13,6.5a3.45107,3.45107,0,0,0,.04126.40912l-4.19,2.514a3.5,3.5,0,1,0,0,5.15369l4.19,2.514A3.45107,3.45107,0,0,0,13,17.5,3.5,3.5,0,1,0,16.5,14Z"
            />
          </svg>
          Redes Sociais
        </h2>
        <p class="font-light text-sm mt-2">
          Fique por dentro do tudo o que a gente compartilha em nossas redes
          sociais!
        </p>
        <div class="flex justify-center items-center gap-1 mt-3">
          <a
            class="bg-sky-900 p-2 rounded-md opacity-90 hover:opacity-100"
            href=""
            ><img
              src="../../assets/images/icons/facebook.png"
              class="w-6"
              alt="facebook"
          /></a>
          <a
            class="bg-sky-900 p-2 rounded-md opacity-90 hover:opacity-100"
            href=""
            ><img
              src="../../assets/images/icons/twitter.png"
              class="w-6"
              alt="twitter"
          /></a>
          <a
            class="bg-sky-900 p-2 rounded-md opacity-90 hover:opacity-100"
            href=""
            ><img
              src="../../assets/images/icons/instagram.png"
              class="w-6"
              alt="instagram"
          /></a>
        </div>
      </div>
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
