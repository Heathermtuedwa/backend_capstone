<template>
  
  <NavbarComp/>
  <SpinnerComp/>
  <FooterComp/>
  
<router-view/>
</template>
 
 
 
 <script>
 import FooterComp from './components/FooterComp.vue';
 import NavbarComp from './components/NavbarComp.vue';
 import SpinnerComp from './components/SpinnerComp.vue';
 export default{
   components : {
     FooterComp,
     NavbarComp,
     SpinnerComp,
   
   }
 }
 </script>
 <style>
 
 
 </style>
 