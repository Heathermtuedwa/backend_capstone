<template >
    <div>
        <div v-if="!loaded" class="loader">
      <div class="loader-spinner"></div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        loaded: false // Initial state: page not loaded
      };
    },
    mounted() {
      // Simulate a 5-second delay before displaying content
      setTimeout(() => {
        // Set loaded to true after 2 seconds
        this.loaded = true;
      }, 2000);
    }
  }

    
</script>
<style >
  .loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3333;
}

/* Spinner element */
.loader-spinner {
  border: 4px solid #565f56; /* Green border */
  border-top: 4px solid #655e54; /* Orange top border */
  border-radius: 50%;
  width: 50px; /* Adjusted spinner dimensions */
  height: 50px;
  animation: spin 1.2s linear infinite; /* Updated animation duration */
}

/* Animation keyframes */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>