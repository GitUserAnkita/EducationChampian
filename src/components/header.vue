<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">
              <img class="logoImg" src="https://www.pngall.com/wp-content/uploads/2016/04/Education-Free-PNG-Image.png" alt="" />
              </router-link>
          </li>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/learning" class="nav-link"
                >Self-learning</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/registration" class="nav-link disabled"
                >News</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/registration" class="nav-link disabled" >Contact</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item" v-if="account">
              <router-link to="/registration" class="nav-link"
                ><i class="fas fa-user-alt" style="font-size: 18px; margin-right:5px"></i>Account</router-link >
            </li>
            <li class="nav-item" v-if="logout">
              <router-link to="/home"  class="nav-link" @click="logOut"><i class="fas fa-sign-out-alt" style="font-size: 17px; margin-right:5px;margin-top:2px"></i>Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      logout: false,
      account:true
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("userdata");
      // window.location.reload()
      this.$router.push('/home')
    },
  },
  mounted() {
    const token = localStorage.getItem("userdata");
    if (token) {
      this.logout = !this.logout;
      this.account = !this.account;
    }
  },
};
</script>
<style scoped>
.navbar .navbar-brand {
  color: #ed712e;
}
.logoImg {
  height: 50px;
  margin-top: -30px;
  margin-left: -15px;
}
</style>
