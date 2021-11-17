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
      :items="gearData.data[1].clothing"
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

    </b-table>

    
  </div>
</template>

<script>

import { loadoutsData } from '../data/LoadoutsData.js'


 export default {
   name: 'Clothing',
   data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        fields: [
          {key: 'add', sortable: false},
          { key: 'item', sortable: true },
          { key: 'brand', sortable: true },
          { key: 'article', sortable: true },
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
        // this.gearData.data[0].luke.lists[0].elements.push({ item: 'No Escape', brand: 'Mystery Ranch', capacity: 25, type: 'bag'},);
        this.toAdd.item = item;
        this.toAdd.brand = brand;
        this.toAdd.type = type;
        this.gearData.data[0].luke.lists[0].elements.push(this.toAdd);
        // this.gearData.data[0].luke.lists[0].elements.push(this.gearData.data[1].bags[0]);
      },
    //   addToList() {
    //         console.log(`CAUGHT: add new item ${newLink.name} to ${this.allLinks.data[index].title}`);
    //         this.allLinks.addLink(index, newLink);
    //     }
     },
     mounted () {
        this.gearData.initData();
        // this.gearData = this.ifClothing(this.gearData);
    },
  // computed: {
  //     ifClothing: function(gearData) {
  //     var clothingGear = [];
  //     console.log("made it here");
  //     for(var i = 0; i < gearData.data[1].clothing.length; i++){
  //       if (gearData.data[1].clothing[i].type != 'clothing'){
  //         clothingGear = gearData.data[1].clothing.splice(i,1)
  //       }
  //     }
  //     console.log("made it here");
  //     gearData = clothingGear;
  //     return gearData 
  //   }
   }
</script>

<style scoped>
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
