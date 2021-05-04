<template>
  <div class="article product">
    <h4>상품을 선택해주세요</h4>

    <div class="eq-info">
      선택하신 장비는 
      <span>동아대 남자기숙사 3번세탁기</span>입니다
    </div>

    <div class="product-list">
      <div class="product-item" v-for="item in 5" :key="item" v-ripple @click="$router.push('/order')">
        <span class="name">표준세탁 45분</span>
        <span class="price">5,000원</span>
        <span class="time">동작시간 45분</span>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.eq-info{
  padding:15px;
  background:#f8f8f8;
  margin-top:10px;
  border-radius:5px;
  font-family:'SCDream';
  font-size:14px;

  span{
    font-weight:500;
    color:rgb(255, 0, 128)
  }
}

.product-list{
  margin-top:20px;

  .product-item{
    position: relative;
    border-radius:5px;
    border:1px solid #e2e2e2;
    padding:15px;
    display:flex;
    flex-direction: column;
    margin-bottom:10px;
    justify-content: center;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

    .name{
      font-family:'SCDream';
      font-size:13px;
    }
    .price{
      font-size:14px;
      font-weight:500;
      font-family:'Roboto','SCDream';
    }
    .time{
      margin-top:5px;
      font-size:11px;
      color:#888;
    }
    .v-icon{
      position: absolute;
      right:15px;
    }
  }
}

</style>