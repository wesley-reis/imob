<template>
<div>
  <div v-if="label" class="flex justify-start items-center gap-1">
    <slot/>
    <label class="text-base font-medium text-gray-300" :for="name">{{label}}</label>
  </div>
  <div class="bg-gray-50 rounded-md border-b border-gray-300 w-full overflow-hidden">
    <input :placeholder="placeholder" :type="type"  :name="name" :id="name" class="w-full py-2 px-3 bg-transparent outline-none text-gray-800"/>
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