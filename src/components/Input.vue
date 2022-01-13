<template>
<div class="mb-7">
  <div v-if="label" class="flex justify-start items-center gap-1">
    <slot/>
    <label class="text-base font-semibold text-gray-200 text-sm" :for="name">{{label}}</label>
  </div>
  <div class="bg-transparent border-b border-gray-300 w-full overflow-hidden">
    <input :placeholder="placeholder" :type="type"  :name="name" :id="name" class="w-full py-2 bg-transparent outline-none text-gray-300"/>
  </div>
  <span v-if="error" class="text-xs text-red-600">campo {{ name }} é obrigatório</span>
</div>
  
</template>

<script>
export default {
    name:'Input',
    props:{
        label:String,
        placeholder:String,
        type:String,
        name:String,
        error:String,
    }
}
</script>

<style>

</style>