<template>
  <div class="hello">
    <BannerComp/>
    <TopCourse/>
   <NewsComp/>
    </div>
</template>

<script>
import BannerComp from './banner.vue';
import TopCourse from './topCourse.vue';
import NewsComp from './News.vue';
export default {
  name: 'HomeComp',
  components:{
    BannerComp,
    TopCourse,
    NewsComp,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
