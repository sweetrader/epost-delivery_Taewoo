<template>
  <!-- 3. 05택배배송_03상세  (1)~(3) -->
  <div id="post-detail">
    <Header title=""/>
    <section class="top-brief-section">
      <div class="flag-box">
        <p>{{ flag }}</p>
      </div>
      <h3>{{ postInfo.title }}</h3>
      <p class="date">{{ postInfo.workday }}</p>

      <dl class="top-middle-box">
        <dt>
          <img src="@/assets/image/icons/max-post.png">
          <p class="key">최대예상물량</p>
          <p class="value">{{ postInfo.maxAmount }}개</p>
        </dt>
        <dt>
          <img src="@/assets/image/icons/costImage.png">
          <p class="key">개당</p>
          <p class="value">{{ postInfo.eachPrice }}원</p>
        </dt>
        <dt>
          <img src="@/assets/image/icons/flag.png">
          <p class="key">사업자구분</p>
          <p class="value">{{ postInfo.division }}</p>
        </dt>
      </dl>

      <dl class="top-bottom-box">
        <dt><img src="@/assets/image/icons/map.png"><p>지도</p></dt>
        <dt><img src="@/assets/image/icons/chatImage.png"><p>채팅</p></dt>
        <dt><img src="@/assets/image/icons/callImage.png"><p>전화</p></dt>
      </dl>
    </section>

    <section class="bottom-additional-info-section">
      <dl class="detailed-info-part">
        <dt class="title-part">
          <p class="title">업무내용 상세</p>
          <p class="date">{{ postInfo.date }} 등록</p>
        </dt>
        <dl class="contents-part">
          <dt>
            <p class="left">신청마감일</p>
            <p class="right">{{ postInfo.deadLine }}</p>
          </dt>
          <dt>
            <p class="left">수령장소</p>
            <p class="right">{{ postInfo.acceptPlace }}</p>
          </dt>
          <dt>
            <p class="left">주소</p>
            <p class="right">{{ postInfo.addr }}</p>
          </dt>
          <dt>
            <p class="left">수요자</p>
            <p class="right">{{ postInfo.cunsumer }}</p>
          </dt>
          <dt>
            <p class="left">상세설명</p>
            <p class="right" v-html="postInfo.explain"/>
          </dt>
          <div class="fetch-file-button">
            <img src="@/assets/image/icons/fetch.png">첨부파일
          </div>
        </dl>
      </dl>
      <dl class="apply-part">
        <dt class="title-part">
          <p class="title">업무신청</p>
        </dt>
        <dt class="wraper-two-div">
          <div class="define-width">
            <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="spaceNm" type="text" placeholder="희망물량 입력" :readonly="readOnly"></div>
          </div>
          <p class="each-text-of-two">개</p>
          <div class="maximum"><p>최대 1,000개</p></div>
        </dt>
        <dt class="wraper-two-div-02">
          <div class="input-wraper select">운송수단 선택</div>
          <div :class="readOnly ? 'input-wraper readonly' : 'input-wraper'"><input v-model="spaceNm" type="text" placeholder="차량번호 입력" :readonly="readOnly"></div>
        </dt>
        <dt class="checkbox-wraper">
          <div :class="isCarInsurance ? 'input-wraper checkbox active' : 'input-wraper checkbox'" @click="isCarInsurance = !isCarInsurance">자동차 보험 가입</div>
          <div :class="isContractAgree ? 'input-wraper checkbox active' : 'input-wraper checkbox'" @click="onAgreeContract">계약서 동의</div>
        </dt>
      </dl>
    </section>
    <BottomButton
      one-button="신청하기"
      :is-valid="buttonValidation"
      @action="onButtonAction"/>
  </div>
</template>

<script>
import Header from '@/components/Header/Index'
import BottomButton from '@/components/BottomButton/Index'

export default {
  components: {
    Header, BottomButton
  },
  data() {
    return {
      isCarInsurance: false,
      isContractAgree: false,
      buttonValidation: false,
      flag: '택배배송',
      postInfo: {
        title: '택배배송기사 모집/근무투입 바로 가능',
        workday: '2020-09-21(토)',
        maxAmount: '1000',
        eachPrice: '1000',
        division: '없음',
        date: '2020-09-16 12:00',
        deadLine: '2020-09-20(금) 18:00',
        acceptPlace: '서울중앙우체국',
        addr: '서울 중구 소공로 70',
        cunsumer: '김하니',
        explain: '운전면허취득자(초보여도 가능)여야만 지원이 가능합니다.수령장소에 오셔서 신청하신 물량 받아가시고, 송장에 나와있는데로 배송하시면 되는 간단한업무 입니다.<br>★업무는 중구에서만 이루어집니다★'
      }
    }
  },
  methods: {
    onButtonAction() {
      
    },
    onAgreeContract() {
      if (!this.isContractAgree) {
        this.$router.push('/contract')
      }
      this.isContractAgree = !this.isContractAgree
    }

  }
}
</script>
