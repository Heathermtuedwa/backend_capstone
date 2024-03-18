<template >

<div>
    <h2>User Information</h2>
    <table>
        <thead>
            <tr>
                <th>User ID</th>
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
                <td>{{ user.userID }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.Gender }}</td>
                <td>{{ user.userRole }}</td>
                <td><a :href="user.userProfile">{{ user.userProfile }}</a></td>
                <td>
                  <td>
                   <button class="edit-button" @click="editUser(user.userID)">Edit</button>
                    <button class="delete-button" @click="deleteUser(user.userID)">Delete</button>
                  </td>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
  
  data() {
    return {
      editedUser: { 
        username: '',
        userAge: '',
       Gender:'',
       userRole: ''
      }
    };
  },
  methods:{
     
     deleteUser(userID){
       this.$store.dispatch('deleteUser',userID);
     },
 
     editUser(userID){
      let edit = {
        userID:userID,
        username: this.username,
        userAge: this.userAge,
        Gender: this.Gender,
        userRole: this.userRole
      }
     this.$store.dispatch('editUser', edit)
     console.log(this.$data, edit);
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