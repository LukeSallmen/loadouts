<template>
  <div id="App">
     <!-- <nav-bar/> -->
     <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand @click="page=''">Loadouts</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item @click="page='mylists'">My Lists</b-nav-item>
        <b-nav-item @click="page='list'">List</b-nav-item>
        <b-nav-item-dropdown text="Products">
          <b-dropdown-item @click="page='bags'">Bags</b-dropdown-item>
          <b-dropdown-item @click="page='pouches'">Pouches</b-dropdown-item>
          <b-dropdown-item @click="page='wallets'">Wallets</b-dropdown-item>
          <b-dropdown-item @click="page='clothing'">Clothing</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
     
        <b-navbar-nav class="ml-auto">
            <b-nav-item right @click="page='about'">About</b-nav-item>
            <b-nav-item right @click="page='contact'">Contact</b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Username</em>
          </template>
          <b-dropdown-item @click="page='profile'">Profile</b-dropdown-item>
          <b-dropdown-item >Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<h2 id='Page-Title'>{{page.toUpperCase()}}</h2>
    <b-container>
            <about v-if="page==='about'" />
            <bags v-if="page==='bags'" />
            <clothing v-if="page==='clothing'" />
            <contact v-if="page==='contact'"/>
            <home v-if="page===''"/>
            <list v-if="page==='list'" />
            <my-lists v-if="page==='mylists'" />
            <pouches v-if="page==='pouches'" />
            <profile v-if="page==='profile'" />
            <wallets v-if="page==='wallets'" />
        </b-container>
    <my-footer/>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'
import About from './components/About.vue'
import Bags from './components/Bags.vue'
import Clothing from './components/Clothing.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import List from './components/List.vue'
import MyLists from './components/MyLists.vue'
import Pouches from './components/Pouches.vue'
import Profile from './components/Profile'
import Wallets from './components/Wallets.vue'






export default {
  name: 'App',
  components: {
    // NavBar,
    MyFooter,
    About,
    Bags,
    Clothing,
    Contact,
    Home,
    List,
    MyLists,
    Pouches,
    Profile,
    Wallets
  },
  data () {
        return {
            page: '',
            user: {}
        };
    },
}
</script>

<style>
#App {
  margin: 0 auto;
  max-width: 60%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#Page-Title{
  margin: 2% 0 2% 0;
}
</style>
