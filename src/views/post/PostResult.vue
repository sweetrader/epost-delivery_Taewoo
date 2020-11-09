<template>
  <!-- 05택배배송_01등록_05완료 -->
  <div id="result-post">
    <Header title="게시글 등록"/>
    <section class="top-aria">
      <h3>게시글 등록이 완료되었습니다.</h3>
      <p>지원자 확인·확정을 위해 예치금 관리 버튼을 선택하신 후,<br><span>예치금을 확인</span>하여 입금해주세요.</p>
    </section>

    <section class="middle-aria">
      <h3>{{ postInfo.contentTitle }}</h3>
      <dl>
        <dt>
          <p class="left">업무일</p>
          <p class="right">{{ postInfo.workingDate }}</p>
        </dt>
        <dt>
          <p class="left">물량</p>
          <p class="right">{{ postInfo.amount }}개</p>
        </dt>
        <dt>
          <p class="left">개당단가</p>
          <p class="right">{{ postInfo.eachPrice }}원</p>
        </dt>
        <dt>
          <p class="left">사업자구분</p>
          <p class="right">{{ postInfo.businessType }}</p>
        </dt>
      </dl>
      <div class="button">등록내역</div>
    </section>

    <section class="bottom-section">
      <h3>예치금이란?</h3>
      <p>예치금을 사전에 입금하시면 업무 종료 또는 계약이 만료된<br>공급자에게 번거로운 절차 없이 간단하고 빠르게 송금할 수<br>있습니다.</p>
    </section>

    <BottomButton one-button="예치금 관리" :is-valid="isValid"/>
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
      isValid: true,
      postInfo: {
        contentTitle: '택배배송기사 모집/근무투입 바로 가능',
        workingDate: '2020-09-18(토)',
        amount: '1000',
        eachPrice: '1000',
        businessType: '없음'
      }
    }
  }

}
</script>
