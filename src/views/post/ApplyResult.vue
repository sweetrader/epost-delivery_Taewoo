<template>
  <!-- 05택배배송_03상세_05신청완료 -->
  <div id="result-apply">
    <Header title="게시글 등록"/>
    <section class="top-aria">
      <h3>업무 신청이 완료되었습니다.</h3>
      <p>자세한 사항은 신청내역 버튼을 누르시면<br>확인하실 수 있습니다.</p>
    </section>

    <section class="middle-aria">
      <h3>{{ postInfo.contentTitle }}</h3>
      <dl>
        <dt>
          <p class="left">업무일</p>
          <p class="right">{{ postInfo.workingDate }}</p>
        </dt>
        <dt>
          <p class="left">희망물량</p>
          <p class="right">{{ postInfo.amount }}개</p>
        </dt>
        <dt>
          <p class="left">운송수단</p>
          <p class="right">{{ postInfo.eachPrice }}원</p>
        </dt>
        <dt>
          <p class="left">보험</p>
          <p class="right">{{ postInfo.insurance }}</p>
        </dt>
      </dl>
      <div class="button">신청내역</div>
    </section>

    <BottomButton one-button="확인" :is-back-white="true"/>
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
        amount: '300',
        eachPrice: '자동차 12가3456',
        insurance: '보험가입완료'
      }
    }
  }

}
</script>
