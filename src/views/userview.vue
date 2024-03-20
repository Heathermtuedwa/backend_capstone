<template >
 
  

    <h2>User Information</h2>
    <table>
      <thead>
        <tr>
          <th>UserID</th>
          <th>Username</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Profile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in $store.state.Users" :key="user.userID">
          <!-- <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true"> -->
    <!-- <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editUserModalLabel">Edit User Information</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="username" class="col-form-label">Username:</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="mb-3">
              <label for="userAge" class="col-form-label">User Age:</label>
              <input type="text" class="form-control" id="userAge" v-model="userAge">
            </div>
            <div class="mb-3">
              <label for="userRole" class="col-form-label">User Role:</label>
              <input type="text" class="form-control" id="userRole" v-model="userRole">
            </div>

            <div class="mb-3">
              <label for="gender" class="col-form-label">Gender:</label>
              <select class="form-select" id="gender" v-model="Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="profile" class="col-form-label">Profile:</label>
              <input type="text" class="form-control" id="userRole" v-model="Profile">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="editUser(user.userID)">Save Changes</button>
        </div>
      </div>
    </div> -->
  <!-- </div> -->
  
          <td>{{ user.userID }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.userRole }}</td>
          <td><a :href="user.userProfile">{{ user.userProfile }}</a></td>
          <td>
            <td>
              <!-- <button class="edit-button" @click="editUser(user.userID)">Edit</button> -->
              <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUserModal" data-bs-whatever="@mdo" >Edit</button> -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + user.userID">
Edit
</button>
              <div class="modal fade" :id="'exampleModal' + user.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
    <div class="mb-3">
      <label for="product-name" class="col-form-label">Product Name:</label>
      <input type="text" class="form-control" id="product-name" v-model="username">
    </div>
    <div class="mb-3">
      <label for="product-amount" class="col-form-label">Quantity:</label>
      <input type="text" class="form-control" id="product-amount" v-model="userAge">
    </div>
    <div class="mb-3">
      <label for="product-amount" class="col-form-label">Product Amount:</label>
      <input type="text" class="form-control" id="product-amount" v-model="Gender">
    </div>
    <div class="mb-3">
      <label for="product-amount" class="col-form-label">Product url:</label>
      <input type="text" class="form-control" id="product-amount" v-model="userRole">
    </div>

      </div>
      <div class="modal-footer" >
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="editUser(user.userID)">Confirm</button> 
        <div>

        </div>
        <!-- v-for ="product in $store.state.Products" v-bind:key="product.ProductsId" -->
      </div>
    </div>
  </div>
</div>
              <button class="delete-button" @click="deleteUser(user.userID)">Delete</button>
                  </td>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>
export default {
  
  data() {
    return {
      userID: null,
      username: '',
      userAge: '',
      Gender:'',
      userRole: ''
    };
  },
  methods:{
     
     deleteUser(userID){
       this.$store.dispatch('deleteUser',userID);
     },
 
     editUser(userID){
      let edit = {
        userID: userID,
        username: this.username,
        userAge: this.userAge,
        Gender: this.Gender,
        userRole: this.userRole
      }
     this.$store.dispatch('editUser', edit)
    //  console.log(this.$data, edit);
   }
     },
    computed:{
        fetchUsers(){

            this.$store.dispatch('fetchUsers')
        },
        

    },
    mounted(){
      
        this.fetchUsers

    }
    
}
</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

.edit-button,
    .delete-button {
        padding: 8px 12px;
        margin-right: 5px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
        font-weight: bold;
    }

    .edit-button {
        background-color: #2ecc71; /* Green */
        color: white;
    }

    .delete-button {
        background-color: #e74c3c; /* Red */
        color: white;
    }

    /* Hover effect for the buttons */
    .edit-button:hover,
    .delete-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
</style>