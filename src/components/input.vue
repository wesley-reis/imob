<template>
  <div v-if="label" class="flex justify-start items-center gap-1">
    <slot/>
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
    }
}
</script>

<style>

</style>