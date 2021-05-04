<template>
  <v-app>
    <div class="wrap">
      <div :class="{header: true, headerSub:$route.name !== 'Home'}">
        
        <div class="logo" @click="$router.push('/')">
          <label>POIN</label>
          <span><v-icon>mdi-plus</v-icon></span>
        </div>

        <div class="right">
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>
              mdi-menu
            </v-icon>
          </v-btn>
        </div>
      </div>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        right
        temporary
      >
        <div class="drawer">
          <h2>
            <span>반가워요!</span>
            <strong>수민님</strong>
          </h2>
          <div class="menu">
            <v-btn text @click="$router.push('/')">
              <v-icon>mdi-home</v-icon>
              <label>홈으로</label>
            </v-btn>
            <v-btn text @click="$router.push('/myCard')">
              <v-icon>mdi-credit-card-outline</v-icon>
              <label>내카드</label>
            </v-btn>
            <v-btn text @click="$router.push('/myPayment')">
              <v-icon>mdi-card-text-outline</v-icon>
              <label>결제내역</label>
            </v-btn>
            <v-btn text @click="$router.push('/mypage')">
              <v-icon>mdi-account-circle</v-icon>
              <label>내정보</label>
            </v-btn>
          </div>

          <div class="bottom">
            <v-btn text @click="$router.push('/login')">
              로그아웃
            </v-btn>
          </div>
        </div>
      </v-navigation-drawer>

      <div class="container">
        <router-view />
      </div>

      <!-- <v-bottom-navigation 
        v-model="$route.name"
        app
        class="bottom-navigation"
        height="56"
        shift
      >
        <v-btn value="Home" text plain @click="$router.push('/')">
          <label>메인</label>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn value="MyCard" text plain @click="$router.push('/myCard')">
          <label>내 카드</label>
          <v-icon>mdi-credit-card-outline</v-icon>
        </v-btn>
        <v-btn value="MyPayment" text plain @click="$router.push('/myPayment')">
          <label>결제내역</label>
          <v-icon>mdi-card-text-outline</v-icon>
        </v-btn>
        <v-btn text plain>
          <label>내 정보</label>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-bottom-navigation> -->
    </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      drawer:false
    }
  }

}
</script>

<style lang="scss" scoped>
.wrap{
  position: relative;
  width:100%;
  height:100%;
  overflow:hidden;
}
.header{
  position: fixed;
  z-index:2;
  top:0px;
  padding:0px;
  height:70px;
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    display:flex;
    align-items: center;
    margin-left:15px;

    label{
      font-weight:500;
      font-family:'Roboto';
      font-size:28px;
      color:#fff;
    }
    span{
      margin-left:5px;
      display:flex;
      justify-content: center;
      align-items: center;
      width:24px;
      height:24px;
      background:#0011FF;
      border-radius:3px;

      .v-icon{
        font-size:16px;
        color:#fff;
      }
    }

  }

  .right{
    display:flex;
    align-items: center;

    .v-btn{
      width:50px;
      height:50px;
      margin-left:10px;
      .v-icon{
        color:#fff;
      }
    }
  }
}

.headerSub{
  border-bottom:1px solid #e2e2e2;
  background:#fff;

  .logo{
    color:#292929;
    label{color:#292929;}
  }
  .right{
    .v-btn{
      .v-icon{color:#292929;}
    }
  }
}

.drawer{
  h2{  
    color:#292929;
    font-weight:normal;
    font-size:20px;
    line-height:20px;
    padding:20px;

    span{
      display:block;
      font-weight:300;
      font-family:'SCDream';
    }
    strong{
      font-family:'SCDream';
      display:block;
      font-weight:500;
      margin-top:8px;
    }
  }

  
  .menu{
    .v-btn{
      align-items: center;
      justify-content: flex-start;
      width:100%;
      border:0px;
      border-bottom:1px solid #e2e2e2;

      label{
        margin:0px;
        margin-left:10px;
        font-size:13px;
        font-family:'SCDream';
        font-weight:400;
      }
    }
  }

  .bottom{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:30px;

    .v-btn{
      background:#f2f2f2;
      padding:0 15px;
      font-size:12px;
      min-height:24px;
      height:24px;
      border-radius:100px;
    }
  }
}

.container{
  height:100%;
}

.v-btn {
  min-height: 56px;
  align-items: center;
  justify-content: center;
  padding: 0px;

  label {
    font-size: 10px;
    margin-top:8px;
  }
  .v-icon{
    font-size:20px;
  }
}

</style>
