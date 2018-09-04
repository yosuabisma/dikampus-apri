<template>
  <div class="warung-page">
    <center>
      <img v-bind:src="'src/assets/icon/logo_dikampus.svg'" style="width:95px;height:31px;" />
    </center>
    <div class="header-warung">
      <table class="table-top">
        <tr>
          <td class="table-top">
            <img v-bind:src="'src/assets/icon/'+warungs[selected-1].gambarWarung" style="width:124px;height:124px;" />
          </td>
          <td style="width:18px;"></td>
          <td>
            <h1 class="title-header">{{warungs[selected-1].nama}}</h1>
            <div class="note-header">
              <div class="loc-note-header">
                <!--LOCATION-->
                <table>
                  <tr>
                    <td class="table-top">
                      <div style="height:20px;width:20px;">
                        <img v-bind:src="'src/assets/icon/outline_location_on_24_px.svg'" style="width:11px;height:16px;"/>
                      </div>
                    </td>
                    <td class="table-top" style="width:12px;"></td>
                    <td class="table-top" style="max-height:28px;line-height:16px;">{{warungs[selected-1].alamat}}</td>
                  </tr>
                </table>
              </div>
              <div class="time-note-header">
                <!--TIME-->
                <table>
                  <tr>
                    <td class="table-top">
                      <div style="height:20px;width:20px;">
                        <img v-bind:src="'src/assets/icon/baseline_schedule_24_px.svg'" style="width:16px;height:16px;"/>
                      </div>
                    </td>
                    <td style="width:12px;"></td>
                    <td class="table-top" style="color:#00d54d">Buka</td>
                    <td style="width:8px;"></td>
                    <td class="table-top">{{warungs[selected-1].buka}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <!--MENU-->
    <div v-for="m in warungs[selected-1].menus">
      <div class="menu-header">
        <div style="height:1px;background-color:#888888;width:100%;">
        </div>
        <div class="menu-title">
          {{m.title}}
        </div>
        <div v-for="ml in m.menuLists">
          <table style="margin-top:24px;">
            <tr style="margin-top:32px;">
              <td class="table-top"><img v-bind:src="'src/assets/icon/'+ml.gambarMakanan" style="width:76px;height:76px;"/></td>
              <td class="table-top" style="padding-left:12px;">
                <div style="font-size:14px;color:#222222;line-height:16px;">
                  {{ml.namaMakanan}}
                </div>
                <div style="font-size:8px;color:#888888;line-height:16px;">
                  {{ml.keteranganMakanan}}
                </div>
                <div style="margin-top:12px;font-size:14px;color:#222222;line-height:16px;">
                  Rp {{ml.hargaMakanan.toLocaleString('id-ID')}}
                </div>
              </td>
              <td class="table-top" style="padding-left:28px;">
                <center>
                  <img @click="ml.kuantitasMakanan+=1;quantity+=1;totalHarga+=ml.hargaMakanan;" v-bind:src="'src/assets/icon/group_3_1.svg'" style="width:24px;height:24px;margin-bottom:5px;"/>
                  <h3 v-if="ml.kuantitasMakanan>0" style="font-size:14px;color:#222222;margin-top:0px;margin-bottom:0px;">{{ml.kuantitasMakanan}}</h3>
                  <img @click="ml.kuantitasMakanan-=1;quantity-=1;totalHarga-=ml.hargaMakanan;" v-if="ml.kuantitasMakanan>0" v-bind:src="'src/assets/icon/group_4_1.svg'" style="width:24px;height:24px;margin-top:5px;"/>
                </center>
              </td>
            </tr>
          </table>
        </div>

      </div>
    </div>
    <!--ALL COUNT-->
    <div v-if="quantity>0" class="all-count">
      <table>
        <tr>
          <td style="font-size:14px;font-weight:bold;width:50%;line-height:16px;">
            <div>{{quantity}} items</div>
            <div style="margin-top:4px;">Rp {{totalHarga.toLocaleString('id-ID')}}</div>
          </td>
          <td style="font-size:16px;font-weight:bold;width:50%;line-height:16px;">
            Lanjutkan
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      selected:1,
      quantity:0,
      totalHarga:0,
      warungs:[
        {
        id:1,
        nama:"Mang Kasep Delivery",
        alamat:"Jalan Mangga Dua No. 40",
        buka:"09.00-24.00",
        gambarWarung:"image_warung.svg",
        menus:[
          { title:"Ala Carte",
            menuLists:[
              {
                namaMakanan:"Indomie Goreng Geprek Cabe Ijo",
                keteranganMakanan:"Indomie Goreng + Ayam Geprek + Cabe Ijo",
                hargaMakanan:17000,
                gambarMakanan:"image_warung.svg",
                kuantitasMakanan:0,
              },
              {
                namaMakanan:"Indomie Goreng Geprek Cabe Ijo",
                keteranganMakanan:"Indomie Goreng + Ayam Geprek + Cabe Ijo",
                hargaMakanan:17000,
                gambarMakanan:"image_warung.svg",
                kuantitasMakanan:0,
              },
              {
                namaMakanan:"Indomie Goreng Geprek Cabe Ijo",
                keteranganMakanan:"Indomie Goreng + Ayam Geprek + Cabe Ijo",
                hargaMakanan:17000,
                gambarMakanan:"image_warung.svg",
                kuantitasMakanan:0,
              },
            ]
          },
          { title:"Taichan",
            menuLists:[
              {
                namaMakanan:"Indomie Goreng Taichan",
                keteranganMakanan:"Indomie Goreng + Ayam Geprek + Cabe Ijo",
                hargaMakanan:17000,
                gambarMakanan:"image_warung.svg",
                kuantitasMakanan:0,
              },
              {
                namaMakanan:"Indomie Goreng Taichan",
                keteranganMakanan:"Indomie Goreng + Ayam Geprek + Cabe Ijo",
                hargaMakanan:17000,
                gambarMakanan:"image_warung.svg",
                kuantitasMakanan:0,
              },
            ]
          },
        ],

        }
      ],
    }
  }
}
</script>
<style>
  .warung-page{
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .header-warung{
    margin-top:28px;
  }
  .table-top{
    vertical-align: top;
  }
  .title-header{
    font-size: 20px;
    font-weight: bold;
    line-height: 18px;
    color: #000000;
  }
  .note-header{
    margin-top: 17px;
  }
  .loc-note-header{
    color:#000000;
    font-size: 14px;
  }
  .time-note-header{
    margin-top: 10px;
    color:#000000;
    font-size: 14px;
  }

  .menu-header{
    margin-top: 36px;
  }

  .menu-title{
    font-size: 20px;
    color:#000000;
    margin-top: 36px;
  }

  .all-count{
    background-color:#0b5ed7;
    width:312px;
    height: 72px;
    padding-left: 24px;
    padding-right:24px;
    padding-top: 16px;
    padding-bottom: 16px;
    color:#ffffff;
    border-radius:4px;
  }
</style>
