<template>
  <div class="message absolute right-0 top-14 bg-red-200 px-4 py-4 rounded-sm text-red-700 text-sm">
      <p>Mensagem de teste de configuração</p>
  </div>
</template>

<script>
export default {
    name:"Message",

}
</script>

<style scoped>
    .message ::before{
        content: '';
        background: red;
        padding: 2px;
        
    }
</style>