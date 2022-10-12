<template>
     <div id="app">

<footer class="page-footer font-small special-color-dark pt-4">
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/" class="edu-link"> Education champian</a>
  </div>
</footer>
    <div class="container mt-3">
      <!-- <router-view /> -->
    </div>
  </div> 
</template>
<script>
export default {
    name:"FooterComp"
}
</script>
<style scoped>
footer{
    margin-top: 10px;
    background: #111111;
    /* position: -ms-page;
    bottom: 0%; */
    width: 100%;

}
.footer-copyright {
    color:#ED712E;;
}
.edu-link{
    color: white;
}
</style>
