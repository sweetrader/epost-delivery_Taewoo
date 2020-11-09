<template>
  <!-- 3. 05택배배송_03상세  (4)~(5) -->
  <div id="contract_detail">
    <div class="document-container">
      <Header :title="headerTitle"/>
      <div class="document-image">
        <Swiper :get-list="imgList"/>
      </div>
      <div class="document-icon-title-subtitle">
        <div class="icon-box">
          <p class="document-icon">{{ document.icon }}</p>
        </div>
        <div class="document-title">{{ document.title }}</div>
        <div class="document-subtitle">{{ document.subtitle }}</div>
      </div>
      <div class="room-sub-info">
        <div class="room-area-info">
          <div class="room-area-icon">
            <img src="@/assets/image/icons/areaImage.png">
          </div>
          <p class="room-area-text">전용면적</p>
          <div class="room-area">{{ roomAreaTextSection.roomArea }}</div>
        </div>
        <div class="room-space-info">
          <div class="room-space-icon">
            <img src="@/assets/image/icons/spaceImage.png">
          </div>
          <p class="room-space-text">공간</p>
          <div class="room-space">{{ roomSpaceTextSection.roomSpace }}</div>
        </div>
        <div class="room-floors-info">
          <div class="room-floors-icon">
            <img src="@/assets/image/icons/floorsImage.png">
          </div>
          <p class="room-floors-text">층수</p>
          <div class="room-fllors">{{ roomFloorsTextSection.roomFloors }}</div>
        </div>
        <div class="room-cost-info">
          <div class="room-cost-icon">
            <img src="@/assets/image/icons/costImage.png">
          </div>
          <p class="room-cost-text">관리비</p>
          <div class="room-cost">{{ roomCostTextSection.roomCost }}</div>
        </div>
      </div>
      <div class="map-chat-call">
        <div class="map">
          <img src="@/assets/image/icons/mapImage.png">지도</div>
        <div class="chat">
          <img src="@/assets/image/icons/chatImage.png">채팅</div>
        <div class="call">
          <img src="@/assets/image/icons/callImage.png">전화</div>
      </div>

      <div class="additional-info-wraper">
        <dl :class="(condition === 'COMPLETE_ADJUSTMENT') || (condition === 'COMPLETE_CONTRACT') ? 'inner-wraper blue-style' : 'inner-wraper red-style'">
          <dt class="top-area">
            <div class="top-left">
              <p>{{ headerTitle }}</p>
            </div>
            <div class="top-right">
              {{ requestDate }} 요청
            </div>
          </dt>
          <dt class="bottom-area">
            <div>
              <p class="left">보증금</p>
              <p class="right">{{ deposit }}만원</p>
            </div>
            <div>
              <p class="left">월세</p>
              <p class="right">{{ rentalFee }}만원</p>
            </div>
            <div>
              <p class="left">계약기간</p>
              <p class="right">{{ contractPeriod }}</p>
            </div>
            <template v-if="condition === 'COMPLETE_CONTRACT'">
              <div>
                <p class="left">특약사항</p>
                <p class="right">{{ specialCondition }}</p>
              </div>
            </template>
            <template v-else>
              <div>
                <p class="left">요청사항</p>
                <p class="right">{{ request }}</p>
              </div>
            </template>

          </dt>
        </dl>
      </div>

      <div class="room-detail-info-day">
        <ul>
          <div class="room-detail-info">공간정보 상세</div>
        </ul>
        <div class="room-detail-day">{{ roomDetailInfoDay.roomDetailDay }}
        </div>
        <div class="room-detail-arrow" @click="isOpenTabShow1 = !isOpenTabShow1">
          <img :src="isOpenTabShow1 ? require('@/assets/image/icons/uparrow.png') : require('@/assets/image/icons/dwonarrow.png')"></div>
      </div>
      <div v-if="isOpenTabShow1" class="room-detail-info-content">
        <ul>
          <div class="room-detail-title"> <p> {{ roomDetailInfoContent.roomDetailTitle }} </p>
            <p> {{ roomDetailUsageSouthward.roomDetailUsage }} </p>
            <p> {{ roomDetailDirectionOne.roomDetailDirection }} </p>
            <p> {{ roomDetailElevatorCount.roomDetailElevator }} </p>
            <p> {{ roomDetailUpDownOk.roomDetailUpOk }} </p>
            <p> {{ roomDetailHeatingWhether.roomDetailHeating }} </p>
            <p> {{ roomDetailDeliveryOk.roomDetailDelivery }} </p>
            <p> {{ roomDetailMoveinDay.roomDetailMovein }} </p>
            <p> {{ roomDetailBuildeUsage.roomDetailBuilde }} </p>
            <p> {{ roomDetailBuildeDate.roomDetailBuildeDay }} </p>
            <p> {{ roomDetailMoreInfo.roomDetailInfo }} </p>
          </div>
        </ul>

        <ul>
          <div class="room-detail-content"> <p> {{ roomDetailInfoContent.roomDetailContent }} </p>
            <p> {{ roomDetailUsageSouthward.roomDetailSouthward }} </p>
            <p> {{ roomDetailDirectionOne.roomDetailOne }} </p>
            <p> {{ roomDetailElevatorCount.roomDetailCount }} </p>
            <p> {{ roomDetailUpDownOk.roomDetailOk }} </p>
            <p> {{ roomDetailHeatingWhether.roomDetailWhether }} </p>
            <p> {{ roomDetailDeliveryOk.roomDetailOk }} </p>
            <p> {{ roomDetailMoveinDay.roomDetailNow }} </p>
            <p> {{ roomDetailBuildeUsage.roomDetailContainer }} </p>
            <p> {{ roomDetailBuildeDate.roomDetailDate }} </p>
            <p> {{ roomDetailMoreInfo.roomDetailContentInfo }} </p>
          </div>
        </ul>
      </div>
      <div class="producer-info">
        <ul>
          <div class="producer-title">공급자 정보</div>
        </ul>
        <div class="producer-arrow" @click="isOpenTabShow2 = !isOpenTabShow2">
          <img :src="isOpenTabShow2 ? require('@/assets/image/icons/uparrow.png') : require('@/assets/image/icons/dwonarrow.png')"></div>
      </div>
      <div v-if="isOpenTabShow2" class="producer-title-content">
        <ul>
          <div class="producer-title"><p> {{ producerTitleContent.producerTitle }}</p>
            <p>{{ producerPhoneNumber.producerPhone }}</p>
          </div>
        </ul>
        <ul>
          <div class="producer-content"><p>{{ producerTitleContent.producerContent }}</p>
            <p>{{ producerPhoneNumber.producerNumber }}</p></div>
        </ul>
      </div>
    </div>
    <BottomButton
      v-if="condition !== 'REQUEST_CONTRACT'"
      :type="bottomType"
      :left-button="'파기'"
      :right-button="'계약서 변경 요청'"
      :one-button="buttonNm"
      :is-valid="true"
      @action="onButtonAction"/>
  </div>
</template>

<script>
import Header from '@/components/Header/Index'
import BottomButton from '@/components/BottomButton/Index'
import Swiper from '@/components/swiper/Index'

export default {
  name: 'RequestDetail',
  components: {
    Header, BottomButton, Swiper
  },
  data() {
    return {
      condition: 'COMPLETE_CONTRACT', // 1.임대조건 조정요청: REQUEST_ADJUSTMENT 2.임대조건 조정완료 COMPLETE_ADJUSTMENT 3.계약서 작성요청 REQUEST_CONTRACT 4.계약서 작성완료 COMPLETE_CONTRACT
      specialCondition: '임차인은 계약당시 임대물건의 원형을 기간 만료 시 까지 보전할 책임을 지며 소모품 사용 중 파손 시는 임차인 비용으로 수리하되, 임차인의 책임 없는 건물 노후시설의 고장 및 파손은 임대인이 수리한다.',
      imgList: [
        require('@/assets/image/icons/warehouse.png'), require('@/assets/image/icons/warehouse.png'), require('@/assets/image/icons/warehouse.png')
      ],
      isOpenTabShow1: true,
      isOpenTabShow2: true,
      requestDate: '2020-09-16 1:00',
      contractType: '홍길동',
      deposit: 2000,
      rentalFee: 90,
      contractPeriod: '2021-01-01 ~ 2021-12-31',
      request: '전세가 6,500에서 6,000만원으로 조정 부탁드립니다.',
      document: {
        icon: '사무실',
        title: '월세 1,000/100만원',
        subtitle: '명동역 5번 출구에서 도보3분 걸립니다.'
      },
      roomAreaTextSection: {
        roomArea: '100m2'
      },
      roomSpaceTextSection: {
        roomSpace: '3개'
      },
      roomFloorsTextSection: {
        roomFloors: '15/30층'
      },
      roomCostTextSection: {
        roomCost: '35만'
      },
      roomDetailInfoDay: {
        roomDetailDay: '2020-09-16 1:00 등록'
      },
      roomDetailInfoContent: {
        roomDetailTitle: '소재지',
        roomDetailContent: '서울특별시 중구 소공로 70'
      },
      roomDetailUsageSouthward: {
        roomDetailUsage: '용도',
        roomDetailSouthward: '남향'
      },
      roomDetailDirectionOne: {
        roomDetailDirection: '방향',
        roomDetailOne: '1대/100대'
      },
      roomDetailElevatorCount: {
        roomDetailElevator: '엘리베이터',
        roomDetailCount: '1대'
      },
      roomDetailHeatingWhether: {
        roomDetailHeating: '난방종류',
        roomDetailWhether: '개별난방'
      },
      roomDetailUpDownOk: {
        roomDetailUpOk: '상하차여부',
        roomDetailOk: '가능'
      },
      roomDetailDeliveryOk: {
        roomDetailDelivery: '택배바로접수',
        roomDetailOk: '가능'
      },
      roomDetailMoveinDay: {
        roomDetailMovein: '입주가능일',
        roomDetailNow: '즉시'
      },
      roomDetailBuildeUsage: {
        roomDetailBuilde: '건축물용도',
        roomDetailContainer: '창고시설'
      },
      roomDetailBuildeDate: {
        roomDetailBuildeDay: '준공인가일',
        roomDetailDate: '2020.01.01'
      },
      roomDetailMoreInfo: {
        roomDetailInfo: '상세설명',
        roomDetailContentInfo: '서울중앙우체국 5층 사무실입니다. 안락하며 구내 식당이 있습니다.'
      },
      producerTitleContent: {
        producerTitle: '이름',
        producerContent: '김첨지'
      },
      producerPhoneNumber: {
        producerPhone: '연락처',
        producerNumber: '010-2365-2365'
      }
    }
  },
  computed: {
    // 1.임대조건 조정요청: REQUEST_ADJUSTMENT 2.임대조건 조정완료 COMPLETE_ADJUSTMENT 3.계약서 작성요청 REQUEST_CONTRACT 4.계약서 작성완료 COMPLETE_CONTRACT
    headerTitle() {
      let data = ''
      switch (this.condition) {
        case 'REQUEST_ADJUSTMENT':
          data = '임대조건 조정요청'
          break
        case 'COMPLETE_ADJUSTMENT':
          data = '임대조건 조정완료'
          break
        case 'REQUEST_CONTRACT':
          data = '계약서 작성요청'
          break
        case 'COMPLETE_CONTRACT':
          data = '계약서 작성완료'
          break
      }
      return data
    },
    bottomType() {
      let data = ''
      switch (this.condition) {
        case 'REQUEST_ADJUSTMENT':
          data = 1
          break
        case 'COMPLETE_ADJUSTMENT':
          data = 3
          break
        case 'COMPLETE_CONTRACT':
          data = 2
          break
      }
      return data
    },
    buttonNm() {
      let data = ''
      switch (this.condition) {
        case 'COMPLETE_ADJUSTMENT':
          data = '계약서 작성 요청'
          break
        case 'COMPLETE_CONTRACT':
          data = '계약서 동의'
          break
      }
      return data
    }

  },
  methods: {
    onButtonAction(flag) {
      switch (flag) {
        case 'LEFT':
          this.Alert({
            content: '계약을 파기 하시겠습니까?',
            leftBtn: '취소',
            rightBtn: '중단',
            leftsuccess: () => {},
            rightsuccess: () => {
              this.Alert({
                content: '계약이 파기가 취소되었습니다.',
                success: () => {
                  // 성공로직
                }
              })
            }
          })
          break

        case 'RIGHT' :
          this.$router.push('/request_modify')
          break
      }
    }
  }
}
</script>
