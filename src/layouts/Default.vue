<template>
  <Header />
  <router-view />
  <WhatsApp />
  <Footer />
</template>

<script>
import Footer from "../components/Footer/Footer.vue";
import Header from "../components/Headers/Header.vue";
import WhatsApp from "../components/Whatsapp/index.vue";
export default {
  name: "Default",
  components: {
    Header,
    Footer,
    WhatsApp,
  },
};
</script>

<style>
</style>