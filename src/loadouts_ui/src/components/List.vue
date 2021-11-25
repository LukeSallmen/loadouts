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
      :items="gearData.data[0].luke.lists[0].elements"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
      outlined
      light
      >
    <template #cell(buy)>
        <b-button href=url>{{buy}}</b-button>
      </template>

    </b-table>
    <b-button block variant="primary" @click="addToList()">Add Item To List</b-button>
  </div>
</template>

<script>

import { loadoutsData } from '../data/LoadoutsData.js'


 export default {
   name: 'Bags',
   data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        fields: [
          {key: 'item', sortable: false},
          { key: 'brand', sortable: true },
          { key: 'type', sortable: true },
          { key: 'capacity', sortable: true },
          { key: 'weight', sortable: true },

        ],
        filter: null,
        filterOn: [],
        // items: [
        //   { item: 'Bag', selection: 'No Escape', price: 450 , buy: "n/a", url: "Discontinued"},
        //   { item: 'Pouch', selection: 'RunOff', price: 25 , buy: "NiteIze", url: 'https://www.niteize.com/product/RunOff-Waterproof-Medium-Travel-Pouch.asp'},
        //   { item: 'Pouch', selection: 'RunOff', price: 25 , buy: "NiteIze", url: 'https://www.niteize.com/product/RunOff-Waterproof-Medium-Travel-Pouch.asp'},
        //   { item: 'Pouch', selection: 'Article 092', price: 180 , buy: "n/a", url: 'https://danmatsuda.com/sample'},
        //   { item: 'Pouch', selection: 'Ultralight Zip Organizer', price: 30 , buy: "Osprey", url: 'https://www.niteize.com/product/RunOff-Waterproof-Medium-Travel-Pouch.asp'},
        //   { item: 'Clothing', selection: 'StrongDarts', price: 220 , buy: "NiteIze", url: 'https://www.niteize.com/product/RunOff-Waterproof-Medium-Travel-Pouch.asp'},
        //   { item: 'Clothing', selection: 'The Standard Crew', price: 30 , buy: "Darn Tough", url: 'https://darntough.com/collections/men/products/mens-merino-wool-the-standard-crew-lightweight-lifestyle-socks'},
        // ],
        gearData: loadoutsData,
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
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      mounted () {
        this.gearData.initData();
    },
    },
    addToList() {
        // Trigger pagination to update the number of buttons/pages due to filtering
        var newItem = {};
        newItem['item']="Item";
        newItem['selection']="Selected";
        newItem['price']=1;
        newItem['buy']="Free";
        newItem['url']="google.com";
        this.items.push[newItem];
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
