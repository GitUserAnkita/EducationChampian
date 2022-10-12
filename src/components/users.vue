<template>
  <div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content userModal">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Update User</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-light editSuccess">Save change</button>
      </div>
    </div>
  </div>
</div>
<!-- -------------------------------------------------------------------------- -->
      <div class="row userRow">
      <div class="col-sm-12 col-md-6 col-lg-4" v-for="i in userData" :key="i">
        <div class="card users">
          <div class="card-body">
            <h2 class="card-title">{{ i.firstName }} {{i.lastName}}</h2>
            <img
              :src="`https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/unknown-person.png`"
              class="card-img-top courseContaint"
            />
            <h3 class="card-text">
            Email:  {{ i.email }}
            </h3>
            <h4 class="card-title author">Phone No: {{ i.phone }}</h4>
            <h5 class="card-title cost">Role : {{ i.roleId.roleType }}</h5>
          </div>
           <div class="card-footer">
                <a class="userIconClass" @click="deleteuser(i._id)"><i class="fas fa-trash-alt" style="font-size: 25px"></i></a>
                <a class="userIconClass" @click="edituser(i)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-pencil-alt" style="font-size: 25px"></i></a>
              </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------- -->
      
  </div>
</template>
<script>
import UserService from "../service/uesrService";
export default {
  name: "usersComp",
  data() {
    return {
      userData: [],
      tempUserData: null,
      userFormSchema: {
        roleId: null,
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        password: null,
      },
      newUpdatedData:{}
    };
  },
  methods:{
    getalluser(){
        UserService.getAllUsers()
      .then((users) => {
        this.userData = users.data.filter((user) =>
          user.roleId.roleType.includes("user")
        );
      })
      .catch((err) => {
        console.log(err);
      });
    },

    deleteuser(id){
      var result = confirm("Are You Sure Want To Delete")
      if(result){
        UserService.deleteUser(id).then(()=>{
          window.location.reload()
      }).catch(err=>{
        console.log(err)
      })
      }
    },
     edituser(user){
     console.log(user)

       var key = Object.keys(this.userFormSchema);
        for(var i=0 ; i<key.length ;i++){
        this.newUpdatedData[key[i]] = user[key[i]]
        if(key[i]==='roleId'){
        this.newUpdatedData[key[i]] = user[key[i]].roleType;
       }
      }
      this.userFormSchema = this.newUpdatedData
     },

  },
 
  mounted() {
    this.getalluser();
  },
};
</script>
<style scoped>
 .users{
    box-shadow: 5px 5px 5px 5px black;
    margin-top: 15px;
    padding: 5px;
    width: 100%;
 }
 .userIconClass{
   margin-left: 6rem;
   cursor: pointer;
 }
 .userModal .modal-title{
   color: #ed712e;
  }
  .editSuccess{
    background-color: #ed712e;
    color: white;
  }
  .editSuccess:hover{
     background-color: #ed712e;
    color: white;
  }
</style>
