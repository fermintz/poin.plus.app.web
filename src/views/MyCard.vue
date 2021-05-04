<template>
  <div class="article myCard">
    <div class="article-head">
      <h3>등록된 카드</h3>
      <v-btn text>
        카드등록
      </v-btn>
    </div>

    <div class="myCardList">
      <div class="no-card">
        <p>등록된 카드가 없습니다</p>
        <v-btn text>
          카드 등록하기
        </v-btn>
      </div>

      <div class="card-item" v-for="item in 5" :key="item">
        <div class="card-info">
          <div class="cardName">신한카드</div>
          <div class="cardNum">6806</div>
        </div>
        <v-btn icon @click="$refs.message.handle(true)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="list-btns">
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <Message ref="message" />
  </div>
</template>

<script>
import Message from '@/components/modal/message.vue'

export default {
  components:{Message},
}
</script>

<style lang="scss" scoped>

.list-btns{
  text-align:center;
  margin-top:20px;

  .v-btn{
    width:40px;
    height:40px;
    background:#e2e2e2;
  }

}

.no-card{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:#f8f8f8;
  border-radius:10px;
  padding:15px;
  height:150px;

  .v-btn{
    font-size:12px;
    padding:0 15px;
    height:32px;
    border-radius:100px;
    background:#e2e2e2;
  }

}

.card-item{
  display:flex;
  justify-content: space-between;
  border:1px solid #e2e2e2;
  padding:15px;
  border-radius:10px;
  align-items: center;
  margin-bottom:15px;
  box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

  .cardName{
    font-family:'SCDream';
  }
  .cardNum{
    font-family:'Roboto';
    font-size:14px;
    font-weight:500;
    margin-top:5px;
  }

  .v-btn{
    background:#f2f2f2;
  }
}

.card-item:last-child{
  margin-bottom:0px;
}

</style>