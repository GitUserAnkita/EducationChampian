<template>
  <div class="signinClass">
    <div class="card text-center siginCard">
      <div class="card-header">
        <h1 v-text="!type ? 'SignIn' : 'SignUp'"></h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="onsubmit()">
          <div class="form-group row"  v-if="type">
              <label for="Title" class="col-sm-2 col-form-label"></label>
              <div class="col-sm-10">
                <select name="category" id="category" class="form-control" v-model="formSchema.roleId">
                  <option value="null" selected>Select Category</option>
                  <option value="admin" >Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
          <div class="form-group row" v-if="type">
            <label for="firstName" class="col-sm-2 col-form-label">FirstName</label >
            <div class="col-sm-10">
              <input type="text" class="form-control" id="firstName" placeholder="firstName" v-model="formSchema.firstName" />
            </div>
          </div>
          <div class="form-group row" v-if="type">
            <label for="lastName" class="col-sm-2 col-form-label">LastName</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="lastName" placeholder="lastName" v-model="formSchema.lastName"/>
            </div>
          </div>
          <div class="form-group row" v-if="type">
            <label for="phone" class="col-sm-2 col-form-label">Contact</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="phone" placeholder="phone" v-model="formSchema.phone"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Email" v-model="formSchema.email"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" placeholder="Password" v-model="formSchema.password"/>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center" v-if="!type">
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <button
                type="submit"
                class="btn btn-light signInSuccess"
                v-text="!type ? 'SignIn' : 'SignUp'"
              ></button>
            </div>
          </div>
        </form>
        <!-- -------------------------------------------------------------------------------------------------------------------------------- -->
      </div>
      <div class="card-footer text-muted">
        <div class="form_swap" @click="type = !type">
          <span v-if="type">I want to <b>SignIn</b></span>
          <span v-else>I want to <b>SignUp</b></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "../../service/uesrService";
// import TestComp from "../test.vue"
export default {
  name: "SignIn",
  data() {
    return {
      signInShow: false,
      userEmail: "",
      type: false,
      formSchema: {
        roleId: null,
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onsubmit() {
      if (!this.type) {
        UserService.login(this.formSchema)
          .then((loginData) => {
             var user = loginData.data;
             if(user.role[0].roleType === 'admin'){
                localStorage.setItem("userdata",JSON.stringify(user))
                this.$router.push({name:'AdminDashboard'})
             }else{
               localStorage.setItem("userdata",JSON.stringify(user))
               this.$router.push('/userDashboard')
             }
           
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      } else {
        UserService.register(this.formSchema)
          .then((postData) => {
            console.log(postData);
            this.type = !this.type;
            alert("you are register successfully now can login...");
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      }
    },
  },
};
</script>
<style scoped>
.signinClass {
  color: black;
}
.input_alert {
  color: brown;
}
.card-header {
  color: #ed712e;
}
.siginCard {
  width: 60%;
  margin-left: 12rem;
}

.form_swap {
  color: #ed712e;
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

@media only screen and (max-width: 600px) {
  .siginCard {
    width: 100%;
    margin-left: 0rem;
  }
  .signInSuccess {
    background-color: #ed712e;
    margin-left: 0rem;
  }
}
</style>
