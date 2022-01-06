<template>
  <Header />
  <router-view />
  <WhatsApp />
  <Terms/>
  <Footer />
</template>

<script>
import Footer from "../components/Footer/Footer.vue";
import Header from "../components/Headers/Header.vue";
import WhatsApp from "../components/Whatsapp/index.vue";
import Terms from "../components/Terms/index.vue";
export default {
  name: "Default",
  components: {
    Header,
    Footer,
    WhatsApp,
    Terms
},
};
</script>

<style>
</style>