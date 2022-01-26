<template>
    <div class="m-3 overflow-hidden overflow-x-auto">
    <table class="border min-w-full">
      <thead>
        <tr class="p-2 bg-gray-100">
          <th
            class="
              py-3
              px-6
              text-xs
              font-medium
              tracking-wider
              text-left text-gray-700
              uppercase
            "
          >
            #
          </th>
          <th
            class="
              py-3
              px-6
              text-xs
              font-medium
              tracking-wider
              text-left text-gray-700
              uppercase
            "
            v-for="(col, ind) in columns"
            :key="ind"
          >
            <div class="flex justify-between items-center">
                <p>{{ col.text }}</p>
                <template v-if="sort.column === col.name && sort.by === 'asc'">
                    <svg  @click="sort = {column:col.name, by:'desc'}" class="w-3 fill-gray-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"/></svg>
                </template>

                <template v-if="sort.column === col.name && sort.by === 'desc'">
                   <svg @click="sort = {column:col.name, by:''}" class="w-3 fill-gray-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>
                </template>

                <template v-else>
                <svg @click="sort = {column:col.name, by:'asc'}" class="w-3 fill-gray-400 cursor-pointer" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45zm0-384q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"/></svg>             
                </template>
            </div>
            {{sort.by}}
          </th>
        </tr>
            
      </thead>

      <tbody>
        <tr
          class="border-b odd:bg-white even:bg-gray-50"
          v-for="(entry, index) in entries"
          :key="index"
        >
          <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
            {{ entry.id }}
          </td>
          <td
            class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap"
            v-for="(colum, ind) in columns"
            :key="ind"
          >
            {{ entry[colum.name] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  data() {
    return {
      columns: [
        { name: "name", text: "Nome" },
        { name: "office", text: "Profissao" },
        { name: "startData", text: "Data Inicio" },
        { name: "salary", text: "Salário" },
      ],
      entries: [
        {
          id: 1,
          name: "nome 1",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
       
        {
          id: 3,
          name: "nome 3",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
         {
          id: 2,
          name: "nome 2",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
       
        {
          id: 5,
          name: "nome 5",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 6,
          name: "nome 6",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 254,
        },
        {
          id: 7,
          name: "nome 7",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
         {
          id: 4,
          name: "nome 4",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 655,
        },
        {
          id: 8,
          name: "nome 8",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 9,
          name: "nome 9",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 10,
          name: "nome 10",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 11,
          name: "nome 11",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 12,
          name: "nome 12",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 13,
          name: "nome 13",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 14,
          name: "nome 14",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 15,
          name: "nome 15",
          office: "officce 1",
          startData: "2022-01-12",
          salary: 14624,
        },
      ],
      sort:Object,
    };
  },
  mounted() {
      this.sort = [{column:'id', by:'asc'}]
  },


  methods:{
    sortBy(){
        this.entries = this.entries.sort((a, b) => a.name.localeCompare(b.name))
    },

         
  }
};
</script>

<style>
</style>