import { createStore } from 'vuex'
import axios from 'axios';
const base_URL ='https://backend-capstone-amny.onrender.com'
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
  async deleteproduct({commit},productsId){
      await axios.delete(`${base_URL}/products/${productsId}`);
      window.location.reload()
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
    async registerUser ({commit},newUser){
      console.log(newUser);
      let{data} = await axios.post(`${base_URL}/user`,newUser)
      alert(data.msg)
      window.location.reload()
     },
     async loginUser ({commit},currentUser){
      let{data} = await axios.post(`${base_URL}/login`,currentUser)
      console.log(currentUser);
     $cookies.set('jwt',data.token)
     alert(data.msg)
     commit('setLogged',true)
     await router.push('/')
      window.location.reload()    
    }
     

      },
   
    
    modules: {
    }
  })
  
