<template>
  <div class="main-page">
    <h1>DIKAMPUS</h1>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
    }
  }
</script>
<style>
  .main-page{
    color:black;
  }

</style>
