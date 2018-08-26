<template>
  <div>
    <!--Back Arrow-->
    <div style="padding-top:24px;padding-left:24px;">
      <img v-bind:src="'src/assets/icon/shape.svg'"  class="img-arrow" />
    </div>
    <div style="margin-top:22px;padding-left:24px;color:#232f34;font-weight:bolder;font-size:30px;">
      <font>Upload Jualan</font>
    </div>
    <div class="camera-upload">
      <table>
        <tr>
          <td>
            <div class="camera-box">
              <div style="height:24px;width:24px;">
                <img v-bind:src="'src/assets/icon/camera.svg'"  style="height:21px;width:23px;" />
              </div>
            </div>
          </td>
          <td style="width:20px;"></td>
          <td>
            <div class="camera-box">
              <div style="height:24px;width:24px;">
                <img v-bind:src="'src/assets/icon/camera.svg'"  style="height:21px;width:23px;" />
              </div>
            </div>
          </td>
          <td style="width:20px;"></td>
          <td>
            <div class="camera-box">
              <div style="height:24px;width:24px;">
                <img v-bind:src="'src/assets/icon/camera.svg'"  style="height:21px;width:23px;" />
              </div>
            </div>
          </td>
          <td style="width:20px;"></td>
          <td>
            <div class="camera-box">
              <div style="height:24px;width:24px;">
                <img v-bind:src="'src/assets/icon/camera.svg'"  style="height:21px;width:23px;" />
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="form-upload-jualan">
      <input class="input-jualan" placeholder="Judul">
      <input class="input-jualan" placeholder="Harga">
      <div class="input-jualan">
        <div style="padding-top:10px;">Kategori Produk</div>
      </div>
      <textarea class="textarea-jualan" placeholder="Deskripsi Produk"></textarea>
      <div class="input-jualan-2">
        <div style="padding-top:10px;">
            <span style="padding-right:12px;"><img v-bind:src="'src/assets/icon/baseline_location_on_blue_24_px.svg'" style="width:14px;height:20px;" /></span>{{selectedKampus}}
        </div>
      </div>
      <div class="status-item">
        <font style="font-size:16px;font-weight:bold;color:#000000;">Status Item</font>
        <table style="margin-top:17px;">
          <tr>
            <td>
              <div style="font-size:14px;color:#000000;">
                <span style="padding-right:12px;"><img @click="radioClick()" v-if="isBaru===false" v-bind:src="'src/assets/icon/radio_off.svg'" style="width:20px;height:20px;" /><img @click="radioClick()" v-if="isBaru===true" v-bind:src="'src/assets/icon/radio_on.svg'" style="width:20px;height:20px;" /></span>Baru
              </div>
            </td>
            <td>
              <div style="font-size:14px;color:#000000;margin-left:28px;">
                <span style="padding-right:12px;"><img @click="radioClick()" v-if="isBekas===false" v-bind:src="'src/assets/icon/radio_off.svg'" style="width:20px;height:20px;" /><img @click="radioClick()" v-if="isBekas===true" v-bind:src="'src/assets/icon/radio_on.svg'" style="width:20px;height:20px;" /></span>Bekas
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="opsi-pengiriman">
        <font style="font-size:16px;font-weight:bold;color:#000000;">Opsi Pengiriman</font>
        <table style="margin-top:17px;">
          <tr>
            <td>
              <div style="font-size:14px;color:#000000;">
                <span style="padding-right:12px;"><img @click="meetup()" v-if="isMeetup===false" v-bind:src="'src/assets/icon/check_off.svg'" style="width:18px;height:18px;" /><img @click="meetup()" v-if="isMeetup===true" v-bind:src="'src/assets/icon/check_on.svg'" style="width:18px;height:18px;" /></span>Meetup
              </div>
            </td>
            <td>
              <div style="font-size:14px;color:#000000;margin-left:28px;">
                <span style="padding-right:12px;"><img @click="delivery()" v-if="isDelivery===false" v-bind:src="'src/assets/icon/check_off.svg'" style="width:18px;height:18px;" /><img @click="delivery()" v-if="isDelivery===true" v-bind:src="'src/assets/icon/check_on.svg'" style="width:18px;height:18px;" /></span>Delivery
              </div>
            </td>
          </tr>
        </table>
      </div>
      <textarea class="textarea-jualan-2" placeholder="Deskripsi Lokasi Meetup"></textarea>
      <div class="lanjutkan-input-btn"><center>Lanjutkan</center></div>
    </div>


  </div>
</template>
<script>
  export default {
    data(){
      return{
        selectedKampus:"Telkom University",
        isBaru:true,
        isBekas:false,
        isMeetup:true,
        isDelivery:false,
        kampus:[
          {kota:"Bandung", nama:"Telkom University"},
          {kota:"Bandung", nama:"ITB"},
        ]

      }
    },
    methods:{
      radioClick(){
        this.isBaru=!this.isBaru;
        this.isBekas=!this.isBekas;
      },
      delivery(){
        this.isDelivery=!this.isDelivery;
      },
      meetup(){
        this.isMeetup=!this.isMeetup;
      }
    }
  }
</script>
<style>
  .camera-upload{
    margin-top:32px;
    margin-left:38px;
  }
  .camera-box{
    border:1px solid #0b5ed7;
    border-radius: 4px;
    width:56px;
    height:56px;
    padding: 16px;
  }
  .form-upload-jualan{
    margin-top: 32px;
    padding-left:24px;
    padding-right: 24px;
  }
  .input-jualan{
    width: 312px;
    height:40px;
    border-radius:4px;
    border:1px solid #888888;
    font-size:14px;
    color:#888888;
    padding-left: 16px;
    margin-bottom: 16px;
  }
  .input-jualan-2{
    width: 312px;
    height:40px;
    border-radius:4px;
    border:1px solid #888888;
    font-size:14px;
    color:#222222;
    font-weight: bold;
    padding-left: 16px;
    margin-bottom: 16px;
  }
  .textarea-jualan{
    width: 312px;
    height:137px;
    border-radius:4px;
    border:1px solid #888888;
    font-size:14px;
    color:#888888;
    padding-left: 16px;
    padding-top: 10px;
    margin-bottom: 16px;
  }
  .textarea-jualan-2{
    margin-top: 20px;
    width: 312px;
    height:62px;
    border-radius:4px;
    border:1px solid #888888;
    font-size:14px;
    color:#888888;
    padding-left: 16px;
    padding-top: 10px;
    margin-bottom: 16px;
  }
  .lanjutkan-input-btn{
    width: 312px;
    height:52px;
    background-color: #0b5ed7;
    font-size: 24px;
    color:#ffffff;
    border-radius: 4px;
    padding-top:9px;
    padding-bottom: 11px;
    font-weight: bold;
    margin-top: 12px;
  }
  .status-item{
    margin-top: 8px;
  }
  .opsi-pengiriman{
    margin-top: 24px;
  }

</style>
