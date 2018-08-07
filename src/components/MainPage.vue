<template>
  <div class="main-page">
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
    <div class="greetings">
      <font class="hi"><b>Hi, {{nameLogin}}!</b></font><br/>
      <font style="font-size:20px;margin-top:10px;">Mau cari apa hari ini?</font>
    </div>

    <div class="slide-main">
      <table>
        <tr>
          <td>
            <div class="slide-box" style="margin-right:16px;">
              <img v-bind:src="'src/assets/icon/round_apps_24_px.svg'" style="width:32px;height:32px;" />
              <div style="height:27px"></div>
              <h1 style="color:#000000;font-size:14px;">Semua Kategori</h1>
            </div>
          </td>
          <td>
            <div class="slide-box" style="margin-right:16px;">
              <img v-bind:src="'src/assets/icon/home_blue.svg'" style="width:32px;height:32px;" />
              <div style="height:27px"></div>
              <h1 style="color:#000000;font-size:14px;">Peralatan Kosan</h1>
            </div>
          </td>
          <td>
            <div class="slide-box" style="margin-right:16px;">
              <img v-bind:src="'src/assets/icon/baseline_fastfood_24_px.svg'" style="width:32px;height:32px;" />
              <div style="height:27px"></div>
              <h1 style="color:#000000;font-size:14px;">Semua Kategori</h1>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="promo-baru" style="margin-top:34px;">
      <h1 style="font-weight:bold;font-size:20px;color:#222222">Promo Terbaru<span><img v-bind:src="'src/assets/icon/round_whatshot_24_px.svg'" style="margin-left:4px;"/></span></h1>
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





  </div>
</template>
<script>
  export default {
    data(){
      return{
        nameLogin:"Apri",

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
  width:336px;
  max-width:336px;
  overflow:auto;
  margin-top:34px;
  padding:8px;
  box-shadow: 0 0 60px 10px #1a222222;
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
  width:336px;
  max-width:336px;
  overflow:auto;
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
