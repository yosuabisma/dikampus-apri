<template>
  <div>
    <div v-if="showDetail===false">
      <!--NAVBAR ALL-->
      <div class="all-navbar-content-all">
        <div class="navbar-circle2-all">
        </div>
        <div class="navbar-circle-all">
          <center>
            <img v-bind:src="'src/assets/icon/outline_add_24_px.svg'" style="width:24px;height:24px;" />
          </center>
        </div>
        <div class="navbar-dikampus-all">
          <div class="navbar-content-all">
            <table>
              <tr>
                <td>
                  <img v-bind:src="'src/assets/icon/baseline_menu_24_px.svg'" style="width:24px;height:24px;" />
                </td>
                <td style="width:264px;"></td>
                <td>
                  <img v-bind:src="'src/assets/icon/ic_search.svg'" style="width:24px;height:24px;" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="merchant-products">
        <!--Back Arrow-->
        <div class="top-nav-back-all">
          <div class="back-btn-all">
            <center>
              <img v-bind:src="'src/assets/icon/shape.svg'"  class="img-arrow" />
            </center>
          </div>
        </div>
        <!-- <img v-bind:src="'src/assets/icon/shape.svg'"  class="img-arrow" v-on:click="showDetail=false" /> -->

        <!--MERCHANT-->
        <div class="profile-merchant">
          <center>
            <img v-bind:src="'src/assets/profile-img/'+profile" style="width:64px;height:64px;"/>
            <h1 style="color:#232f34;font-size:20px;margin-top:12px;font-weight:bold;">{{merchantName}}</h1>
          </center>
          <div style="margin-top:9px;font-size:12px;color:#888888;">
            <center>
              <table>
                <tr>
                  <td><img v-bind:src="'src/assets/icon/icon_eye.svg'" style="height:16px;width:16px;" /></td>
                  <td style="width:4px;"></td>
                  <td>Dilihat {{kunjunganShop}} kali</td>
                </tr>
              </table>
            </center>
          </div>
        </div>
        <!--PRODUCT LIST FOR-->
        <div style="margin-top:7px;margin-bottom:100px;">
          <table>
            <tr>
              <td>
                <table>
                  <tr v-for="prod in products" v-if="prod.id%2==1">
                    <td style="padding-top:20px;">
                      <div @click="select(prod.id)">
                        <!-- <div v-if="prod.isSold===true" style="font-size:16px;color:#ffffff;background-size: 150px 170px;background-repeat:no-repeat;-webkit-filter: brightness(40%);filter: brightness(40%);" v-bind:style="{ backgroundImage: 'url(src/assets/product-img/' + prod.photos[0].img + ')' }">
                          <div style="height:170px;width:150px;text-align:center;padding-top:85px;">
                            <font style="font-size:20px;color:#ffffff;">SOLD</font>
                          </div>
                        </div> -->
                        <div v-if="prod.isSold===true" style="position: relative;z-index:-1;width:150px;height:170px;">
                          <img v-bind:src="'src/assets/product-img/'+prod.photos[0].img" height="170px" width="150px" style="position:relative;"/>
                          <img v-bind:src="'src/assets/icon/sold.png'" style="position:absolute;right:0px;" height="170px" width="150px"/>
                        </div>
                        <img v-if="prod.isSold===false" v-bind:src="'src/assets/product-img/'+prod.photos[0].img" width="150px" height="170px"/>
                        <h1 style="font-size:16px;font-weight:bold;color:#222222;margin-top:12px;">Rp {{(prod.harga).toLocaleString('id-ID')}}</h1>
                        <h1 style="font-size:14px;color:#000000;margin-top:6px;">{{prod.name}}</h1>
                        <div style="font-size:12px;color:#888888;margin-top:6px;"><font>{{prod.penjual}}</font></div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td style="width:12px;"></td>
              <td>
                <table>
                  <tr v-for="prod in products" v-if="prod.id%2==0">
                    <td style="padding-top:20px;">
                      <div @click="select(prod.id)">
                        <!-- <div v-if="prod.isSold===true" style="height:170px;width:150px;font-size:16px;color:#ffffff;background-size: 150px 170px;background-repeat:no-repeat;-webkit-filter: brightness(40%);filter: brightness(40%);" v-bind:style="{ backgroundImage: 'url(src/assets/product-img/' + prod.photos[0].img + ')' }">
                          <div style="-webkit-filter:brightness(100%);filter:brightness(100%);text-align:center;padding-top:75px;">
                            <font style="font-size:20px;color:white;">SOLD</font>
                          </div>
                        </div> -->
                        <div v-if="prod.isSold===true" style="position: relative;z-index:-1;width:150px;height:170px;">
                          <img v-bind:src="'src/assets/product-img/'+prod.photos[0].img" height="170px" width="150px" style="position:relative;"/>
                          <img v-bind:src="'src/assets/icon/sold.png'" style="position:absolute;right:0px;" height="170px" width="150px"/>
                        </div>
                        <img v-if="prod.isSold===false" slot="img" v-bind:src="'src/assets/product-img/'+prod.photos[0].img" width="150px" height="170px"/>
                        <h1 style="font-size:16px;font-weight:bold;color:#222222;margin-top:12px;">Rp {{(prod.harga).toLocaleString('id-ID')}}</h1>
                        <h1 style="font-size:14px;color:#000000;margin-top:6px;">{{prod.name}}</h1>
                        <div style="font-size:12px;color:#888888;margin-top:6px;"><font>{{prod.penjual}}</font></div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>


    </div>

    <!--SHOW DETAIL-->
    <div v-if="showDetail===true" class="detail-page">
      <!--NAVBAR-->
      <div class="all-navbar-content">
        <div class="navbar-circle2">
        </div>
        <div class="navbar-circle">
          <center>
            <img v-bind:src="'src/assets/icon/baseline_edit_24_px.svg'" style="width:24px;height:24px;" />
          </center>
        </div>
        <div class="navbar-dikampus">
          <div class="navbar-content">
            <table>
              <tr>
                <td>
                  <img v-bind:src="'src/assets/icon/baseline_share_24_px.svg'" style="width:24px;height:24px;" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="top-nav-back">
        <div class="back-btn">
          <center>
            <img v-bind:src="'src/assets/icon/shape.svg'"  class="img-arrow" v-on:click="showDetail=false" />
          </center>
        </div>
      </div>
      <!-- START - CAROUSEL PRODUCT -->
      <div class="crousel-product-ghost" style="height:360px; width:360px;margin-top:-80px;">
      </div>
      <div class="carousel-product" >
        <b-carousel id="carousel1"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              img-width="360"
              img-height="360"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >
            <b-carousel-slide v-for="pho in products[selected].photos">
              <img slot="img" v-bind:src="'src/assets/product-img/'+pho.img" width="360px" height="360px"/>
            </b-carousel-slide>
        </b-carousel>
      </div>
      <!-- END - CAROUSEL PRODUCT -->

      <!-- START - BUTTON PROMOTION DAN TERJUAL-->
      <div class="btn-grp">
        <table>
          <tr>
            <td>
              <div v-if="showPromote===false" @click="showPromote=true;" class="btn-promote">
                <font style="line-height:30px;">Promote</font><span><img v-bind:src="'src/assets/icon/promote.svg'" style="margin-left:4px;margin-top:-8px;height:24px;width:24px;line-height:30px;"/></span>
              </div>
              <div v-if="showPromote===true" class="btn-promote-outline">
                <font>{{products[selected].promoteDay}}</font>
              </div>
            </td>
            <td>
              <div style="margin-left:16px;">
                <div v-if="products[selected].isSold===false" class="btn-terjual" @click="terjual(selected)">
                  Terjual
                </div>
                <div v-if="products[selected].isSold===true" class="btn-lagi" @click="jualLagi(selected)">
                  Jual Lagi<span><img v-bind:src="'src/assets/icon/jual_lagi.svg'" style="margin-left:4px;margin-top:-8px;" height="24px" width="24px"/></span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <!-- END - BUTTON PROMOTION DAN TERJUAL-->
      <div class="dilihat">
        <center>
          <table>
            <tr>
              <td><img v-bind:src="'src/assets/icon/icon_eye.svg'" style="height:16px;width:16px;" /></td>
              <td style="width:4px;"></td>
              <td>Dilihat {{products[selected].countLihat}} kali</td>
            </tr>
          </table>
        </center>
      </div>
      <!--START - PRODUCT-->
      <h1 class="prod-nm">{{products[selected].name}}</h1>
      <h1 class="prod-sell">{{products[selected].penjual}}</h1>
      <h1 class="prod-prc">Rp {{(products[selected].harga).toLocaleString('id-ID')}}</h1>
      <!--END - PRODUCT-->
      <!--START - KATEGORI PRODUCT-->
      <div class="category">
        <!--Garis Tipis-->
        <div class="thin-line"></div>
        <h1 style="color:#222222;font-size:16px;font-weight:bold;">Kategori Produk</h1>
        <table>
          <tr>
            <td>
              <div class="cat-produk">{{products[selected].kategori}}</div>
            </td>
            <td style="width:8px;"></td>
            <td>
              <div class="cond-produk">{{products[selected].kondisi}}</div>
            </td>
          </tr>
        </table>
      </div>
      <!--END - KATEGORI PRODUCT-->
      <!--START - DESC PRODUCT-->
      <div class="description">
        <!--Garis Tipis-->
        <div class="thin-line"></div>
        <h1 style="color:#222222;font-size:16px;font-weight:bold;">Deskripsi Produk</h1>
        <p style="margin-top:8px;font-size:13px;color:#222222;">
          {{products[selected].description}}
        </p>
      </div>
      <!--END - DESC PRODUCT-->
      <!--START - KIRIM PRODUCT-->
      <div class="ship">
        <!--Garis Tipis-->
        <div class="thin-line"></div>
        <h1 style="color:#222222;font-size:16px;font-weight:bold;">Pilihan Pengiriman Tersedia</h1>
        <table>
          <tr>
            <td>
              <div v-if="products[selected].isMeetup[0].boolean===false" class="pengiriman-btn gray">Meetup</div>
              <div v-if="products[selected].isMeetup[0].boolean===true" class="pengiriman-btn green">Meetup</div>
            </td>
            <td style="width:8px;"></td>
            <td>
              <div v-if="products[selected].isDelivery===false" class="pengiriman-btn gray">Delivery</div>
              <div v-if="products[selected].isDelivery===true" class="pengiriman-btn green">Delivery</div>
            </td>
          </tr>
        </table>
      </div>
      <!--END - KIRIM PRODUCT-->
      <!--START - LOKASI PRODUCT-->
      <div class="desc-loc">
        <!--Garis Tipis-->
        <div class="thin-line"></div>
        <h1 style="color:#222222;font-size:16px;font-weight:bold;margin-bottom:12px;">Lokasi Meetup</h1>
        <table>
          <tr v-if="products[selected].isMeetup[0].boolean===true">
            <td>
              <img v-bind:src="'src/assets/icon/baseline_location_on_24_px.svg'" width="24px" height="24px"/>
            </td>
            <td style="width:12px;"></td>
            <td>
              <div style="font-size:13px;color:#222222;">
                {{products[selected].isMeetup[0].alamat}}
              </div>
            </td>
          </tr>
          <tr v-if="products[selected].isMeetup[0].boolean===true">
            <h1 style="margin-bottom:33px;"></h1>
          </tr>
          <tr v-if="products[selected].isDelivery===true">
            <td>
              <img v-bind:src="'src/assets/icon/baseline_local_shipping_24_px.svg'" width="24px" height="24px"/>
            </td>
            <td style="width:12px;"></td>
            <td>
              <div style="font-size:13px;color:#222222;">
                Penjual menyediakan pengiriman ke alamat kamu
              </div>
            </td>
          </tr>
        </table>
      </div>
      <!--END - LOKASI PRODUCT-->


    </div>
  </div>
</template>
<script>
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
  export default {
    data(){
      return{
        slide: 0,
        sliding: null,
        showPromote:false,
        selected:null,
        showDetail:false,
        profile:"profile_image.svg",
        merchantName:"Dikampus Shop",
        kunjunganShop:2321,
        products:[
          {
            id:1,
            name:"Nike Air Huarache Drift Breathe Running Shoes",
            description:"Vintage sneakers desain colorblock \n Warna biru Mesh upper untuk breathability Foam midsole dengan Air-Sole cushioning Rubber outsole untuk daya tahan dan traksi Tali depan Almond toe",
            photos:[
              {img:"nike.svg"},
              {img:"nike.svg"},
              {img:"nike.svg"}
            ],
            countLihat:2321,
            kategori:"Sepatu",
            kondisi:"Baru",
            penjual:"Dikampus Shoes",
            harga:1799000,
            isMeetup:[
              {boolean:true, alamat:"Jalan Sukabirus no D38, Gang depan Mesjid Istiqomah Sukabirus, Kosan Pak Minto"}
            ],
            isDelivery:true,
            fav:true,
            promoteDay:"6 Hari 21 : 02 : 21",
            isSold:true,
          },
          {
            id:2,
            name:"Nike Air Huarache Drift Breathe Running Shoes",
            description:"Vintage sneakers desain colorblock. Warna biru Mesh upper untuk breathability Foam midsole dengan Air-Sole cushioning Rubber outsole untuk daya tahan dan traksi Tali depan Almond toe",
            photos:[
              {img:"nike.svg"},
              {img:"nike.svg"},
              {img:"nike.svg"}
            ],
            countLihat:2321,
            kategori:"Sepatu",
            kondisi:"Baru",
            penjual:"Dikampus Shoes",
            harga:1799000,
            isMeetup:[
              {boolean:true, alamat:"Jalan Sukabirus no D38, Gang depan Mesjid Istiqomah Sukabirus, Kosan Pak Minto"}
            ],
            isDelivery:true,
            fav:true,
            promoteDay:"6 Hari 21 : 02 : 21",
            isSold:false,
          },
          {
            id:3,
            name:"Nike Air Huarache Drift Breathe Running Shoes",
            description:"Vintage sneakers desain colorblock. Warna biru Mesh upper untuk breathability Foam midsole dengan Air-Sole cushioning Rubber outsole untuk daya tahan dan traksi Tali depan Almond toe",
            photos:[
              {img:"nike.svg"},
              {img:"nike.svg"},
              {img:"nike.svg"}
            ],
            countLihat:2321,
            kategori:"Sepatu",
            kondisi:"Baru",
            penjual:"Dikampus Shoes",
            harga:1799000,
            isMeetup:[
              {boolean:true, alamat:"Jalan Sukabirus no D38, Gang depan Mesjid Istiqomah Sukabirus, Kosan Pak Minto"}
            ],
            isDelivery:true,
            fav:true,
            promoteDay:"6 Hari 21 : 02 : 21",
            isSold:false,
          },
          {
            id:4,
            name:"Nike Air Huarache Drift Breathe Running Shoes",
            description:"Vintage sneakers desain colorblock. Warna biru Mesh upper untuk breathability Foam midsole dengan Air-Sole cushioning Rubber outsole untuk daya tahan dan traksi Tali depan Almond toe",
            photos:[
              {img:"nike.svg"},
              {img:"nike.svg"},
              {img:"nike.svg"}
            ],
            countLihat:2321,
            kategori:"Sepatu",
            kondisi:"Baru",
            penjual:"Dikampus Shoes",
            harga:1799000,
            isMeetup:[
              {boolean:true, alamat:"Jalan Sukabirus no D38, Gang depan Mesjid Istiqomah Sukabirus, Kosan Pak Minto"}
            ],
            isDelivery:true,
            fav:true,
            promoteDay:"6 Hari 21 : 02 : 21",
            isSold:false,
          },
          {
            id:5,
            name:"Nike Air Huarache Drift Breathe Running Shoes",
            description:"Vintage sneakers desain colorblock. Warna biru Mesh upper untuk breathability Foam midsole dengan Air-Sole cushioning Rubber outsole untuk daya tahan dan traksi Tali depan Almond toe",
            photos:[
              {img:"nike.svg"},
              {img:"nike.svg"},
              {img:"nike.svg"}
            ],
            countLihat:2321,
            kategori:"Sepatu",
            kondisi:"Baru",
            penjual:"Dikampus Shoes",
            harga:1799000,
            isMeetup:[
              {boolean:true, alamat:"Jalan Sukabirus no D38, Gang depan Mesjid Istiqomah Sukabirus, Kosan Pak Minto"}
            ],
            isDelivery:true,
            fav:true,
            promoteDay:"6 Hari 21 : 02 : 21",
            isSold:false,
          },
          {
            id:6,
            name:"Nike Air Huarache Drift Breathe Running Shoes",
            description:"Vintage sneakers desain colorblock. Warna biru Mesh upper untuk breathability Foam midsole dengan Air-Sole cushioning Rubber outsole untuk daya tahan dan traksi Tali depan Almond toe",
            photos:[
              {img:"nike.svg"},
              {img:"nike.svg"},
              {img:"nike.svg"}
            ],
            countLihat:2321,
            kategori:"Sepatu",
            kondisi:"Baru",
            penjual:"Dikampus Shoes",
            harga:1799000,
            isMeetup:[
              {boolean:true, alamat:"Jalan Sukabirus no D38, Gang depan Mesjid Istiqomah Sukabirus, Kosan Pak Minto"}
            ],
            isDelivery:true,
            fav:true,
            promoteDay:"6 Hari 21 : 02 : 21",
            isSold:false,
          },

        ],
      }
    },
    components: {
      'b-carousel': bCarousel,
      'b-carousel-slide': bCarouselSlide,
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      },
      select(id){
        this.selected=id-1;
        this.showDetail=true;
      },
      terjual(selected){
        this.products[selected].isSold=true;
        this.showDetail=false;
      },
      jualLagi(selected){
        this.products[selected].isSold=false;
        this.showDetail=false;
      },

    },
    computed:{
      priceFormat(price) {
				return price.toLocaleString('id-ID');
			}
    }
  }
</script>
<style>
  /*NAVBAR ALL*/
  .navbar-circle2-all{
    background-color: none;
    border-radius: 100%;
    height:56px;
    width:56px;
    margin-left: 152px;
  }
  .navbar-circle-all{
    background-color: #00d54d;
    border-radius: 100%;
    height:56px;
    width:56px;
    margin-left: 152px;
    position: absolute;
    padding: 16px;
    z-index: 1;
    bottom:27px;
  }
  .all-navbar-content-all{
    overflow: hidden;
    position: fixed;
    bottom: 0;
  }
  .navbar-dikampus-all{
    background-image: url('navbar/subtract-center.svg');
    height:83px;
    background-repeat: no-repeat;
    width: 360px;
    margin-bottom: -27px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 17px;
    padding-bottom: 15px;
  }
  .merchant-products{
    padding:24px;
  }
  .profile-merchant{
    margin-top: 26px;
  }


  /*NAVBAR DETAIL*/
  .navbar-circle2{
    background-color: none;
    border-radius: 100%;
    height:56px;
    width:56px;
    margin-left: 272px;
  }
  .navbar-circle{
    background-color: #00d54d;
    border-radius: 100%;
    height:56px;
    width:56px;
    margin-left: 272px;
    position: absolute;
    padding: 16px;
    z-index: 1;
    bottom:27px;
  }
  .all-navbar-content{
    overflow: hidden;
    position: fixed;
    bottom: 0;
  }
  .navbar-dikampus{
    background-image: url('navbar/subtract.svg');
    height:83px;
    background-repeat: no-repeat;
    width: 360px;
    margin-bottom: -27px;
    padding-left: 24px;
    padding-top: 17px;
    padding-bottom: 15px;
  }

  /* For Span */
  .left{
    float:left;
  }
  .right{
    float:right;
  }
  .top-nav-back-all{
  }
  .top-nav-back{
    padding:24px;
  }
  .arrow{
    height: 16px;
    width: 16px;
  }
  .back-btn-all{
    background-color: #ffffff;
    /* box-shadow:3px 3px 3px #c0c0c0; */
    height: 32px;
    width: 32px;
    padding:2px 2px;
    border-radius: 100%;
    /* border: 1px solid black; */
  }
  .back-btn{
    background-color: #ffffff;
    box-shadow:3px 3px 3px #c0c0c0;
    height: 32px;
    width: 32px;
    padding:2px 2px;
    border-radius: 100%;
    /* border: 1px solid black; */
  }
  .carousel-product{
    position: absolute;
    top: 0px;
    z-index: -1;
  }
  .btn-grp{
    margin-top:24px;
    margin-left:24px;
    margin-right:24px;
  }
  .btn-promote{
    background-color: #ff9500;
    text-align: center;
    color:#ffffff;
    font-weight: bold;
    width: 148px;
    height: 52px;
    padding: 11px 14px;
    font-size:24px;
    border-radius: 4px;
  }
  .btn-promote-outline{
    background-color: #ffffff;
    text-align: center;
    color:#ff9500;
    border:2px solid #ff9500;
    width: 148px;
    height: 52px;
    padding-top: 14px;
    font-size:16px;
    border-radius: 4px;
  }
  .btn-terjual{
    background-color: #ffe7e6;
    border: 1px solid #ff3b30;
    text-align: center;
    color:#ff3b30;
    font-weight: bold;
    width: 148px;
    height: 52px;
    padding: 11px;
    font-size:24px;
    border-radius: 4px;
  }
  .btn-lagi{
    background-color: #0b5ed7;
    border: 1px solid #0b5ed7;
    text-align: center;
    color:#ffffff;
    font-weight: bold;
    width: 148px;
    height: 52px;
    padding-top: 11px;
    padding-bottom: 11px;
    font-size:24px;
    border-radius: 4px;
  }
  .dilihat{
    margin-top:24px;
    font-size:12px;
    color:#888888;
  }
  .prod-nm{
    font-size: 20px;
    font-weight: bold;
    margin-top:15px;
    text-align: center;
  }
  .prod-sell{
    font-size: 14px;
    font-weight: bold;
    color:#888888;
    margin-top:6px;
    text-align: center;
  }
  .prod-prc{
    font-size: 24px;
    font-weight: bold;
    color:#0b5ed7;
    margin-top:8px;
    text-align: center;
  }

  /*CONTENT*/
  .thin-line{
    border-top: 1px solid #dddddd;
    padding-bottom: 28px;
  }
  .category{
    padding-left:24px;
    padding-right:24px;
    padding-bottom:28px;
    margin-top: 32px;
  }
  .cat-produk{
    background-color: #00d54d;
    color:#ffffff;
    font-size: 14px;
    padding:8px 8px;
    border-radius: 2px;
    text-align: center;
    width: 61px;
    height: 34px;
  }
  .cond-produk{
    background-color: #0b5ed7;
    color:#ffffff;
    font-size: 14px;
    padding:8px 8px;
    border-radius: 2px;
    text-align: center;
    width: 46px;
    height: 34px;
  }
  .description{
    padding-left:24px;
    padding-right:24px;
    padding-bottom:28px;
    /* margin-top: 9px; */
  }
  .ship{
    padding-left:24px;
    padding-right:24px;
    padding-bottom:28px;
    /* margin-top: 9px; */
  }
  .pengiriman-btn{
    color:#ffffff;
    font-size: 14px;
    padding:8px 8px;
    border-radius: 2px;
    text-align: center;
    width: 68px;
    height: 34px;
  }
  .gray{
    background-color: #dddddd;
  }
  .green{
    background-color: #00d54d;
  }
  .desc-loc{
    padding-left:24px;
    padding-right:24px;
    padding-bottom:101px;
    /* margin-top: 9px; */
  }

</style>
