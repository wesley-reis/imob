<template>
  <div class="bg-gray-100 w-full h-full font-OpenSans">
    <Header>
      <router-view/>
    </Header>
  </div>
</template>

<script>
import Header from "../components/Admin/Header.vue";
export default {
    name: "Admin",
    components: { Header }
}
</script>

<style>

</style>