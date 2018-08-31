<template>
  <div class="category-page">
    <div v-if="categoryChosen===false" class="category-options">
      <div class="header">
  			<h1>Kategori</h1>
        <img class="x-button" v-bind:src="'src/assets/icon/baseline_close_24_px.svg'" />
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
      <div class="category-list">
        <div class="category"  v-for="category in categories" v-on:click="category.isActive=!category.isActive">
          <b>{{ category.name }}</b>
          <div class="sub-category-list" v-if="category.isActive===true" >
            <div class="sub-category" v-for="subCategory in category.subCategories" v-on:click="categoryChosen=true" v-bind:class="{ 'hovered' : subCategory.isActive }">
              <p>{{ subCategory.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="category-results">
      <div class="header">
        <img class="back-button" v-bind:src="'src/assets/icon/outline_arrow_back_24_px.svg'" v-on:click="categoryChosen=false"/><br><br>
        <h1>Sepatu</h1>
  		</div>
      <div class="catalog-container">
        <div class="filter">
          <div class="filter-list" v-for="filter in filters">
            <p>{{ filter }}</p>
          </div>
        </div>
        <div class="catalog-list">
          <!-- <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex md6 v-for="catalog in catalogs"> -->

                <div class="catalog" v-for="catalog in catalogs">
                  <center>
                    <img v-bind:src="'src/assets/product-img/product.png'" />
                  </center>
                  <b class="product-price">Rp {{catalog.price}}</b>
                  <p class="product-name">{{catalog.name}}</p>
                  <p class="product-seller">{{catalog.seller}}</p>
                </div>
              <!-- </v-flex>
            </v-layout>
          </v-container> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vuetify from 'vuetify';
  import VGrid from 'vuetify';
  // import VContainer from 'vuetify';
  // import VLayout from 'vuetify';
  // import VFlex from 'vuetify';

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
        ],
        filters: ['Sneakers', 'Sepatu Futsal', 'Sepatu Formal', 'Sepatu Sendal', 'Sendal'],
        catalogs: [
          {
            name: 'Nike Air Huarache Drift Breathe Running Shoes',
            price: '1.799.000',
            seller: 'Dikampus Shoes'
          },
          {
            name: 'Nike Air Huarache Drift Breathe Running Shoes',
            price: '1.799.000',
            seller: 'Dikampus Shoes'
          },
          {
            name: 'Nike Air Huarache Drift Breathe Running Shoes',
            price: '1.799.000',
            seller: 'Dikampus Shoes'
          },
          {
            name: 'Nike Air Huarache Drift Breathe Running Shoes',
            price: '1.799.000',
            seller: 'Dikampus Shoes'
          },
          {
            name: 'Nike Air Huarache Drift Breathe Running Shoes',
            price: '1.799.000',
            seller: 'Dikampus Shoes'
          },
          {
            name: 'Nike Air Huarache Drift Breathe Running Shoes',
            price: '1.799.000',
            seller: 'Dikampus Shoes'
          }
        ]
      }
    },
    components: {
      Vuetify,
      VGrid
     // 'v-container' : VContainer,
     //  'v-layout': VLayout,
     //  'v-flex': VFlex
    }
  }
</script>

<style>
  .header {
    text-align: center;
    padding: 17px 24px;
    height: 108px;
    /* display: flex; */
    /* align-items: baseline; */
    border-bottom: 1px solid #dddddd;
  }
  .header h1 {
    font-size: 30px;
    font-weight: 900;
    float: left;
    display: inline;
  }
  .header .x-button {
    float: right;
    margin-top: 10px;
  }
  .header .back-button {
    float: left;
    /* margin-top: 10px; */
  }
  .category-list {
    height: 596px;
    overflow: auto;
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
  .sub-category p {
    display: inline-block;
  }
  .catalog-container {
    height: 532px;
  }
  .filter {
    width: 360px;
    height: 10%;
    padding-top: 12px;
    padding-bottom: 12px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .filter-list {
    /* padding: 6px 8px ; */
    padding-left: 6px;
    padding-right: 6px;
    background-color: #ececec;
    border-radius: 12px;
    margin-left: 10px;
    margin-right: 10px;
    /* margin-top: 10px; */
    width: max-content;
    height: 26px;
    clear: none;
    display: inline-block;
  }
  .catalog-list {
    height: 90%;
    /* padding: 26px 18px 26px 18px; */
    /* padding-left: 25px;
    padding-right: 25px; */
    justify-content: center;
    align-content: center;
    overflow-y: auto;
  }
  .catalog {
    height: 264px;
    width: 145px;
    margin-left: 12px;
    margin-right: 12px;
    clear: none;
    display: inline-block;
  }
  .catalog .product-price {
    font-size: 16px;
  }
  .catalog .product-name {
    font-size: 14px;
  }
  .catalog .product-seller {
    font-size: 12px;
    color: #888888;
  }
  .catalog p {
    margin: 0;
  }
</style>
