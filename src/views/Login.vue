<template>
  <v-app>
    <div class="login">

      <div class="logo" @click="$router.push('/')">
        <label>POIN</label>
        <span><v-icon>mdi-plus</v-icon></span>
      </div>
      

      <div class="bottom">
        <v-btn text>카카오톡 로그인</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.login{
  position: relative;
  padding:40px;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:#292929;

  .bottom{
    position: absolute;
    padding:0 40px;
    width:100%;
    bottom:40px;
    .v-btn{
      border-radius:100px;
      height:40px;
      width:100%;
      background:rgb(255, 217, 0);
    }
  }

  .logo{
    display:flex;
    align-items: center;
    margin-left:15px;

    label{
      font-weight:500;
      font-family:'Roboto';
      font-size:40px;
      color:#fff;
    }
    span{
      margin-left:8px;
      display:flex;
      justify-content: center;
      align-items: center;
      width:34px;
      height:34px;
      background:#0011FF;
      border-radius:3px;

      .v-icon{
        font-size:24px;
        color:#fff;
      }
    }

  }
}
</style>