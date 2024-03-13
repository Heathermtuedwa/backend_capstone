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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    computed:{
        fetchUsers(){

            this.$store.dispatch('fetchUsers')
        }
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
</style>