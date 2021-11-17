<template>
  <div>
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
      :items="items"
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
    <template #cell(open)>
        <b-button @click="page='list'">Open List</b-button>
      </template>

    </b-table>
    
  </div>
  </div>
</template>

<script>
 export default {
   name: 'Bags',
   data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        fields: [
          {key: 'open', sortable: false},
          { key: 'name', sortable: true },
          { key: 'itemCount', sortable: true },
          { key: 'edited', sortable: true },
        ],
        filter: null,
        filterOn: [],
        items: [
          { name: 'EDC', itemCount: 35, edited: 'Today' },
          { name: 'Travel', itemCount: 29, edited: 'Dec 19th' },
          { name: 'Car', itemCount: 6, edited: 'Yesterday' },
          { name: 'School', itemCount: 15, edited: 'Feb 15' },
          { name: 'Photography', itemCount: 54, edited: 'Dec 19' },
        ],
        page: '',
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
      }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
