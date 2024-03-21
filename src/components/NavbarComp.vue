<template >
    <nav>
<div class="dropdown" v-show="!userRole">
    <img src="https://cdn-thumbs.imagevenue.com/1c/ff/22/ME17RQHY_t.png" alt="User" class="user-icon dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="tooltip">User</span>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <router-link
          to="/login"
          class="text-decoration-none text-white text-center"
        >
          <a class="dropdown-item text-white" href="#">Login</a>
        </router-link>
      </li>
      <li>
        <router-link
          to="/SignUp"
          class="text-decoration-none text-white text-center"
        >
          <a class="dropdown-item text-white" href="#">Sign Up</a>
        </router-link>
      </li>
    </ul>
   
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/Products">Products</router-link>|
    <router-link to="/Checkout">Checkout</router-link>|
    <router-link to="/Admin">Admin</router-link>|
      <router-link to="/user">Users</router-link>|
    <router-link to="/Contact">Contact</router-link>|
    
 </div>

  </nav>

</template>
<script>
export default {
    
}
</script>
<style scoped>
nav {
  padding:20px 0;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #353c41;
  /* position: fixed; */
 

}


.navbar {
  color: #1c2125; /* Dark text color */
  
  
}

nav a{
  margin-right: 15px;
  font-weight: bold;
  text-decoration:none;
  padding:30px;
  color: rgb(48, 35, 35);
  transition: text-decoration 0.3s ease;
 
}

nav a:hover {
  color:dark grey; 
  background-color:rgb(116, 111, 111);
  border-radius: 30px;
  /* text-decoration: underline; */
   
  
}


.navbar-container {
  display: flex;
  align-items: center;
  margin-left: 90%;
}

.dropdown {
  position: relative;

}

.dropdown-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-toggle i {
  margin-right: 5px;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #635858;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #554949;
}

/* .dropdown:hover .dropdown-menu {
  display: block;
} */

.user-icon {
  width: 30px;
  height: auto; 
  /* background-color: #3f4a51  //Maintain aspect ratio */
}


 
</style>