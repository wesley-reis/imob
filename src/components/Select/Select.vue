<template>
  <div class="space-y-1">
    <label id="listbox-label" class="block text-sm leading-5 font-medium text-gray-700">
      <slot name="SelectLabel"></slot>
    </label>

    <div class="relative">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button type="button" @click="closeDropdown" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="cursor-pointer relative w-full rounded-md border-none bg-gray-100 hover:bg-gray-200 pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
          <div class="flex items-center h-6">
            <!-- usando Input -->
            <input class="block truncate py-2 outline-none w-full cursor-pointer bg-transparent" 
            type="text"
             :value="item" 
             placeholder="Escolha..."
             />
             <!-- Para usar -->
            <!-- <span class="block truncate">
              {{ !item ? 'Escolha...' : item }}
            </span> -->
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </span>

      <div v-show="isOpen" class="absolute mt-1 w-full rounded-md bg-white shadow-lg">
        <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">

          <li tabindex="0" @click="select(item)" id="listbox-item-0" role="option" v-for="item in data" v-bind:key="item.id" class="text-gray-700 bg-white select-none relative py-2 pl-3 pr-9  cursor-pointer hover:text-white hover:bg-sky-600 focus:outline-none focus:text-white focus:bg-sky-600 z-10">
            <div class="flex items-center space-x-3">
              <span class="block truncate" v-bind:class="{ 'font-normal' : !isSelected(item.id) , 'font-semibold' : isSelected(item.id)}">
                {{ item.name }}
              </span>
            </div>

            <span v-show="isSelected(item.id)" class="absolute inset-y-0 right-0 flex items-center pr-4 text-emerald-700">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </span>
          </li>

          <!-- More options... -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    data: Array,
  },
  data() {
    return {
      isOpen: false,
      item:null,
      id:null,
    }
  },
  mounted(){
    document.addEventListener('click', this.clickoutListener);
  },
  methods: {
    isSelected(value) {
     return this.id === value ;
    },
    closeDropdown() {
      this.isOpen = !this.isOpen;
    },

    select(value) {
      this.$emit('valueSelect', value);
      let name = value.name;
      let id = value.id;
      this.item = name;
      this.id = id;
      this.closeDropdown();

    },

    clickoutListener(evt){
      if(!this.$el.contains(evt.target)){
        this.isOpen = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>