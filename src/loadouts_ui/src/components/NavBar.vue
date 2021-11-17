<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand @click="page='home'">Loadouts</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item @click="page='bags'">My Lists</b-nav-item>
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
          <b-dropdown-item>Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            page: '',
        };
    },
}
    </script>