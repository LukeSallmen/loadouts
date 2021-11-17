<template>
<div>
  <b-container class="bv-example-row">
  <b-row>
    <b-col>
        <img id='avatar' src='../assets/backpacks.jpg'>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <p>Name: Luke Sallmen</p>
    </b-col>
  </b-row>
   <b-row>
    <b-col>
        <p>Email: lukesallmen@gmail.com</p>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <b-button>Sign Out</b-button>
    </b-col>
  </b-row>
</b-container>
</div>
</template>


<style scoped>
#avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
p {
  margin: 2% 0 2% 0;
}
</style>

<script>
export default {
    name: 'Profile',
}
</script>
