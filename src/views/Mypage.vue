<template>
  <div class="mypage article">
  
    <div class="profile">
      <div class="profile-img">
        <img src="https://source.unsplash.com/random">
      </div>
      <span>박수민</span>
      <dl>
        <dt>보유포인트</dt>
        <dd>2,700 Pt</dd>
      </dl>
    </div>

    <div class="mypage-menu">
      <v-btn text>
        <label>이용약관</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn text>
        <label>개인정보 취급방침</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <div class="logout">
      <v-btn text>
        로그아웃
      </v-btn>
    </div>
  
  </div>
</template>


<style lang="scss" scoped>

.mypage{
  .profile{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    .profile-img{
      width:120px;
      height:120px;
      overflow:hidden;
      border-radius:100px;
    }
    span{
      margin-top:10px;
    }

    dl{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      border-bottom:1px solid #e2e2e2;
      height:40px;
      padding:0 10px;
      border-radius:5px;
      margin-top:30px;
      
      dt{
        font-size:13px;
        font-family:'SCDream'
      }
      dd{
        font-family:'Roboto';
        font-weight:600;
      }
    }
  }

  .mypage-menu{
    margin-top:30px;

    .v-btn{
      padding:0px 10px;
      justify-content: space-between;
      border-bottom:1px solid #e2e2e2;
      width:100%;
      height:50px;
    }
  }

  .logout{
    margin-top: 30px;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    
    .v-btn{
      border:1px solid #e2e2e2;
      border-radius:100px;
      font-size:13px;
      padding:0 30px;
    }
  }
}

</style>