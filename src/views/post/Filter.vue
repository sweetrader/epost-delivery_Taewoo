<template>
<!-- 05택배배송_02게시글_02필터 -->
  <div id="filterin-quiry-container">
    <Header title="필터조회" :on-close="true" class="border-bottom-on"/>
    <div class="container">
      <div class="subtitle">수령장소</div>
      <div class="local-pick">
        <img src="@/assets/image/icons/map.png">
        <span> 지역선택 </span>
      </div>
      <div class="subtitle">업무기간</div>
      <div class="choice-day">
        <div class="choice-today">오늘</div>
        <div class="choice-oneweek">1주일</div>
        <div class="choice-onemonth">1달</div>
      </div>
      <div class="input-container">
        <DatePicker v-model="selectDateFrom" input-class="mx-input" type="date" placeholder="날짜 선택" format="YY.MM.DD"/>
        <p class="each-text-of-two">~</p>
        <DatePicker v-model="selectDateTo" input-class="mx-input" type="date" placeholder="날짜 선택" format="YY.MM.DD"/>
      </div>
      <div class="subtitle">물량/단가</div>
      <dt class="wraper-two-div">
        <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="expectMaxCapacity" type="text" placeholder="최대예상물량" :readonly="readOnly"></div><p class="each-text-of-two">개</p>
        <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="eachPrice" type="text" placeholder="개당단가" :readonly="readOnly"></div><p class="each-text-of-two">원</p>
      </dt>
    </div>

    <div class="bottom-container">
      <Toggle/>
    </div>

    <BottomButton :type="2" :left-button="'초기화'" :right-button="'조회'"/>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Index'
import BottomButton from '@/components/BottomButton/Index'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import Toggle from '@/components/Toggle/Index.vue'

export default {
  name: 'Filterin',
  components: {
    Header, BottomButton, DatePicker, Toggle
  },
  data() {
    return {
      isAllButton: false,
      selectDateFrom: '',
      selectDateTo: '',
      showBelowection: false
    }
  }
}
</script>
