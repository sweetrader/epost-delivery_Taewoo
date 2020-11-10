<template>
  <!-- 08운송차량_01등록_05완료 – 2 -->
  <div id="result-transit">
    <Header title="게시글 등록"/>
    <section class="top-aria">
      <h3>게시글 등록이 완료되었습니다.</h3>
      <p>지원자 확인·확정을 위해 예치금 관리 버튼을 선택하신 후,<br><span>예치금을 확인</span>하여 입금해주세요.</p>
    </section>

    <section class="middle-aria">
      <dl>
        <dt>
          <p class="left">상차지</p>
          <p class="right">
            <span class="location">{{ postInfo.locationOfLoading }}</span><br>
            <span class="date-time">{{ postInfo.dateTimeOfLoading | dateTimeFilter }}</span>
          </p>
        </dt>
        <dt>
          <p class="left">하차지</p>
          <p class="right">
            <span class="location">{{ postInfo.locationOfGetOff }}</span><br>
            <span class="date-time">{{ postInfo.dateTimeOfGetOff | dateTimeFilter }}</span>
          </p>
        </dt>
      </dl>
      <dl>
        <dt>
          <p class="left">구분</p>
          <p class="right">{{ postInfo.isLongDistance | distanceType }}</p>
        </dt>
        <dt>
          <p class="left">경유지 유무</p>
          <p class="right">{{ postInfo.amount | existStopover }}</p>
        </dt>
        <dt>
          <p class="left">필요차량</p>
          <p class="right">{{ postInfo.numberOfVehicles }}대</p>
        </dt>
        <dt>
          <p class="left">차종(톤수)</p>
          <p class="right">{{ postInfo.vehicleType }} ({{ postInfo.tonnage }}톤)</p>
        </dt>
        <dt>
          <p class="left">1대당 운송료</p>
          <p class="right">{{ addComma(postInfo.maxShippingFeeOfVehicle) }}원</p>
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
import moment from 'moment'

export default {
  components: {
    Header, BottomButton
  },
  filters: {
    distanceType(isLongDistance) {
      if (isLongDistance) {
        return '장거리(시도간)'
      }
      return '단거리(시도내)'
    },
    existStopover(isExist) {
      if (isExist) {
        return '경유지 있음'
      }
      return '경유지 없음'
    },
    dateTimeFilter(dateTime) {
      return moment(dateTime).format('YYYY-MM-DD HH:mm')
    }
  },
  data() {
    return {
      isValid: true,
      postInfo: {
        isLongDistance: true,
        existStopover: true,
        numberOfVehicles: 3,
        tonnage: 2.5,
        vehicleType: '카고',
        maxShippingFeeOfVehicle: 200000,
        locationOfLoading: '서울중앙우체국',
        locationOfGetOff: '부천우편집중국',
        dateTimeOfLoading: '2020-10-10 10:20',
        dateTimeOfGetOff: '2020-10-11 20:40'
      }
    }
  }

}
</script>
