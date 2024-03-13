<template lang="">
  <div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Edit
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
    <div class="mb-3">
      <label for="product-name" class="col-form-label">Product Name:</label>
      <input type="text" class="form-control" id="product-name" v-model="Productname">
    </div>
    <div class="mb-3">
      <label for="product-amount" class="col-form-label">Quantity:</label>
      <input type="text" class="form-control" id="product-amount" v-model="Quantity">
    </div>
    <div class="mb-3">
      <label for="product-amount" class="col-form-label">Product Amount:</label>
      <input type="text" class="form-control" id="product-amount" v-model="Amount">
    </div>
    <div class="mb-3">
      <label for="product-amount" class="col-form-label">Product url:</label>
      <input type="text" class="form-control" id="product-amount" v-model="prodURL">
    </div>
    <div class="mb-3">
      <label for="product-amount" class="col-form-label">description:</label>
      <input type="text" class="form-control" id="product-amount" v-model="description">
    </div>

      </div>
      <div class="modal-footer" v-for ="product in $store.state.Products" v-bind:key="product.ProductsId">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="editproduct(product.ProductsId)">{{ product.ProductsId }}</button> 
        <div>

        </div>
        <!-- v-for ="product in $store.state.Products" v-bind:key="product.ProductsId" -->
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
export default {
    data() {
    return {
      Productname: '',
      Amount: null,
      Quantity:null,
      ProdURL : '',
      description: ''
    };
  },
  methods: {
    editproduct(ProductsId){
      let edit = {
        ProductsId:ProductsId,
        Productname :this.Productname,
        Amount :this.Amount,
        Quantity:this.Quantity,
        ProdUrl : this.ProdURL,
        description:this.description
      }

      console.log(edit)
      this.$store.dispatch('editproduct', edit)
       console.log(this.$data, edit);
    }
  },
  mounted(){
    // this.editproduct('1')
  }
 
}

</script>
<style>
    
</style>