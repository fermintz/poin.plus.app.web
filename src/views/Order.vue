<template>
  <div class="article order">
    <h4>선택하신 내용을 확인해주세요</h4>
    <div class="order-info">
      <dl>
        <dt>장소</dt>
        <dd>동아대 남자기숙사</dd>
      </dl>
      <dl>
        <dt>선택장비</dt>
        <dd>3번세탁기</dd>
      </dl>
      <div class="divider" />
      <dl>
        <dt>선택상품</dt>
        <dd>표준세탁</dd>
      </dl>
      <dl>
        <dt>동작시간</dt>
        <dd>45분</dd>
      </dl>
      <dl class="price">
        <dt>상품가격</dt>
        <dd>4,000원</dd>
      </dl>
      <dl>
        <dt>결제카드</dt>
        <dd>신한카드(0767)</dd>
      </dl>
    </div>

    <v-btn text @click="$router.push('/finish')">
      결제하기
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.order-info{
  padding:15px;
  border-radius:5px;
  border:1px solid #e2e2e2;
  margin-top:20px;

  .divider{
    height:1px;
    background:#e2e2e2;
    margin-top:20px;
    margin-bottom:20px;
  }

  dl{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:15px;


    dt{
      font-size:12px;
      color:#888;
    }
    dd{
      font-size:14px;
      font-family:'SCDream';

    }
  }
  dl:last-child{
    margin-bottom:0px;
  }

  dl.price{
    dd{
      color:rgb(255, 0, 128)
    }
  }
}

.order{
  .v-btn{
    background:#292929;
    color:#fff;
    width:100%;
    height:40px;
    margin-top:20px;
  }
}
</style>