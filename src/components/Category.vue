<template>
  <div class="category-page">
    <div v-if="categoryChosen===true" class="category-options">
      <div class="header">
  			<h1>Kategori</h1>
        <img v-bind:src="'src/assets/icon/baseline_close_24_px.svg'" />
  		</div>
      <div class="category-list">
        <div class="category">
          <b>Sports</b>

        </div>
      </div>
    </div>
    <div v-else class="category-results">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categoryChosen: true
      }
    }
  }
</script>

<style>
  .header {
    text-align: center;
    padding: 17px 24px;
    height: 64px;
    /* display: flex; */
    /* align-items: baseline; */
    border-bottom: 1px solid #dddddd;
  }
  .header h1 {
    font-size: 30px;
    font-weight: 900;
    float: left;
  }
  .header img {
    float: right;
    margin-top: 10px;
  }
  .category {
    padding: 18px 14px 18px 14px;
    border-bottom: 1px solid #dddddd;
  }
</style>
