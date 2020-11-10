<template>
<!-- 05택배배송_03상세_04계약 , 05택배배송_03상세_05계약 -->
  <div id="contract-document">
    <Header title="계약서" :on-close="!onClose"/>
    <div class="document-image">
      <img src="@/assets/image/temp/contract.png">
    </div>
    <template v-if="isBottomButtonOn">
      <div class="agreebutton">
        <div class="checkimage" @click="isAgree = !isAgree">
          <img :src="isAgree ? require('@/assets/image/icons/check-off-black.png') : require('@/assets/image/icons/check-on.png')"></div>
        <div class="checktext"> {{ agree.text }}</div>
        <div v-if="isAgree" class="checkagree"/>
      <!-- <div v-else class="bottom-button">
      </div> -->
      </div>
      <BottomButton v-if="isBottomButtonOn" :is-valid="!isAgree" :one-button="'확인'"/>
    </template>
    <!-- <div v-else class="checkimage">
    </div> -->
  </div>
</template>

<script>

import Header from '@/components/Header/Index'
import BottomButton from '@/components/BottomButton/Index'

export default {
  name: 'Contract',
  components: {
    Header, BottomButton
  },
  data() {
    return {
      isAgree: true,
      isBottomButtonOn: true,
      agree: {
        text: '위의 내용에 동의합니다.'
      }
    }
  }
}
</script>
