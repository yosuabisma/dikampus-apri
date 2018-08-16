<template>
  <div class="register-page">
    <table>
      <tr>
        <td style="height:24px;width:24px;padding:4px;">
          <img v-bind:src="'src/assets/icon/outline_arrow_back_24_px.svg'" style="width:16px;height:16px;" />
        </td>
        <td style="width:103px;"></td>
        <td style="padding:4px;">
          <font style="font-size:14px;">Sudah memiliki akun?<span style="margin-left:5px;color:#0b5ed7">Login</span></font>
        </td>
      </tr>
    </table>
    <h1 class="register-title">Daftar</h1>
    <div class="register-form">
      <input type="text" placeholder="Nama" class="input-nama"/>
      <input type="password" placeholder="Password" class="input-pass"/>
      <input type="text" placeholder="Email" class="input-email"/>
      <input type="text" placeholder="Nomor Handphone" class="input-nomor"/>
      <center>
        <div class="register-btn">
          Daftar
        </div>
      </center>
    </div>
  </div>
</template>
<script></script>
<style>
  .register-page{
    padding:24px;

  }
  .register-title{
    margin-top:23px;
    font-size:30px;
    color:#222222;
    font-weight: bolder;
    color:#222222;
  }
  .button-google-login{
    background-color: #0b5ed7;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 29px;
    width:270px;
    height:60px;
    margin-top: 36px;
  }
  .register-form{
    margin-top: 26px;
  }
  .input-email{
    margin-top: 16px;
    width: 312px;
    height: 40px;
    border-radius: 4px;
    border:1px solid #888888;
    padding:10px;
  }
  .input-pass{
    margin-top: 16px;
    width: 312px;
    height: 40px;
    border-radius: 4px;
    border:1px solid #888888;
    padding:10px;
  }
  .input-nama{
    width: 312px;
    height: 40px;
    border-radius: 4px;
    border:1px solid #888888;
    padding:10px;
  }
  .input-nomor{
    margin-top: 16px;
    width: 312px;
    height: 40px;
    border-radius: 4px;
    border:1px solid #888888;
    padding:10px;
  }
  .register-btn{
    border-radius: 29px;
    width:270px;
    height:60px;
    font-size: 24px;
    color:#ffffff;
    font-weight: bolder;
    padding:13px;
    margin-top: 32px;
    background-color: #0b5ed7;
  }
</style>
