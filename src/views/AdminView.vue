<template>
 <div class="admin-table">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Image</th>
                <th>description</th>
                 
            </tr>
        </thead>
        <tbody>
            <tr v-for ="product in $store.state.Products" v-bind:key="product.ProductsId">
                <td>{{product.ProductsId }}</td>
                <td>{{ product.Productname }}</td>
                <td>{{product.Quantity  }}</td>
                <td>R{{ product.Amount }}</td>
                <td><img :src ="product.prodURL" alt ="product image" style="width: 50px; height:50px"></td>
                <td>{{product.description  }}</td>
                <td>
                <!-- <button @click="editproduct(product.ProductsId)">Edit</button> -->
                <modal/>

                <button @click ="deleteproduct(product.ProductsId)">Delete</button>

                </td>

            </tr>
        </tbody>
    </table>
 </div>
   
  </template>

        

<script>
import modal from '@/components/modalComp.vue'
export default {
    components:{
       modal,
    
    },

    data() {
    return {
      editedProduct: { 
        Productname: '',
        Amount: '',
        Quantity:'',
        description: ''
      }
    };
  },
    
    methods:{
     
    deleteproduct(ProductsId){
      this.$store.dispatch('deleteproduct',ProductsId);
    },

    editproduct(ProductsId){
     let edit = {
       ProductsId:ProductsId,
       Productname: this.Productname,
       Amount: this.Amount,
       Quantity: this.Quantity,
       description: this.Description
     }
    this.$store.dispatch('editproduct', edit)
    console.log(this.$data, edit);
  }
    },
    computed: {
        fetchproducts(){          
                    this.$store.dispatch('fetchproducts')
                    }
    },
    mounted() {
                    this.fetchproducts
    },
        
      }

</script>
<style scoped>
.admin-table {
  margin-top: 20px;
  width: 100%;
}

.admin-table table {
  width: 100%;
  border-collapse: collapse;
}

.admin-table th, .admin-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.admin-table th {
  background-color: #f2f2f2;
}

.admin-table tbody tr:hover {
  background-color: #f5f5f5;
}

.admin-table .edit-btn, .admin-table .delete-btn {
  padding: 6px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.admin-table .edit-btn {
  background-color: #4CAF50;
  color: white;
}

.admin-table .edit-btn:hover {
  background-color: #45a049;
}

.admin-table .delete-btn {
  background-color: #f44336;
  color: white;
}

.admin-table .delete-btn:hover {
  background-color: #da190b;
}

</style>