<template>
  <div class="dashboard">
    <div class="sidebar">
      <a href="#foodSubmenu" data-toggle="collapse" aria-expanded="false" class="active" @click="showPage('course')"><h2>Course</h2></a>
      <ul class="collapse lisst-unstyled" id="foodSubmenu">
        <div v-for="category in categoryArray" :key="category">
          <a href="#" class="collapse lisst-unstyled" id="foodSubmenu" @click="showCourse(`${category._id}`)">{{ category.name }}</a>
          <div class="iconClassMain">
            <div class="iconClass">
              <i class="fas fa-trash-alt" @click="deleteCategory(`${category._id}`)"></i>
            </div>
          </div>
        </div>
      </ul>
      <a @click="showPage('profile')" class="sidebarList"><router-link to="">My profile</router-link></a>
      <a @click="showPage('addCourse')" class="sidebarList"><router-link to="">Add course</router-link></a>
      <a data-toggle="modal" data-target="#exampleModal"><router-link to="">Add course category</router-link></a>
      <a ><router-link to="/users" class="sidebarList">Student</router-link></a>
      <a  @click="showPage('addStudent')"><router-link to="" class="sidebarList">Add Student</router-link></a>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="content courseContent" v-if="pageShow === 'course'">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 courseRow" v-for="i in courseArray" :key="i">
          <div class="card coursecard">
            <div class="card-body">
              <h2 class="card-title">{{ i.Title }}</h2>
              <img :src="`http://94.237.3.78/demo_beta/${i.Image}`" class="card-img-top courseContaint"/>
              <p class="card-text">
                {{ Description }}
              </p>
              <h4 class="card-title author">By : {{ i.author }}</h4>
              <h5 class="card-title cost">Cost : {{ i.cost }}</h5>
              <h6 class="card-title duration">Duration : {{ i.duration }}</h6>
              <!-- <h6 class="card-title duration">
                Category : {{ i.cat_id.name }}
              </h6> -->
              <a href="#" class="btn btn-light enroll">EnRoll</a>
              <div class="foot">
                <a class="CourseIconClass" @click="deleteCourse(i._id)"><i class="fas fa-trash-alt" style="font-size: 25px"></i></a>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <a class="CourseIconClass" @click="editCourse(i)"><i class="fas fa-pencil-alt" style="font-size: 25px"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------------- -->
    <div class="content profileContent" v-if="pageShow === 'profile'">
      <section style="background-color: #eee">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style="width: 150px"
                  />
                  <h5 class="my-3">
                    {{ profile.firstName }} {{ profile.lastName }}
                  </h5>
                  <p class="text-muted mb-1">Full Stack Developer</p>
                  <!-- <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">Follow</button>
              <button type="button" class="btn btn-outline-primary ms-1">Message</button>
            </div> -->
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">First Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ profile.firstName }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Last name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ profile.lastName }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ profile.phone }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ profile.email }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Role</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        {{ profile.role[0].roleType }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------- -->
    <div class="content addCourse" v-if="pageShow === 'addCourse'">
      <div class="card text-center courseCard">
        <div class="card-header">
          <h1>Course</h1>
        </div>
        <div class="card-body">
          <form @submit.prevent="adCourse()">
            <div class="form-group row">
              <label for="Title" class="col-sm-2 col-form-label">Category</label>
              <div class="col-sm-10">
                <select name="category" id="category" class="form-control" v-model="formSchema.cat_id">
                  <option value="null" selected>Select Category</option>
                  <option :value="cat._id" v-for="cat in categoryArray" :key="cat">
                    {{ cat.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="Title" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="Title" placeholder="Title" v-model="formSchema.Title" />
              </div>
            </div>
            <div class="form-group row">
              <label for="Description" class="col-sm-2 col-form-label" >Description</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="Description" placeholder="Description" v-model="formSchema.Description" />
              </div>
            </div>
            <div class="form-group row">
              <label for="Image" class="col-sm-2 col-form-label">Image</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" ref="file" @change="selectImage" />
              </div>
            </div>
            <div class="form-group row">
              <label for="duration" class="col-sm-2 col-form-label">duration</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="duration" placeholder="duration" v-model="formSchema.duration" />
              </div>
            </div>
            <div class="form-group row">
              <label for="cost" class="col-sm-2 col-form-label">cost</label>
              <div class="col-sm-10">
                <input type="text"  class="form-control" id="cost"  placeholder="cost" v-model="formSchema.cost" />
              </div>
            </div>
            <div class="form-group row">
              <label for="author" class="col-sm-2 col-form-label">author</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="author" placeholder="author" v-model="formSchema.author" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-light addcoursebtn">
                  {{ !isShowUpdated ? "Add" : "Edit " }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------- -->
    <div class="content addCategory">
      <!-- Button trigger modal -->

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form>
              <div class="form-group">
                <label for="exampleInputPassword1">Category Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Category Name" v-model="catObj.name"/>
              </div>
            </form>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary" @click="addCategory">
                create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------- -->
    <div class="content addStudent" v-if="pageShow === 'addStudent'">
      <div class="card text-center siginCard">
      <div class="card-header">
        <h1 >Add Student </h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="addStudent()">
          <div class="form-group row" >
              <label for="Title" class="col-sm-2 col-form-label"></label>
              <div class="col-sm-10">
                <select name="category" id="category" class="form-control" v-model="userFormSchema.roleId">
                  <option value="null" selected>Select Category</option>
                  <option value="admin" >Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
          <div class="form-group row">
            <label for="firstName" class="col-sm-2 col-form-label">FirstName</label >
            <div class="col-sm-10">
              <input type="text" class="form-control" id="firstName" placeholder="firstName" v-model="userFormSchema.firstName" />
            </div>
          </div>
          <div class="form-group row">
            <label for="lastName" class="col-sm-2 col-form-label">LastName</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="lastName" placeholder="lastName" v-model="userFormSchema.lastName"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Contact</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="phone" placeholder="phone" v-model="userFormSchema.phone"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Email" v-model="userFormSchema.email"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" placeholder="Password" v-model="userFormSchema.password"/>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-light signInSuccess">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import CourseService from "../../service/courseService";
import UserService from '../../service/uesrService'
export default {
  name: "AdminDashboard",
  data() {
    return {
      isShowUpdated: false,
      pageShow: "course",
      courseArray: null,
      categoryArray: [],
      usersArray: null,
      specificCourse: null,
      userdata: null,
      profile: null,
      userId: null,
      courseId:null,
      updateUser:null,
      updateUserId:null,
      userFormSchema: {
        roleId: null,
        firstName: null,
        lastName: null,
        phone: null,
        isLoginEnable:null,
        email: null,
        password: null,
      },
      newUpdatedData: {},
      formSchema: {
        Title: null,
        Description: null,
        Image: null,
        duration: null,
        cost: null,
        author: null,
        cat_id: null,
      },
      courseTempArray: null,
      filterArray: null,
      catObj: {
        name: null,
      },
    };
  },

  methods: {
    selectImage() {
      this.formSchema.Image = this.$refs.file.files.item(0);
      console.log("=======image ====",this.formSchema.Image);
    },

    adCourse(e) {
      if (!this.isShowUpdated) {
        CourseService.addCourse(this.formSchema, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        })
          .then((response) => {
            console.log(response.data);
            alert("Course Added Successfully");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
         CourseService.editCourse( this.courseId,this.formSchema,(event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
          })
          .then((response) => {
            console.log(response.data);
            alert("Course updated Successfully");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      e.preventDefault();
    },

    showPage(event) {
      this.pageShow = event;
      this.getAllCourse();
    },

    showCourse(id) {
      if (this.categoryArray.indexOf(id) === -1) {
        this.filterArray = this.courseTempArray.filter((course) =>
          course.cat_id._id.includes(id)
        );
        this.courseArray = this.filterArray;
        console.log(this.filterArray);
      } else {
        this.filterArray = this.courseTempArray.filter((course) =>
          course.cat_id._id.includes(id)
        );
        this.courseArray = this.filterArray;
      }
    },

    deleteCourse(id) {
      var result = confirm("are you sure want to delete course");
      if (result) {
        CourseService.deleteCourse(id)
          .then((data) => {
            window.location.reload();
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    editCourse(user) {
      this.courseId = user._id
      this.pageShow = "addCourse"; 
      //  var key = Object.keys(this.formSchema);
      //   for(var i=0 ; i<key.length ;i++){
      //   this.newUpdatedData[key[i]] = user[key[i]]
      //   if(key[i]==='cat_id'){
      //   this.newUpdatedData[key[i]] = user[key[i]].name;
      //  }
      // }
      // this.formSchema = this.newUpdatedData
      // this.isShowUpdated = !this.isShowUpdated;

      // --------- or -------------------------------------// 
      for(var key in this.formSchema){
        this.formSchema[key] = user[key]
      }
      this.formSchema['cat_id'] = user[key].name;
      this.isShowUpdated = !this.isShowUpdated;
    },

    getAllCourse() {
      CourseService.getAllCourse()
        .then((responseData) => {
          this.courseArray = responseData.data;
           this.courseTempArray = responseData.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAllCategory() {
      CourseService.getAllCategory()
        .then((responseData) => {
          this.categoryArray = responseData.data;
          // console.log(this.categoryArray);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteCategory(id) {
      var result = confirm("Are you sure want to remove this category ");
      if (result) {
        console.log("=id = = ", id);
        CourseService.deleteCategory(id)
          .then(() => {
            this.getAllCategory();
          })
          .catch((err) => {
            console.log("error = ", err);
          });
      } else {
        console.log("not deleted");
      }
    },

    addCategory(e) {
      CourseService.createCategory(this.catObj)
        .then((categoryData) => {
          alert("successfull", categoryData);
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
        });
      e.preventDefault();
    },

    addStudent(){
      UserService.register(this.userFormSchema).then((userData)=>{
        console.log(userData);
        this.$router.go()
      }).catch(err=>{
        console.log(err)
      })
    },

    getAllUsers(){
       UserService.getAllUsers().then((userdata)=>{
         this.usersArray = userdata.data
      }).catch(err=>{
        console.log(err)
      })
    }
  },

  mounted() {
    this.getAllCourse();
    this.getAllUsers();
    this.getAllCategory();

    this.profile = JSON.parse(localStorage.getItem("userdata"));
    this.userId = this.profile._id;
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
  /* background-color: #ed712e; */
  background-color: whitesmoke;
  color: black;
  position: absolute;
  height: auto;
}
.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar a {
  display: block;
  color: rgb(24, 22, 22);
  padding: 7px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #ed712e;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #ed712e;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: auto;
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
.coursecard{
    box-shadow:5px 0px 5px 0px black;
}
.card-header {
  color: #ed712e;
}
.addcoursebtn {
  background-color: #ed712e;
  color: white;
  margin-left: 8rem;
}
.profileContent {
  height: 55rem;
}
.addCourse {
  height: 55rem;
}
.dashboard .py-5 {
  margin-top: 14px;
}
.dashboard .courseCard {
  margin-top: 14px;
}
.foot {
  background-color: white;
  padding-top: 15px;
  text-align: center;
}
.iconClass {
  float: right;
  cursor: pointer;
  margin-left: 1rem;
}
.iconClassMain {
  float: right;
  margin-top: -2rem;
}
.sidebar .lisst-unstyled {
  background-color: whitesmoke;
  color: rgb(24, 22, 22);
  /* margin-left: -1rem; */
  padding: 5px;
}
.CourseIconClass {
  cursor: pointer;
}
.modal .modal-content form {
  padding: 15px;
}
.signInSuccess {
  background-color: #ed712e;
  color: white;
  margin-left: 8rem;
}
.signInSuccess:hover {
  background-color: #ed712e;
  color: white;
}
/* -----------------------------media query 700------------------------------------------------- */
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
/* -----------------------------media query 400------------------------------------------------- */

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

/* -----------------------------media query 600------------------------------------------------- */

@media only screen and (max-width: 600px) {
  .siginCard {
    width: 100%;
    margin-left: 0rem;
  }
  .addcoursebtn {
    background-color: #ed712e;
    margin-left: 0rem;
  }
  .signInSuccess {
    background-color: #ed712e;
    margin-left: 0rem;
  }
}
/* ---------------------------media query 900  ------------------------------------------------ */
@media screen and (max-width: 900px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
  .courseContaint {
    width: 100%;
    height: 200px;
  }
}
</style>
