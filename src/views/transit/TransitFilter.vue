<template>
  <div id="filterin-quiry-container" class="transit-filter">
    <Header title="필터조회" :on-close="true" class="border-bottom-on"/>
    <div class="container">
      <div class="subtitle">상차지역</div>
      <!--해당 div 부분 클릭하여 지역 선택-->
      <div class="local-pick" @click="">
        <img src="@/assets/image/icons/map.png">
        <span v-if="locationOfLoading" class="location"> {{ locationOfLoading }} </span>
        <span v-else> 지역선택 </span>
      </div>
      <div class="subtitle">하차지역</div>
      <!--해당 div 부분 클릭하여 지역 선택-->
      <div class="local-pick" @click="">
        <img src="@/assets/image/icons/map.png">
        <span v-if="locationOfGetOff" class="location"> {{ locationOfGetOff }} </span>
        <span v-else> 지역선택 </span>
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
      <div class="subtitle">톤수/차종</div>
      <dt class="wraper-two-div">
        <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'">
          <select v-model="selectedTonnageType" :disabled="readOnly">
            <option value="" selected>톤수 선택</option>
            <option v-for="tonnage in tonnageTypeOptions" :key="tonnage.index" :value="tonnage.value">
              {{ tonnage.text }}
            </option>
          </select>
        </div>
        <p class="each-text-of-two"> </p>
        <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'">
          <select v-model="selectedVehicleType" :disabled="readOnly">
            <option value="" selected >차종 선택</option>
            <option v-for="vehicle in vehicleTypeOptions" :key="vehicle.index" :value="vehicle.value">
              {{ vehicle.text }}
            </option>
          </select>
        </div>
      </dt>
      <div class="subtitle">1대당 운송료</div>
      <dt class="wraper-two-div">
        <div class="input-wraper"><input v-model="maxShippingFeeOfVehicle" type="number" placeholder="금액 입력"></div>
        <p class="each-text-of-two">원 이상</p>
      </dt>
    </div>

    <div class="bottom-container">
      <dl class="inner-content">
        <dt class="two-button-wrap">
          <div :class="isLongDistance ? 'each-button on border-radius-left' :'each-button right'" @click="isLongDistance = true">
            <img v-if="isLongDistance" src="@/assets/image/icons/path-red.png">장거리(시도간)
          </div>
          <div :class="!isLongDistance ? 'each-button on border-radius-right' :'each-button left'" @click="isLongDistance = false">
            <img v-if="!isLongDistance" src="@/assets/image/icons/path-red.png">단거리(시도내)
          </div>
        </dt>
      </dl>
    </div>

    <BottomButton :type="2" :left-button="'초기화'" :right-button="'조회'"/>
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
      showBelowection: false,
      locationOfLoading: '',
      locationOfGetOff: '',
      selectedVehicleType: '',
      selectedTonnageType: '',
      tonnageTypeOptions: [],
      vehicleTypeOptions: [],
      isLongDistance: true
    }
  }
}
</script>


<style scoped lang="scss">
  .location{
    color: #212529!important;
  }
  .bottom-container{
    padding-bottom: 0.8rem;
  }
</style>
