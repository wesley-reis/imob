<template>
   <div class="main_slide hidden sm:flex justify-center items-center">

    <div class="flex justify-center md:container md:block md:pl-20">
        <div class="w-9/12 md:w-6/12">
            <p class="leading-normal p-8 tracking-widest bg-black bg-opacity-80 uppercase font-extralight text-4xl text-white">Encontre o <b>Imóvel ideal</b> para você e <b>sua família</b>
                morar na praia!</p>
                <div class="mt-6">
            <a href="javascript:void(0);" class="py-3 px-4 bg-sky-600 text-white rounded-sm mr-2 hover:bg-sky-900 text-lg font-normal">Quero <b>Alugar</b>!</a>
            <a href="javascript:void(0);" class="py-3 px-4 bg-sky-600 text-white rounded-sm hover:bg-sky-900 text-lg font-normal">Quero <b>Comprar</b>!</a>

                </div>
        </div>
    </div>

</div>

</template>

<script>
export default {
    name:"MainSlider",
}
</script>

<style scoped>
  .main_slide {
  height: 532px;
  background-image: url('../../assets/images/front1.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center 65%;
}

</style>