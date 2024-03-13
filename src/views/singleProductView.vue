<template >
    <div>
        <div class="container"> 
      <div class="wrapper" v-for="product in $store.state.singleProduct" :key="product.productsId">
    <div class="product-img">
      <img :src="product.prodURL" height="420" width="327">
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>{{ product.Productname }}</h1>
        <h2></h2>
        <p>{{ product.description }}</p>
      </div>
      <p><span>R{{ product.Amount }}</span></p>
      <div class="product-price-btn">
        <router-link to="/products" class="nav-link link-light"> <a class="btn btn-light  bg-black text-white m-3 " href="#"
                role="button">Go back</a></router-link>
    </div>
        </div>
    </div>

       </div>
    </div>
</template>
<script>
export default {
   computed:{
    fetchproduct(){
        this.$store.dispatch('fetchproduct',this.$route.params.ProductsId)
    }
   },
   mounted(){
    this.fetchproduct
   }
}
</script>
<style >
    
</style>