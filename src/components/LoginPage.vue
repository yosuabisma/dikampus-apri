<template>
  <div class="login-page">
    <table>
      <tr>
        <td style="height:24px;width:24px;padding:4px;">
          <img v-bind:src="'src/assets/icon/outline_arrow_back_24_px.svg'" style="width:16px;height:16px;" />
        </td>
        <td style="width:103px;"></td>
        <td style="padding:4px;">
          <font style="font-size:14px;">Belum memiliki akun?<span style="margin-left:5px;color:#0b5ed7">Daftar</span></font>
        </td>
      </tr>
    </table>
    <h1 class="login-title">Login</h1>
    <h1 style="margin-top:10px;font-size:14px;color:#000000">Login dengan mudah menggunakan Google</h1>
    <div style="padding-left:21px;padding-right:21px;">
      <div class="button-google-login">
        <span style="margin-right:22px;"><img v-bind:src="'src/assets/icon/search.svg'" style="width:27px;height:27px;" /></span>Lanjutkan dengan Google
      </div>
    </div>
    <center>
      <h1 style="margin-top:28px;font-size:14px;color:#000000">ATAU</h1>
      <h1 style="margin-top:14px;font-size:14px;color:#000000">Login menggunakan email</h1>
    </center>
    <div class="login-form">
      <input type="text" placeholder="Email" class="input-email"/>
      <input type="password" placeholder="Password" class="input-pass"/>
      <center>
        <div class="login-btn">
          Login
        </div>
      </center>
    </div>
  </div>
</template>
<script></script>
<style>
  .login-page{
    padding:24px;
    
  }
  .login-title{
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
  .login-form{
    margin-top: 30px;
  }
  .input-email{
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
  .login-btn{
    border: 2px solid #0b5ed7;
    border-radius: 29px;
    width:270px;
    height:60px;
    font-size: 24px;
    color:#0b5ed7;
    font-weight: bolder;
    padding:13px;
    margin-top: 30px;
  }
</style>
