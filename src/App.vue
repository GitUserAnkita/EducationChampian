<template>
  <div id='app'>
    <HeaderComp />
    <!-- <HomeComp/> -->
   <FooterComp />
  </div>
   
</template>

<script>
import HeaderComp from "./components/header.vue";
import FooterComp from "./components/footer.vue";
// import HomeComp from "./components/Home.vue"
export default {
  name: "app",
  components: {
    HeaderComp,
    FooterComp,
    // HomeComp
  },
};
</script>
<style scoped>
/* body { 
    background: linear-gradient(101.08deg, #343a40 -2.12%, #343a40 67.45%); 
    background-image: url("https://c4.wallpaperflare.com/wallpaper/568/232/7/texture-simple-dark-simple-background-wallpaper-preview.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    }  */
body {
  background: whitesmoke;
}
</style>
