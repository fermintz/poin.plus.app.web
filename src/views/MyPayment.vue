<template>
  <div class="article myPayment">
    <div class="article-head">
      <h3>결제내역</h3>
    </div>

    <div class="payment-list">
      <div class="no-data">
        <p>
          결제된 내역이 없습니다.
        </p>
      </div>
      <div class="payment-item" v-for="item in 4" :key="item">
        <div class="left-info">
          <div class="date">
            2021년 4월 12일 12:34:43
          </div>
          <div class="place">
            동아대 남자 기숙사 1층
          </div>
          <div class="eqName">
            1번세탁기
          </div>
          <div class="credit">
            신한카드
          </div>
        </div>
        <div class="price">
          5,000 원
        </div>
      </div>
    </div>

    <div class="list-btns">
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss" scoped>
.no-data{
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius:5px;
  padding:15px;
  background:#f2f2f2;

  p{margin:0px;}
}

.list-btns{
  text-align:center;
  margin-top:20px;

  .v-btn{
    width:40px;
    height:40px;
    background:#e2e2e2;
  }

}

.payment-item{
  border:1px solid #e2e2e2;
  margin-bottom:15px;
  padding:15px;
  border-radius:5px;
  display:flex;
  justify-content: space-between;
  box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

  .left-info{
    flex:1;

    .date{
      font-size:11px;
      margin-bottom:5px;
      color:#888;
    }
    .place{
      font-size:13px;
    }
    .eqName{
      font-family:'SCDream';
      font-weight:500;
    }
    .credit{
      margin-top:10px;
      font-size:12px;
      color:#888;
    }
  }

  .price{
    font-family:'Roboto';
    font-size:18px;
    font-weight:500;
    align-self: flex-end;
  }
}

.payment-item:last-child{
  margin-bottom:0px;
}


</style>