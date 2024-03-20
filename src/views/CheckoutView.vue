<template >
   <div class="cart-table">
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cart in $store.state.Checkout" :key="product.ProductsId">
                <td>
                    <img :src="product.prodUrl" alt="Product Image" style="width: 50px; height: 50px;">
                    <span>{{ product.productName }}</span>
                </td>
                <td>
                    <input type="number" v-model="product.quantity" min="1">
                </td>
                <td>R{{ product.price }}</td>
                <td>R{{ product.quantity * product.price }}</td>
                <td>
                    <button @click="removeFromCart(product.productsId)">Remove</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"><strong></strong></td>
                <td><strong>R{{ total }}</strong></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
</div>
</template>
<script>
export default {
  data() {
    return {
      Product: { 
        Productname: '',
        Amount: '',
        Quantity:'',
        description: ''
      }
    };
  },
  methods:{
     
    addtoCart(ProductsId){
       this.$store.dispatch('addtoCart',ProductsId);
     },
 
  computed:{
        fetchproducts(){

            this.$store.dispatch('fetchproducts')
        }
    },
    mounted(){
      
        this.fetchproducts

    },

   }
}
</script>
<style >
 .cart-table {
  margin-top: 20px;
  width: 100%;
}

.cart-table table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th, .cart-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.cart-table th {
  background-color: #f2f2f2;
}

.cart-table tbody tr:hover {
  background-color: #f5f5f5;
}

.cart-table .edit-btn, .cart-table .delete-btn {
  padding: 6px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.cart-table .edit-btn {
  background-color: #4CAF50;
  color: white;
}

.cart-table .edit-btn:hover {
  background-color: #45a049;
}

.cart-table .delete-btn {
  background-color: #f44336;
  color: white;
}

.cart-table .delete-btn:hover {
  background-color: #da190b;
}
    
</style>