<template>
  <div class="category-page">
    <div v-if="categoryChosen===true" class="category-options">
      <div class="header">
  			<h1>Kategori</h1>
        <img v-bind:src="'src/assets/icon/baseline_close_24_px.svg'" />
  		</div>
      <!-- <div class="category-list">
        <div class="category" v-on:click="subCategoryChosen=!subCategoryChosen">
          <b>Fashion</b>
        </div>
        <div class="sub-category-list" v-if="subCategoryChosen===true">
          <div class="sub-category">
            <p>Atasan</p>
          </div>
          <div class="sub-category">
            <p>Baju</p>
          </div>
        </div>
      </div> -->
      <div class="category-list" v-for="category in categories">
        <div class="category" v-on:click="category.isActive=!category.isActive">
          <b>{{ category.name }}</b>
          <div class="sub-category-list" v-if="category.isActive===true">
            <div class="sub-category" v-for="subCategory in category.subCategories" v-on:click.prevent.stop="subCategory.isActive=!subCategory.isActive" v-bind:class="{ 'hovered' : subCategory.isActive }">
              <p>{{ subCategory.name }}</p>
            </div>
          </div>
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
        categoryChosen: true,
        subCategoryChosen: false,
        categories: [
          {
            name: 'Fashion',
            isActive: false,
            subCategories: [
              {
                name: 'Bawahan',
                isActive: false
              },
              {
                name: 'Atasan',
                isActive: false
              },
              {
                name: 'Sepatu',
                isActive: false
              },
              {
                name: 'Aksesories',
                isActive: false
              },
              {
                name: 'Jam Tangan',
                isActive: false
              },
              {
                name: 'Tas',
                isActive: false
              }
            ]
          },
          {
            name: 'Kendaraan',
            isActive: false,
            subCategories: [
              {
                name: 'Mobil',
                isActive: false
              },
              {
                name: 'Motor',
                isActive: false
              }
            ]
          },
          {
            name: 'Handmade',
            isActive: false,
            subCategories: [
              {
                name: 'Kerajinan Kayu',
                isActive: false
              },
              {
                name: 'Kerajinan Plastik',
                isActive: false
              },
              {
                name: 'Import',
                isActive: false
              }
            ]
          },
          {
            name: 'Buku',
            isActive: false,
            subCategories: [
              {
                name: 'Fiksi',
                isActive: false
              },
              {
                name: 'Non-fiksi',
                isActive: false
              },
              {
                name: 'Agama',
                isActive: false
              },
              {
                name: 'Majalah',
                isActive: false
              },
              {
                name: 'Buku Pelajaran',
                isActive: false
              }
            ]
          }
        ]
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
  .sub-category-list {
    /* padding: 5px 10px 5px 10px; */
  }
  .sub-category-list .sub-category {
    /* padding: 6px 8px ; */
    padding-left: 6px;
    padding-right: 6px;
    background-color: #ececec;
    border-radius: 12px;
    /* margin-left: 5px; */
    margin-right: 10px;
    margin-top: 10px;
    width: max-content;
    height: 26px;
    clear: none;
    display: inline-block;
  }
  .hovered {
    color: #00d54d;
    background-color: #2e00d54d;
  }
  .sub-category-list .sub-category p {
    display: inline-block;
  }
</style>
