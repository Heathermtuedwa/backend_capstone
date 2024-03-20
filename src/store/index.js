import { createStore } from 'vuex'
import axios from 'axios';
const base_URL ='https://backend-capstone-amny.onrender.com'    
// const base_URL ='http://localhost:3307'
import router from '@/router'
import cookies from "vue-cookies"
import sweet from 'sweetalert';
import Swal from 'sweetalert2';
axios.defaults.withCredentials = true

export default createStore({
  state: {
    Admin:null,
    Products:null,
    Checkout:null,
    Users:[],
    singleProduct:null,
    loggedIn:false
  },
  getters: {},
  mutations: {
    setAdmin(state,data){
      state.Admin = data;
    },
    setProducts(state, data){
      state.Products = data;
    },
    setCheckout(state,data){
      state.Checkout = data;
    },
    setUser(state,data){
      state.Users = data;
    },
    setsingleProduct(state,data){
      state.singleProduct = data
    },
    setLogged(state,data){
      state.loggedIn = data
    }
  },
  actions: {
    async fetchproducts({commit}){
      try{
        const data = await axios.get(`${base_URL}/products`);
        console.log(data);
        if (data){
            commit('setProducts',data.data);
        }
      }catch(e){
        sweet({
          titel:"ERROR",
          text:"An error has occurred while fetching products",
          icon:"error",
          timer:2000,
        })
      }
    },
    async deleteProduct({ commit }, productId) {
      try {
          // Show confirmation dialog using SweetAlert
          const result = await Swal.fire({
              icon: 'warning',
              title: 'Are you sure?',
              text: 'You are about to delete this product. This action cannot be undone.',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Yes, delete it!'
          });
  
          if (result.isConfirmed) {
              await axios.delete(`${base_URL}/products/${productId}`);
  
              // Show success message using SweetAlert
              Swal.fire({
                  icon: 'success',
                  title: 'Product Deleted',
                  text: 'The product has been successfully deleted.',
                  showConfirmButton: false,
                  timer: 1500 // Automatically close the alert after 1.5 seconds
              });
  
              // Optionally, you can commit mutations or perform other actions here
              // Reload the page after deleting the product (optional)
              // window.location.reload();
          }
      } catch (error) {
          console.error('Error deleting product:', error);
  
          // Show error message using SweetAlert
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to delete product. Please try again later.',
          });
      }
  },
    async addproduct({commit},productsId){
      await axios.post(`${base_URL}/products/${productsId}`)
      window.location.reload()
      //reloads the page 
    },
    async editproduct({commit},products){
      console.log("ohk");
      
      await axios.patch(`${base_URL}/products/${products.ProductsId}`, products)
      // await dispatch(fetchproducts)
      // console.log(update)
      window.location.reload()
    },
    async fetchUsers ({commit}){
      let{data} = await axios.get(`${base_URL}/user`)
      console.log(data)
      commit('setUser',data)
    },
     async fetchproduct({commit},productsId){
      console.log('This is inside the fetch:'+productsId);
      let {data} =  await axios.get(`${base_URL}/products/`+productsId)
      console.log(data)
      commit('setsingleProduct',data)
     },
     async registerUser({ commit }, newUser) {
      try {
          console.log(newUser);
          let { data } = await axios.post(`${base_URL}/user`, newUser);
  
          // Show success message using SweetAlert
          Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              text: data.msg,
              showConfirmButton: false,
              timer: 1500 // Automatically close the alert after 1.5 seconds
          });
  
          // Optionally, you can commit mutations or perform other actions here
  
          // You may want to redirect the user to another page after successful registration
          // await router.push('/login');
      } catch (error) {
          console.error('Error registering user:', error);
  
          // Show error message using SweetAlert
          Swal.fire({
              icon: 'error',
              title: 'Registration Failed',
              text: 'Failed to register user. Please try again later.',
          });
      }
  },  
     async loginUser({ commit }, currentUser) {
      try {
          console.log(currentUser);
          let { data } = await axios.post(`${base_URL}/login`, currentUser);

          $cookies.set('jwt', data.token);
          commit('setLogged', true);
  
    
          // Show success message using SweetAlert
          Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: data.msg,
              showConfirmButton: false,
              timer: 1500 // Automatically close the alert after 1.5 seconds
          });
        
          commit('setLogged', true);
          await router.push('/');
      } catch (error) {
          console.error('Error logging in:', error);
  
          // Show error message using SweetAlert
          Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'Failed to log in. Please check your try again.',
          });
      }
  },
    async editUser({commit},Users){
      // await axios.patch(`${base_URL}/user/${Users.UserId}`,Users)
      await axios.patch(base_URL +`/user/${Users.userID}`,Users)

      window.location.reload()

    },
    async deleteUser({ commit }, UserId) {
      try {
          // Show confirmation dialog using SweetAlert
          const result = await Swal.fire({
              icon: 'warning',
              title: 'Are you sure?',
              text: 'You are about to delete this user. This action cannot be undone.',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Yes, delete it!'
          });
  
          if (result.isConfirmed) {
              await axios.delete(`${base_URL}/user/${UserId}`);
  
              // Show success message using SweetAlert
              Swal.fire({
                  icon: 'success',
                  title: 'User Deleted',
                  text: 'The user has been successfully deleted.',
                  showConfirmButton: false,
                  timer: 1500 // Automatically close the alert after 1.5 seconds
              });
  
              // Optionally, you can commit mutations or perform other actions here
              // Reload the page after deleting the user (optional)
              // window.location.reload();
          }
      } catch (error) {
          console.error('Error deleting user:', error);
  
          // Show error message using SweetAlert
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to delete user. Please try again later.',
          });
      }
  },
  async addtoCart({ commit }, productsId) {
    try {
      const response = await axios.post(`${base_URL}/addToCart`, { productsId });
      // Display a SweetAlert confirmation
      swal({
        title: "Product Added to Cart!",
        text: "Your selected product has been added to the cart.",
        icon: "success",
        button: "OK",
      });
    } catch (error) {
      // Handle errors appropriately
      console.error("Error adding product to cart:", error);
      swal({
        title: "Error",
        text: "There was an error adding the product to the cart",
        icon: "error",
        button: "OK",
      });
    }
  },
  async fetchCart({ commit }, productsId) {
    try {
      console.log('This is inside the fetch:', productsId);
      const { data } = await axios.get(`${base_URL}/cart/${productsId}`);
      console.log(data);
      commit('setCheckout', data);
    } catch (error) {
      console.error('Error fetching cart:', error);
      // Handle error as needed
    }
  }
},

   
    
    modules: {
    }
  })
  
