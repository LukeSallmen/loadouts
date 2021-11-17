<template>
<div>
  <b-container class="bv-example-row">
 <div>
  <b-jumbotron>
    <template #header>LOADOUTS</template>

    <template #lead>
      Create, refine, and share your best gear in different loadouts. In pursuit of better carry and a more equipped world.
    </template>

    <hr class="my-4">
    <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        caption="Share your loadouts with the world"
        text=''
        img-src="../assets/loadout.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Easy to use, just like a Matsuda zipper."
        text=''
        img-src="../assets/zipper.jpg"
      ></b-carousel-slide>

       <b-carousel-slide
        caption="Your favorite gear. We have your GoRucks, your Darn Toughs, and even your Dragons."
        text=''
        img-src="../assets/topo.jpg"
      ></b-carousel-slide>
       
    </b-carousel>

  </div>
  </b-jumbotron>
</div>
</b-container>
</div>
</template>

<style scoped>
 #about-img {
  width: 80%;
  height: auto;
} 
#carousel-1{
    margin: 2% 0 0 0;
}
.carousel-item{
    max-height: 480px;
    max-width: 1024px;
}
</style>

<script>
export default {
    name: 'Home'
}
</script>