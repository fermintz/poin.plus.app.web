<template>
  <div class="home">
    <div class="camera-area">
      <div text :style="{top:bottomSheetHt + 'px'}" class="camera-handle" v-ripple @click="$router.push('/product')">
        <v-icon>mdi-camera-outline</v-icon>
        <label>QR코드 스캔 <br> 터치해주세요</label>
      </div>
      <span class="top-left" />
      <span class="top-right" />
      <span class="bottom-left" :style="{bottom: bottomSheetHt + 'px'}" />
      <span class="bottom-right" :style="{bottom: bottomSheetHt + 'px'}" />
      <p :style="{bottom: bottomSheetHt + 'px'}">장비의 QR코드를 스캔해주세요</p>
    </div>

    <div class="bottom-sheet" :class="{sheetClose:!sheetState, sheetOpen:sheetState}">
      <div class="sheet-head">
        <h4>결제카드</h4>
      </div>

      <div class="sheet-cont">
        <div class="card-select-area">
          <splide :options="splideOptions">
            <splide-slide>
              <div class="card-item credit-card" v-ripple>
                <label>신한카드</label>
                <span>8080</span>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="card-item card-add" v-ripple @click="$router.push('/cardAdd')">
                <v-icon>mdi-plus-circle-outline</v-icon>
                <label>카드 등록하기</label>
              </div>
            </splide-slide>
          </splide>
        </div>
        <div class="text-area">
          <span>카드를 등록해주세요</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      sheet:true,
      bottomSheetHt:0,
      camera:true,
      sheetState:true,
     
      splideOptions:{
        type:'loop',
        arrows:false,
        pagination:false,
        focus:'center',
        fixedWidth:210,
        gap:15,
        trimSpace: false,
      },
    }
  },
  methods:{
    bottomSheet(){
      const sheet = document.getElementsByClassName('bottom-sheet')[0]
      this.bottomSheetHt = sheet.clientHeight + 20
    }
  },
  mounted(){
    this.bottomSheet()
  }
}
</script>

<style lang="scss" scoped>

.home{
  position: relative;
  height:100%;
  background:#292929;
  padding:20px;

  .camera-area{
    display:flex;
    position: relative;
    height:300px;

    .camera-handle{
      display:flex;
      justify-content: center;
      align-items: center;
      width:110px;
      height:110px;
      border:3px solid rgba(255,255,255,0.8);
      flex-direction: column;
      position: absolute;
      left:50%;
      margin-left:-55px;
      margin-top:-55px;
      border-radius:10px;
      background:rgba(255,255,255,0.1);

      label{
        text-align:center;
        display:block;
        color:#fff;
        font-weight:400;
        font-size:12px;
        margin-top:5px;
      }
      .v-icon{
        color:#fff;
      }
    }

    p{
      position:fixed;
      color:#fff;
      margin:0px;
      padding:0px;
      left:0px;
      text-align:center;
      font-size:12px;
      width:100%;

    }

    span{
      width:30px;
      height:30px;
      position:fixed;
    }
    span.top-left{
      top:90px;
      left:20px;
      border-top:8px solid #fff;
      border-left:8px solid #fff;
    }

    span.top-right{
      top:90px;
      right:20px;
      border-top:8px solid #fff;
      border-right:8px solid #fff;
    }

    span.bottom-left{
      left:20px;
      border-bottom:8px solid #fff;
      border-left:8px solid #fff;
    }

    span.bottom-right{
      right:20px;
      border-bottom:8px solid #fff;
      border-right:8px solid #fff;
    }
  }

  .bottom-sheet{
    display:flex;
    flex-direction: column;
    position:fixed;
    left:0px;
    bottom:0px;
    background:#fff;
    width:100%;
    border-radius:20px 20px 0 0;
    overflow:hidden;
    padding:24px 0;

    .sheet-head{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:15px;
      padding:0 24px;

      h4{
        font-size:16px;
        font-weight:500;
      }

    }

    .sheet-cont{
      .card-select-area{
        
        .card-item{
          display:flex;
          padding:15px;
          background:#f2f2f2;
          border:1px solid #e2e2e2;
          width:210px;
          height:120px;
          border-radius:10px;
          box-shadow: 3px 3px 12px rgba(0,0,0,0.06);

        }

        .credit-card{
          flex-direction: column;
          justify-content: space-between;

          label{
            font-size:14px;
            font-family:'SCDream'
          }

          span{
            font-size:24px;
            line-height:24px;
            font-family:'Roboto';
            text-align:right;
          }
        }

        .card-add{
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .v-icon{
            font-size:36px;
            color:#0011FF;
          }
          label{
            font-size:12px;
            margin-top:5px;
          }
        }

        .is-active.is-visible{
          .card-item{
            background:#fff;
          }
        }

        
      }

      .text-area{
        margin-top:15px;
        display:flex;
        align-items: center;
        justify-content: center;
        
        span{
          font-size:12px;
          text-align:center;
          padding:5px 20px;
          background:#E7E8F1;
          border-radius:100px;
          color:#292929;
        }
      }
    }    
  }

  .sheetClose{
    .sheet-cont{
      animation:sheetCloseAni 1s forwards;
    }

    @keyframes sheetCloseAni {
      100%{
        height:0px;
      }
    }
  }
}

</style>