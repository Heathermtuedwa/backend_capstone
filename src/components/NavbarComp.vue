<template >
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

 
</style>