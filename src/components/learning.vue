<template>
  <div>
    <div class="sidebar">
      <!-- <div class="just-padding">
        <h2 style="color:white;">CATEGORIES</h2>
        <div class="list-group list-group-root well categoryList"  v-for="item in category" :key="item">
          <a :href="`${item._id}`" class="list-group-item categoryList" data-toggle="collapse">
            <i class="glyphicon glyphicon-chevron-right"></i>{{ item.name }}
          </a>
          <div class="list-group collapse categoryList" :id="`${item._id}`">
            <a href="#item-1-1" class="list-group-item categoryList" data-toggle="collapse">
              <i class="glyphicon glyphicon-chevron-right"></i>Item 1.1
            </a>
            <a href="#item-1-2" class="list-group-item categoryList"  data-toggle="collapse">
              <i class="glyphicon glyphicon-chevron-right"></i>Item 1.2
            </a>
            <a href="#item-1-3" class="list-group-item categoryList" data-toggle="collapse">
              <i class="glyphicon glyphicon-chevron-right"></i>Item 1.3
            </a>
          </div>
        </div>
      </div> -->
      <ul class="list-group">
          <h3 style="color:white;">CATEGORIES</h3>
        <li class="list-group-item categoryList"  v-for="item in category" :key="item">{{item.name}}</li>\
     </ul>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="content">
      <div class="row">
        <div class="col-sm-4 courseRow" v-for="i in courseArray" :key="i">
          <div class="card course">
            <div class="card-body">
              <h2 class="card-title">{{ i.Title }}</h2>
              <img :src="`http://94.237.3.78/demo_beta/${i.Image}`" class="card-img-top courseContaint" />
              <p class="card-text">
                {{ Description }}
              </p>
              <h4 class="card-title author">By : {{ i.author }}</h4>
              <h5 class="card-title cost">Cost : {{ i.cost }}</h5>
              <h6 class="card-title duration">Duration : {{ i.duration }}</h6>
              <a href="#" class="btn btn-light enroll">EnRoll</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------- -->
  </div>
</template>
<script>
import CourseService from "../service/courseService";
export default {
  name:"selfLearningComp",
  data() {
    return {
      courseArray: null,
      userdata: null,
      profile: null,
      userId: null,
      category: null,
    };
  },
  mounted() {
    CourseService.getAllCourse()
      .then((responseData) => {
        this.courseArray = responseData.data;
      })
      .catch((err) => {
        console.log(err);
      });

    CourseService.getAllCategory()
      .then((catData) => {
        this.category = catData.data;
        console.log(catData);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  },
};
</script>
<style scoped>
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}
.row {
  margin-top: 5px;
}
.sidebar {
  margin-top: 13px !important;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #ed712e;
  position: absolute;
  height: 90%;
  overflow: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;
}
.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #292828;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #292828;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
}

.enroll {
  background: #ed712e;
  width: 100%;
  color: white;
}
.enroll:hover {
  background: #ed712e;
  color: white;
}
.courseContaint {
  width: 100%;
  height: 200px;
}
.courseRow {
  margin-top: 5px;
}
.categoryList {
  background: #ed712e;
  color: white;
}
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
   
