<template>
  <div class="cardAdd article">
    <h4>카드등록하기</h4>
    <div class="info-form">
      <dl class="card-number">
        <dt>카드번호</dt>
        <dd>
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
        </dd>
      </dl>
      <dl class="card-date">
        <dt>카드날짜</dt>
        <dd>
          <input type="text">
          <input type="text">
        </dd>
      </dl>

      <dl class="card-pass">
        <dt>카드비밀번호</dt>
        <dd>
          <input type="text">
        </dd>
      </dl>

      <v-btn text>등록완료하기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.cardAdd{
  .info-form{
    margin-top:30px;
      dl{
        margin-bottom:30px;
      }
      dt{
        font-size:12px;
        margin-bottom:5px
      }

      input{
        border:1px solid #e2e2e2;
        height:34px;
        width:100%;
        margin:0 2px;
        border-radius:5px;
      }

      dd{
        display:flex;
        align-items: center;
      }

    .card-date{
      input{
        width:80px;
      }
    }
    .card-pass{
      input{width:164px}
    }

    .v-btn{
      width:100%;
      background:#292929;
      color:#fff;
      height:40px;
    }
  }
}
</style>