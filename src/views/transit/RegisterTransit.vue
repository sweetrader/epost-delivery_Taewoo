<template>
  <div id="resister-transit">
    <Header title="게시글 등록"/>
    <Tab/>
    <!-- 05택배배송_01등록_03 -->
    <template v-if="!isRegisteredFavorJob">
      <section class="register-alert">
        <img src="@/assets/image/icons/man.png">
        <p class="notice">
          공간공유 게시글 보기는<br><span>관심업무를 등록</span>하여야 이용이 가능합니다.
        </p>
        <div class="register-button">관심업무 등록</div>
      </section>
    </template>

  <!-- 08운송차량_01등록_01 -->
    <template v-else>
      <!-- 업무조건 -->
      <section class="section">
        <div class="title"><p>업무조건</p></div>
        <div class="contents-wraper">
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
          <!-- 필요차량정보 -->
          <dl class="inner-content">
            <div class="content-sub-title"><p>필요차량정보</p></div>
            <dt class="wraper-two-div"> <div class="input-wraper"><input v-model="numberOfVehicles" type="number" placeholder="차량 대수 입력"></div><p class="each-text-of-two">대</p></dt>
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

          </dl>
          <!-- 1대당 최대 운송료 -->
          <dl class="inner-content">
            <div class="content-sub-title">1대당 최대 운송료<div class="guide" @click="modalOn = true"/></div>
            <dt class="wraper-two-div">
              <div class="input-wraper"><input v-model="maxShippingFeeOfVehicle" type="number" placeholder="금액 입력"></div>
              <p class="each-text-of-two">원</p>
            </dt>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'">
              <select v-model="selectedPaymentMethod" :disabled="readOnly">
                <option value="" selected>결제 방식</option>
                <option v-for="paymentMethod in paymentMethodOptions" :key="paymentMethod.index" :value="paymentMethod.value">
                  {{ paymentMethod.text }}
                </option>
              </select>
            </div>
          </dl>
          <!-- 운송물품 -->
          <dl class="inner-content">
            <div class="content-sub-title">운송물품</div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'">
              <select v-model="selectedGoodsType" :disabled="readOnly">
                <option value="" selected>물품종류 선택</option>
                <option v-for="paymentMethod in goodsTypeOptions" :key="paymentMethod.index" :value="paymentMethod.value">
                  {{ paymentMethod.text }}
                </option>
              </select>
            </div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'">
              <select v-model="selectedShippingOption" :disabled="readOnly">
                <option value="" selected>배송옵션 선택</option>
                <option v-for="shippingOption in shippingOptionOptions" :key="shippingOption.index" :value="shippingOption.value">
                  {{ shippingOption.text }}
                </option>
              </select>
            </div>
          </dl>
          <!-- 상세설명(선택) -->
          <dl class="inner-content">
            <h3 class="content-sub-title">상세설명(선택)</h3>
            <dt class="textarea-wraper"><textarea v-model="additionalContents" type="text" placeholder="상세내용 입력"/></dt>
            <dt class="input-wraper file-button">
              <div><img src="@/assets/image/icons/download.png"></div>
              파일첨부 <span v-if="fileList.length > 0" class="file-count">{{ fileList.length }}</span>
            </dt>
            <dt v-if="fileList.length > 0" class="file-list">
              <div v-for="(file, index) in fileList" :key="file.index" class="file-item">
                {{ file.fileName }}
                <img class="xButton" src="@/assets/image/icons/x.png" @click="deleteFile(index)">
              </div>
            </dt>
          </dl>
          <!-- 연락처 -->
          <dl class="inner-content">
            <div class="content-sub-title">연락처</div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="phoneNum" type="text" placeholder="휴대폰 번호" :readonly="readOnly"></div>
          </dl>
        </div>
      </section>
      <!-- 상차정보 -->
      <section class="section">
        <div class="title"><p>상차정보</p></div>
        <div class="contents-wraper">
          <!--상차일시-->
          <dl class="inner-content">
            <div class="one-checkbox-wraper">
              <dl>
                <div class="content-sub-title">상차일시</div>
                <div class="checkbox-inner right">
                  <div :class=" sameDayLoading ? 'on' : ''" @click="sameDayLoading = !sameDayLoading">당일상차</div>
                </div>
              </dl>
            </div>
            <dt class="wraper-two-div-02">
              <DatePicker v-model="dateOfLoading" input-class="mx-input define-width" type="date" placeholder="날짜 선택" format="YY-MM-DD"/>
              <DatePicker v-model="timeOfLoading" input-class="mx-input define-width" type="time" placeholder="시간 선택" format="HH:mm"/>
            </dt>
          </dl>
          <!--상차지-->
          <dl class="inner-content">
            <div class="content-sub-title">상차지</div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="locationOfLoading" type="text" placeholder="장소명 입력" :readonly="readOnly"></div>
            <div :class="readOnly ? 'input-wraper two-wraper readonly' : 'input-wraper two-wraper'">
              <input v-model="basicAddrOfLoading" type="text" placeholder="기본 주소" :readonly="readOnly">
              <div class="search">찾기</div>
            </div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="specificAddrOfLoading" type="text" placeholder="상세 주소" :readonly="readOnly"></div>
          </dl>
          <!--상차도움-->
          <div class="inner-content">
            <div class="two-checkbox-wraper">
              <dl>
                <div class="content-sub-title">상차도움</div>
                <div class="checkbox-inner">
                  <div :class=" helpInLoading ? 'on' : ''" @click="helpInLoading = true">필요</div>
                  <div :class=" !helpInLoading ? 'on' : ''" @click="helpInLoading = false">불필요</div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <!-- 하차정보 -->
      <section class="section">
        <div class="title"><p>하차정보</p></div>
        <div class="contents-wraper">
          <!--하차일시-->
          <dl class="inner-content">
            <div class="one-checkbox-wraper">
              <dl>
                <div class="content-sub-title">하차일시</div>
                <div class="checkbox-inner right">
                  <div :class=" sameDayGetOff ? 'on' : ''" @click="sameDayGetOff = !sameDayGetOff">당일하차</div>
                </div>
              </dl>
            </div>
            <dt class="wraper-two-div-02">
              <DatePicker v-model="dateOfGetOff" input-class="mx-input define-width" type="date" placeholder="날짜 선택" format="YY-MM-DD"/>
              <DatePicker v-model="timeOfGetOff" input-class="mx-input define-width" type="time" placeholder="시간 선택" format="HH:mm"/>
            </dt>
          </dl>
          <!--하차지-->
          <dl class="inner-content">
            <div class="content-sub-title">하차지</div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="locationOfGetOff" type="text" placeholder="장소명 입력" :readonly="readOnly"></div>
            <div :class="readOnly ? 'input-wraper two-wraper readonly' : 'input-wraper two-wraper'">
              <input v-model="basicAddrOfGetOff" type="text" placeholder="기본 주소" :readonly="readOnly">
              <div class="search">찾기</div>
            </div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="specificAddrOfGetOff" type="text" placeholder="상세 주소" :readonly="readOnly"></div>
          </dl>
          <!--하차도움-->
          <div class="inner-content">
            <div class="two-checkbox-wraper">
              <dl>
                <div class="content-sub-title">하차도움</div>
                <div class="checkbox-inner">
                  <div :class=" helpInGetOff ? 'on' : ''" @click="helpInGetOff = true">필요</div>
                  <div :class=" !helpInGetOff ? 'on' : ''" @click="helpInGetOff = false">불필요</div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <!-- 경유정보(선택) -->
      <section class="section">
        <div class="title"><p>경유정보(선택)</p><div class="add-button" @click="addStopover">추가</div></div>
        <div class="contents-wraper">
          <!--경유지-->
          <dl v-for="(stopover, index) in stopoverList" :key="stopover.index" class="inner-content">
            <div class="content-sub-title">경유지 {{ index + 1 }}</div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="stopover.location" type="text" placeholder="장소명 입력" :readonly="readOnly"></div>
            <div :class="readOnly ? 'input-wraper two-wraper readonly' : 'input-wraper two-wraper'">
              <input v-model="stopover.basicAddr" type="text" placeholder="기본 주소" :readonly="readOnly">
              <div class="search">찾기</div>
            </div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="stopover.specificAddr" type="text" placeholder="상세 주소" :readonly="readOnly"></div>
          </dl>
        </div>
      </section>
      <!-- 모집조건 -->
      <section class="section">
        <div class="title"><p>모집조건</p></div>
        <div class="contents-wraper">
          <dl class="inner-content">
            <dt class="wraper-two-div-02">
              <DatePicker v-model="deadLineDate" input-class="mx-input define-width" type="date" placeholder="신청마감일" format="YY-MM-DD"/>
              <DatePicker v-model="deadLineTime" input-class="mx-input define-width" type="time" placeholder="신청마감 시간" format="HH:mm"/>
            </dt>
            <p class="reject-notice">계약거절은 계약완료 시간으로부터</p>
            <dt class="wraper-two-div-02">
              <DatePicker v-model="rejectLimitTime" input-class="mx-input define-width" type="time" placeholder="시간선택" format="mm:ss"/>
              <p>분 이내</p>
            </dt>
          </dl>
        </div>
      </section>
      <SelectBox :open="open" :header="header" :option-list="optionList" @select="onClickOptionBtn"/>
      <BottomButton one-button="등록" :is-valid="false" @click="registerTransit"/>
      <section v-if="modalOn" class="modal">
        <img class="xButton" src="@/assets/image/icons/x.png" @click="modalOn = false">
        <p>
          <!--TODO: 1대당 최대 운송료 modal content 필요.-->
          1대당 최대 운송료
        </p>
      </section>
    </template>
  </div>
</template>

<script>
import Header from '@/components/Header/Index'
import Tab from '@/components/Tab/Index'
import BottomButton from '@/components/BottomButton/Index'
import SelectBox from '@/components/SelectBox/Index'
import DatePicker from 'vue2-datepicker'
import Toggle from '@/components/Toggle/Index'
import 'vue2-datepicker/index.css'

export default {
  components: {
    Header, Tab, BottomButton, DatePicker, SelectBox, Toggle
  },
  data() {
    return {
      readOnly: false,

      modalOn: false,
      isMonthlyRent: true,
      availableDirectlyMove: false,
      isRegisteredFavorJob: true,

      // v-model
      isLongDistance: true,
      numberOfVehicles: '',
      maxShippingFeeOfVehicle: '',
      selectedVehicleType: '',
      selectedTonnageType: '',
      selectedPaymentMethod: '',
      selectedGoodsType: '',
      selectedShippingOption: '',
      tonnageTypeOptions: [],
      vehicleTypeOptions: [],
      paymentMethodOptions: [],
      goodsTypeOptions: [],
      shippingOptionOptions: [],
      additionalContents: '',
      phoneNum: '',
      dateOfLoading: '',
      timeOfLoading: '',
      locationOfLoading: '',
      basicAddrOfLoading: '',
      specificAddrOfLoading: '',
      sameDayLoading: false,
      helpInLoading: true,
      dateOfGetOff: '',
      timeOfGetOff: '',
      locationOfGetOff: '',
      basicAddrOfGetOff: '',
      specificAddrOfGetOff: '',
      sameDayGetOff: false,
      helpInGetOff: true,
      stopoverList: [
        {
          location: '',
          basicAddr: '',
          specificAddr: ''
        }
      ],
      fileList: [
        {
          fileName: '파일명1',
          fileUrl: ''
        },
        {
          fileName: '파일명2',
          fileUrl: ''
        }
      ],
      deadLineDate: '',
      deadLineTime: '',
      rejectLimitTime: '',
      deadLine: ''
    }
  },
  created() {

  },
  methods: {
    onClickOptionBtn(option) {
      this.open.forEach(i => {
        this.open.push(false)
      })
      if (option !== '') {
        this.selectedFacility = option
      }
    },
    onClickOpenSelectBox() {
      const tempArr = [false, false, false]
      tempArr.splice(0, 1, true)
      this.open = tempArr
    },
    addStopover() {
      this.stopoverList.push({
        location: '',
        basicAddr: '',
        specificAddr: ''
      })
    },
    deleteFile(index) {
      this.fileList.splice(index, 1)
    },
    registerTransit() {
      this.$router.push({ name: 'TransitResult' })
    }
  }
}
</script>
