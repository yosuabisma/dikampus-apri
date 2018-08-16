<template>
  <div class="main-page">
    <!--NAVBAR ALL-->
    <div class="all-navbar-content-all">
      <div class="navbar-circle2-all">
      </div>
      <div class="navbar-circle-all">
        <center>
          <img v-bind:src="'src/assets/icon/outline_add_24_px.svg'" style="width:14px;height:14px;" />
        </center>
      </div>
      <div class="navbar-dikampus-all">
        <div class="navbar-content-all">
          <table>
            <tr>
              <td>
                <img v-bind:src="'src/assets/icon/baseline_menu_24_px.svg'" style="width:18px;height:12px;" />
              </td>
              <td style="width:264px;"></td>
              <td>
                <img v-bind:src="'src/assets/icon/ic_search.svg'" style="width:17px;height:17px;" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="greetings">
      <font class="hi"><b>Hi, {{nameLogin}}!</b></font><br/>
      <font style="font-size:20px;margin-top:10px;">Mau cari apa hari ini?</font>
    </div>

    <div class="slide-main">
      <table>
        <tr>
          <td>
            <div class="slide-box" style="margin-right:16px;">
              <img v-bind:src="'src/assets/icon/round_apps_24_px.svg'" style="width:21px;height:21px;" />
              <div style="height:27px"></div>
              <h1 style="color:#000000;font-size:14px;">Semua Kategori</h1>
            </div>
          </td>
          <td>
            <div class="slide-box" style="margin-right:16px;">
              <img v-bind:src="'src/assets/icon/home_blue.svg'" style="width:24px;height:22px;" />
              <div style="height:27px"></div>
              <h1 style="color:#000000;font-size:14px;">Peralatan Kosan</h1>
            </div>
          </td>
          <td>
            <div class="slide-box" style="margin-right:16px;">
              <img v-bind:src="'src/assets/icon/baseline_fastfood_24_px.svg'" style="width:29px;height:29px;" />
              <div style="height:27px"></div>
              <h1 style="color:#000000;font-size:14px;">Makanan & Minuman</h1>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="promo-baru" style="margin-top:34px;">
      <h1 style="font-weight:bold;font-size:20px;color:#222222">Promo Terbaru<span><img v-bind:src="'src/assets/icon/round_whatshot_24_px.svg'" style="margin-left:4px;width:16px;height:20px;"/></span></h1>
      <div class="promo-slide">
        <table>
          <tr>
            <td>
              <div class="promo-slide-box dummy-back">

              </div>
            </td>
            <td>
              <div class="promo-slide-box dummy-back">

              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="terbaru-hari-ini" style="margin-top:31px;">
      <h1 style="font-weight:bolder;font-size:20px;color:#222222">Terbaru hari ini</h1>
      <h1 style="font-size:14px;color:#222222">Scroll dulu aja, siapa tau ketemu</h1>

      <div style="margin-top:7px;margin-bottom:100px;">
        <table>
          <tr>
            <td>
              <table>
                <tr v-for="prod in products" v-if="prod.id%2==1">
                  <td style="padding-top:20px;">
                    <div>
                      <img v-bind:src="'src/assets/product-img/'+prod.photos[0].img" width="150px" height="170px"/>
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
                    <div>
                      <img slot="img" v-bind:src="'src/assets/product-img/'+prod.photos[0].img" width="150px" height="170px"/>
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
</template>
<script>
  export default {
    data(){
      return{
        nameLogin:"Apri",
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
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
    }
  }
</script>
<style>
.main-page{
  padding-top:41px;
  padding-left:24px;
}
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
  margin-left:-24px;
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

/*GREETINGS*/
.greetings{
  color:#232f34;
}
.hi{
  font-size:32px;
  font-weight:bolder;
}
/*SLIDER*/
.slide-main{
  width:360px;
  max-width:360px;
  overflow:auto;
  margin-top:34px;
  padding:8px;
  box-shadow: 0 4px 60px 24px #1a222222;
  margin-left: -24px;
}
.slide-box{
  width:124px;
  height:124px;
  background-color:#ffffff;
  border-radius:8px;
  box-shadow: 0 0 60px 20px #1a222222;
  padding-left:16px;
  padding-right:16px;
  padding-top:20px;
  padding-bottom:17px;
}
/*PROMO SLIDE*/
.promo-slide{
  padding-top:16px;
  width:360px;
  max-width:360px;
  overflow:auto;
  margin-left: -24px;
}
.promo-slide-box{
  width:282px;
  height:140px;
  border-radius:4px;
  margin-right:12px;
}
.dummy-back{
  background-color:#c4c4c4;
}


</style>
