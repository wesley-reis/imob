<template>
  <div class="m-3 overflow-hidden overflow-x-auto">
    <div class="flex justify-between items-center mb-2">
      <!-- Number item List -->
      <div class="flex justify-start items-center gap-1">
        <label for="quantItem" class="text-sm text-gray-500"
          >Itens por página:</label
        >
        <select
          @click="limitPage"
          name="quantItem"
          id="quantItem"
          v-model="pageLimit"
          class="
            text-sm text-gray-600
            p-[0.18rem]
            rounded-sm
            border
            outline-none
            focus:border-sky-700
          "
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <!-- Search -->
      <div class="flex justify-start items-center gap-1">
        <label class="text-sm text-gray-500" for="filter-table">Filtro:</label>
        <input
          @input="search"
          class="
            text-sm text-gray-600
            p-1
            rounded-sm
            border
            outline-none
            focus:border-sky-700
          "
          type="text"
          name="filter"
          id="filter-table"
          placeholder="Busca por nome"
          v-model="text"
        />
      </div>
    </div>

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
                <svg
                  @click="sort = { column: col.name, by: 'desc' }"
                  class="w-3 fill-gray-400"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1408 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
                  />
                </svg>
              </template>

              <template v-if="sort.column === col.name && sort.by === 'desc'">
                <svg
                  @click="sort = { column: col.name, by: '' }"
                  class="w-3 fill-gray-400"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1408 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
                  />
                </svg>
              </template>

              <template v-else>
                <svg
                  @click="sort = { column: col.name, by: 'asc' }"
                  class="w-3 fill-gray-400 cursor-pointer"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1408 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45zm0-384q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
                  />
                </svg>
              </template>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="border-b odd:bg-white even:bg-gray-50 data"
          v-for="(entry, index) in entries"
          :key="index"
        >
          <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
            {{ entry.id }}
          </td>
          <td
            v-for="(colum, ind) in columns"
            :key="ind"
            class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap"
            :class="`${colum.name}`"
          >
            {{ entry[colum.name] }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-between items-center mt-2 text-sm text-gray-500">
      <div>
        <p id="registersText"></p>
      </div>
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
          href="#"
          class="
            relative
            inline-flex
            items-center
            px-3
            py-1
            rounded-l-md
            border border-gray-300
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
        >
          <span class="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </a>
        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <a
          href="#"
          aria-current="page"
          class="
            z-10
            bg-indigo-50
            border-indigo-500
            text-indigo-600
            relative
            inline-flex
            items-center
            px-3
            py-2
            border
            text-sm
            font-medium
          "
        >
          1
        </a>
        <a
          href="#"
          class="
            bg-white
            border-gray-300
            text-gray-500
            hover:bg-gray-50
            relative
            inline-flex
            items-center
            px-3
            py-2
            border
            text-sm
            font-medium
          "
        >
          2
        </a>
        <span
          class="
            relative
            inline-flex
            items-center
            px-3
            py-2
            border border-gray-300
            bg-white
            text-sm
            font-medium
            text-gray-700
          "
        >
          ...
        </span>
        <a
          href="#"
          class="
            bg-white
            border-gray-300
            text-gray-500
            hover:bg-gray-50
            hidden
            md:inline-flex
            relative
            items-center
            px-3
            py-2
            border
            text-sm
            font-medium
          "
        >
          8
        </a>
        <a
          href="#"
          class="
            bg-white
            border-gray-300
            text-gray-500
            hover:bg-gray-50
            relative
            inline-flex
            items-center
            px-3
            py-2
            border
            text-sm
            font-medium
          "
        >
          9
        </a>
        <a
          href="#"
          class="
            relative
            inline-flex
            items-center
            px-3
            py-2
            rounded-r-md
            border border-gray-300
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
        >
          <span class="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "DataTable",
  data() {
    return {
      text: "",
      pageLimit:5,
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
          name: "Wesley",
          office: "Developer",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 4,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-12",
          salary: 14624,
        },
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
          name: "Wesley",
          office: "Developer",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 4,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-12",
          salary: 14624,
        },
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
          name: "Wesley",
          office: "Developer",
          startData: "2022-01-12",
          salary: 14624,
        },
        {
          id: 4,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-12",
          salary: 14624,
        },
      ],
      sort: Object,
    };
  },
  mounted() {
    this.sort = [{ column: "id", by: "asc" }];
    this.limitPage();
  },

  methods: {
    search() {
      var trs = document.querySelectorAll(".data");
      console.log(trs.length)
      if (trs.length > 0) {
        for (var i = 0; i < trs.length; i++) {
          var tr = trs[i];
          var tdNome = tr.querySelector(".name");
          var nome = tdNome.innerText;
          var expressao = new RegExp(this.text, "i");

          if (!expressao.test(nome)) {
            tr.classList.add("hidden");
          } else {
            tr.classList.remove("hidden");
          }
        }
      }else {
        for (var j = 0; j < trs.length; j++) {
          tr = trs[j];
          tr.classList.remove("hidden");
        }
      }
    },

    limitPage() {
      var quant = this.pageLimit;
      var trs = document.querySelectorAll(".data");
      var totalRegisters = trs.length;

      if (quant < totalRegisters) {
        for (var i = 0; i < totalRegisters; i++) {
          var tr = trs[i];

          if (i + 1 > quant) {
            tr.classList.add("hidden");
          } else {
            tr.classList.remove("hidden");
          }
        }
      }

      this.numRegisters(totalRegisters, quant);
    },

    numRegisters(totalRegisters, quantPorPage) {
      var registersText = document.querySelector("#registersText");
      if (totalRegisters <= quantPorPage) {
        registersText.textContent =
          totalRegisters + " de " + totalRegisters + " registros";
        return;
      }
      return (registersText.textContent =
        quantPorPage + " de " + totalRegisters + " registros");
    },
  },
};
</script>

<style>
</style>