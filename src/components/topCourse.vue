<template>
  <div class="container-fluid course-container">
    <div class="row">
      <div class="col">
        <div class="card text-center">
          <div class="card-body">
            <h1 class="card-title courseHeading">Best selling</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4" v-for="i in item" :key="i">
        <div class="card course">
          <div class="card-body">
            <h2 class="card-title">{{ i.Title }}</h2>
            <img
              :src="`http://94.237.3.78/demo_beta/${i.Image}`"
              class="card-img-top courseContaint"
            />
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
</template>
<script>
// import axios from "axios";
import CourseService from "../service/courseService";
export default {
  name: "TopCourse",
  data() {
    return {
      courseArray: null,
      item: null,
    };
  },
  mounted() {
    //  axios.get("http://94.237.3.78:4000/api/get_course").then(responseData=>{
    //     this.courseArray = responseData.data
    //     this.item = this.courseArray.slice(0,3)
    //     console.log(this.courseArray)
    //  }).catch(err=>{
    //    console.log(err)
    //  })
    CourseService.getAllCourse()
      .then((responseData) => {
        this.courseArray = responseData.data;
        console.log("TOP COURSE =  ",this.courseArray)
        this.item = this.courseArray.slice(0, 3);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.course {
  box-shadow: 4px 4px 4px 4px black;
  border: 0px white;
}
.card {
  border: 0px white;
  margin-top: 5px;
}
.course-container {
  margin-top: 20px;
}

.courseHeading {
  color: #ed712e;
}
.enroll {
  background: #ed712e;
  pointer-events: none;
  color: white;
}

.row {
  margin-top: 15px;
}
.courseContaint {
  width: 100%;
  height: 200px;
}
</style>
