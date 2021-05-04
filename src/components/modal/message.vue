<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal">
      <div class="modal-head">
        <h4>알림</h4>
      </div>
      <div class="modal-cont">
        해당 카드를 삭제할까요?
      </div>
      <div class="modal-bottom">
        <v-btn text @click="handle(false)">취소</v-btn>
        <v-btn text>확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import BaseModal from '@/mixins/modal.vue'

export default {
  mixins:[BaseModal],
}
</script>