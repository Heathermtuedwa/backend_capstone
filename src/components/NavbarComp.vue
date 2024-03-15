<template >
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
  </div>

    <nav >
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/Products">Products</router-link>|
    <router-link to="/Checkout">Checkout</router-link>|
    <router-link to="/Admin">Admin</router-link>|
      <router-link to="/user">Users</router-link>|
    <router-link to="/Contact">Contact</router-link>|

  </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
nav {
  padding: 40px 0;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* position: absolute; */
 

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
 
}

nav a:hover {
  color:dark grey; 
  background-color:rgb(116, 111, 111);
  border-radius: 30px;
  
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
  background-color: #9b4a4a;
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
  background-color: #643b3b;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
.user-icon {
  width: 20px; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
}

 
</style>