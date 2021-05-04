<template>
<v-app>
  <div class="finish">
    <div class="finish-title">
      <v-icon>mdi-check-circle-outline</v-icon>
      <h2>결제가 완료되었습니다</h2>
      <p>선택하신 세탁기에서 세탁을 시작해주세요</p>
    </div>

    <div class="btns">
      <v-btn text>이용내역</v-btn>
      <v-btn text>
        메인으로
      </v-btn>
    </div>
    
  </div>
</v-app>
</template>

<style lang="scss" scoped>

.finish{
  flex:1;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .finish-title{
    text-align:center;

    .v-icon{
      font-size:80px;
      color:rgb(255, 0, 128)
    }
    h2{
      margin-top:30px;
    }
    p{font-size:14px;color:#888;margin-top:5px;}
  }

  .btns{
    margin-top:50px;
    .v-btn{
      height:40px;
      border:1px solid #d2d2d2;
      border-radius:100px;
      margin:0 5px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
      font-family:'SCDream';
      font-size:13px;
      font-weight:400
    }
  }
}

</style>