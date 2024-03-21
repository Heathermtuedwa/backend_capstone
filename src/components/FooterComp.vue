<template>
    <footer class="footer">
      <p>&copy; {{ currentYear }} Royal</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  }
  </script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #a6afb4;
  padding: 0%;
  text-align: center;
  height:3%;
}


    
</style>