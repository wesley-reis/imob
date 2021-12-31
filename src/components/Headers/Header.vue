<template>
  <div
    class="
      fixed
      bg-blue-1000
      w-full
      flex
      justify-between
      items-center
      py-2
      px-32
      text-xs
      font-light
      text-gray-200
    "
  >
    <p class="hidden lg:flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        />
      </svg>
      Avenida João Daher, 0 - Centro, Lagoa Santa/MG
    </p>
    <p class="hidden lg:flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clip-rule="evenodd"
        />
      </svg>
      Seg/Sex: 09:00h - 18:00h Sáb/Dom: Plantão
    </p>
    <p class="hidden lg:flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
        />
      </svg>
      +55 (31) 3465-1234
    </p>
    <p class="flex justify-center items-center mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
        />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
      contato@minhaimob.com.br
    </p>
  </div>
  <div class="pt-8 px-24 flex justify-between items-center shadow-md">
      <img src="../../assets/images/logo.png" alt="imobiliaria" class="w-1/4">
      <div class="flex justify-end items-center gap-6 py-8 text-base font-extralight">
          <a class="text-blue-600" href="">Home</a>
          <a href="">Destaque</a>
          <a href="">Alugar</a>
          <a href="">Compar</a>
          <a href="">Contato</a>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
    .bg-blue-1000{
        background: #16163F;
    }

        .bg-blue-950{
        background: #1d1d57;
    }
</style>