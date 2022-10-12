<template>
  <div class="container-fluid News-container">
    <div class="row">
      <div class="col">
        <div class="card text-center">
          <div class="card-body">
            <h1 class="card-title newsHeding">Letest News</h1>
          </div>
        </div>
      </div>
    </div>


<div class="row">
  <div class="col-sm-4">
    <div class="card News">
      <div class="card-body">
           <h5 class="card-title">Top News</h5>
      <img src="https://www.ourcampus.co.uk/wp-content/uploads/2019/09/blog-banner10.jpg" class="newsContaint" alt="">
        <p class="card-text newsText">With supporting text below as a natural lead-in to additional content.</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card News">
      <div class="card-body">
            <h5 class="card-title">Top News</h5>
       <img src="https://leverageedu.com/blog/wp-content/uploads/2021/08/Importance-of-Higher-Education.png" class="newsContaint" alt="">
        <p class="card-text newsText">With supporting text below as a natural lead-in to additional content.</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
   <div class="col-sm-4">
    <div class="card News">
      <div class="card-body">
            <h5 class="card-title">Top News</h5>
        <img src="https://www.newcastle.gov.uk/sites/default/files/styles/max_2600x2600/public/images/news/hands%20face%20space.png?itok=AXL0amxM" class="newsContaint" alt="">
        <p class="card-text newsText">With supporting text below as a natural lead-in to additional content.</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: "NewsComp",
};
</script>
<style scoped>
.card{
  border: 0px white;
  margin-top: 5px;
   
}
.News-container{
  margin-top: 20px;
   border: 0px white;
}

.News {
    background: whitesmoke;
    border-radius: 25px;
    border: 0px white;
}
.card-text{
  align-content: center;
}
.newsContaint{
  width: 100%;
  height: 350px;
}
.newsHeding {
  color: #ED712E;
}
.newsText{
  color: #ED712E; 
}
</style>
