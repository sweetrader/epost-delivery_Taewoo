<template>
  <div id="resister-post">
    <Header title="게시글 등록"/>
    <Tab/>
    <!-- 05택배배송_01등록_03 / 05택배배송_06수정-->
    <template v-if="!isRegisteredFavorJob">
      <section class="register-alert">
        <img src="@/assets/image/icons/man.png">
        <p class="notice">
          공간공유 게시글 보기는<br><span>관심업무를 등록</span>하여야 이용이 가능합니다.
        </p>
        <div class="register-button">관심업무 등록</div>
      </section>
    </template>

  <!-- 05택배배송_01등록 , 05택배배송_06수정 -->
    <template v-else>
      <!-- 업무조건 -->
      <section class="section">
        <div class="title"><p>업무조건</p></div>
        <div class="contents-wraper">
          <!-- 기본정보 -->
          <dl class="inner-content">
            <div class="content-sub-title"><p>기본정보</p><div class="guide" @click="modalOn = true">게시글 제목</div></div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="postTitle" type="text" placeholder="게시글 제목 (예: 단기3일/중구/배송원모집)" :readonly="readOnly"></div>
            <DatePicker v-model="workingDate" input-class="mx-input" type="date" placeholder="업무일 선택" format="YY.MM.DD" :disabled="readOnly"/>
            <dt class="wraper-two-div">
              <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="expectMaxCapacity" type="text" placeholder="최대예상물량" :readonly="readOnly"></div><p class="each-text-of-two">개</p>
              <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="eachPrice" type="text" placeholder="개당단가" :readonly="readOnly"></div><p class="each-text-of-two">원</p>
            </dt>

          </dl>
          <!-- 수령장소 -->
          <dl class="inner-content">
            <h3 class="content-sub-title">수령장소</h3>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="spaceNm" type="text" placeholder="장소명 입력" :readonly="readOnly"></div>
            <div :class="readOnly ? 'input-wraper two-wraper readonly' : 'input-wraper two-wraper'">
              <input v-model="basicAddr" type="text" placeholder="기본 주소" :readonly="readOnly">
              <div class="search">찾기</div>
            </div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="specificAddr" type="text" placeholder="상세 주소" :readonly="readOnly"></div>
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="phoneNum" type="text" placeholder="휴대폰 번호" :readonly="readOnly"></div>
          </dl>

          <!-- 추가내용(선택) -->
          <dl class="inner-content">
            <h3 class="content-sub-title">추가내용(선택)</h3>
            <dt class="textarea-wraper"><textarea v-model="additionalContents" type="text" placeholder="상세내용 입력"/></dt>
            <dt class="input-wraper file-button">
              <div><img src="@/assets/image/icons/download.png"></div>
              파일첨부
            </dt>
          </dl>
        </div>
      </section>
      <!-- 모집조건 -->
      <section class="section">
        <div class="title"><p>모집조건</p></div>
        <div class="contents-wraper">
          <dl class="inner-content">
            <Toggle/>
            <dt class="wraper-two-div-02">
              <DatePicker v-model="deadLine" input-class="mx-input define-width" type="date" placeholder="임대기간 입력" format="YY.MM.DD"/>
              <div class="input-wraper">신청마감 시간</div>
            </dt>
            <p class="reject-notice">계약거절은 계약완료 시간으로부터</p>
            <dt class="wraper-two-div-02">
              <div class="input-wraper define-width">시간선택</div>
              <p>분 이내</p>
            </dt>
          </dl>
        </div>
      </section>
      <SelectBox :open="open" :header="header" :option-list="optionList" @select="onClickOptionBtn"/>
      <BottomButton one-button="등록" :is-valid="false"/>
      <section v-if="modalOn" class="modal">
        <img class="xButton" src="@/assets/image/icons/x.png" @click="modalOn = false">
        <img class="explainImg" src="@/assets/image/icons/no-image.png">
        <p>
          게시글 제목은 구체적이고<br>명확한 내용으로 간단하게 작성해주세요.
        </p>
        <dl>
          <div>예시)</div>
          <ul>
            <li>단기3일/중구/배송원모집</li>
            <li>서울중앙우체국/5시간/소포분류</li>
            <li>삼성동/주간/택배수집/당일지급</li>
            <li>동대문구/택배수집/주5일/1달</li>
          </ul>
        </dl>
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
      shipRegisterOk: true,
      updown: true,
      isMonthlyRent: true,
      availableDirectlyMove: false,
      isRegisteredFavorJob: true,

      // v-model
      workingDate: '',
      expectMaxCapacity: '',
      eachPrice: '',
      spaceNm: '',
      basicAddr: '',
      specificAddr: '',
      phoneNum: '',
      additionalContents: '',
      deadLine: '',


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
    }
  }
}
</script>
