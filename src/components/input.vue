<template>
  <div v-if="label" class="flex justify-start items-center gap-1">

    <img v-if="icon=='email'" src="../assets/images/icons/email.png" class="w-5" alt="mail" />
    <img v-if="icon=='password'" src="../assets/images/icons/password.png" class="w-4" alt="password" />

    <label class="text-base font-medium text-gray-300" :for="id">{{label}}</label>
  </div>
  <div class="bg-transparent border-b border-gray-300 w-full overflow-hidden mb-9">
    <input :placeholder="placeholder" :type="type" :id="id" class="w-full py-3 pw-2 bg-transparent outline-none text-gray-300"/>
  </div>
</template>

<script>
export default {
    name:'Input',
    props:{
        label:String,
        placeholder:String,
        type:String,
        id:String,
        icon:String,
    }
}
</script>

<style>

</style>