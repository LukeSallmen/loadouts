<template>
  <div>
    <b-col lg="6" class="my-1">
        <b-form-group
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Search Bags"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
            <span right>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </span>
          </b-input-group>
        </b-form-group>

      </b-col>
    <b-table
    id="aTable"
      :items="gearData.data[1].bags"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
      outlined
      dark
      >
    <template #cell(add)="row">
        <b-button @click="addToList(row.item.item, row.item.brand, row.item.type)">
          Add to List
  </b-button>
      </template>
      <!-- todo: figure out #cell(material)="items" scoped slots -->
      <template >
        <b>{{ gearData.data[1].bags.material[0] }}</b>, <b>{{ material[1] }}</b>
      </template>

    </b-table>
    <b-button @click="addToList('hi', 'sup', 'mammal')">
          Add to List
  </b-button>

  </div>
</template>

<script>

import { loadoutsData } from '../data/LoadoutsData.js'

 export default {
   name: 'Bags',
   data() {
      return {
        sortBy: 'item',
        sortDesc: false,
        fields: [
          {key: 'add', sortable: false},
          { key: 'item', sortable: true },
          { key: 'brand', sortable: true },
          { key: 'capacity', sortable: true },
          { key: 'weight', sortable: true },
          { key: 'material[0]', label: 'Material', sortable: true },
        ],
        filter: null,
        filterOn: [],
        gearData: loadoutsData,
        toAdd: {item: '', brand: '', type: 'gear'}
      }
    },
  props: {
    links: {
      type: Array,
      default: () => []
    }
},
methods: {
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      addToList(item, brand, type) {
        console.log('made it?');
        this.gearData.data[1].bags.push({ item: item, brand: brand, capacity: 25, type: type, weight: 4.3},);
        this.toAdd.item = item;
        this.toAdd.brand = brand;
        this.toAdd.type = type;
        this.gearData.data[0].luke.lists[0].elements.push(this.toAdd);
        // this.gearData.data[0].luke.lists[0].elements.push(this.gearData.data[1].bags[0]);
      }
    },
     mounted () {
        this.gearData.initData();
    }

 }
</script>

<style scoped>
#aTable {
  border-bottom: 1px solid red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
