<template>
  <iframe
    class="w-full h-96 overflow-hidden"
      :src="`https://maps.google.com/maps?&amp;hl=en&amp;q=${property.endereco}&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed`"
  ></iframe>   
</template>

<script>
export default {
  name: "Location",
  props: {
      property:Array,
  }
};
</script>

<style scoped>
</style>