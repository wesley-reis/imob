<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

<script>
import Footer from '../components/Footer/Footer.vue';
import Header from "../components/Headers/Header.vue";
export default {
    name:"Default",
    components: {
      Header,
      Footer
    },

}
</script>

<style>

</style>