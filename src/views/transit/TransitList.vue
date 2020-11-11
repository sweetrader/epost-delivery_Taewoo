<template>
  <!--  08운송차량_02게시글_01 – 2 -->
  <div id="transit-list">
    <Header title="게시글 보기"/>
    <Tab :active-tab="3"/>
    <div class="notice-section" :style="{ backgroundImage: 'url(\'' + noticeImg + '\')' }">
      <p>{{ notice }}</p>
    </div>
    <FilterBar
      :select-place-holder="selectHeader"
      :option-list="selectOptionList"
      :header="selectHeader"
      :total-amount="postList.length"
      :filter-router-name="'TransitFilter'"
    />

    <section class="list-section">
      <div v-for="item in postList" :key="item.index" class="each-list-item">
        <div class="flex-item">
          <div class="item">
            <div class="left">
              <div class="updown-icon up">상</div>
            </div>
            <div class="right">
              <dt class="title">{{ item.locationOfLoading }}</dt>
              <dt class="bottom">
                <p>{{ item.dateOfLoading }}</p>
                <p>{{ item.basicAddrOfLoading }}</p>
              </dt>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="updown-icon down">하</div>
            </div>
            <div class="right">
              <dt class="title">{{ item.locationOfGetOff }}</dt>
              <dt class="bottom">
                <p>{{ item.dateOfGetOff }}</p>
                <p>{{ item.basicAddrOfGetOff }}</p>
              </dt>
            </div>
          </div>
        </div>
        <div class="detail-info">
          <div class="left">
            <span class="text">{{ item.isLongDistance | distanceType }}</span>
            <span v-if="item.stopoverList && item.stopoverList.length > 0" class="text">
              경유지 <span class="point-text-color">{{ item.stopoverList.length }}</span>
            </span>
            <span class="text">{{ item.vehicleType }}({{ item.tonnage }}톤)</span>
          </div>
          <div class="right">
            <span class="text">운송료</span>
            <span class="text">{{ addComma(item.maxShippingFeeOfVehicle) }}원</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header/Index'
import Tab from '@/components/Tab/Index'
import FilterBar from '@/components/FilterBar/Index.vue'
import moment from "moment";

export default {
  components: {
    Header, Tab, FilterBar
  },
  filters: {
    distanceType(isLongDistance) {
      if (isLongDistance) {
        return '장거리'
      }
      return '단거리'
    }
  },
  data() {
    return {
      notice: '여러개의 물량을 운송하는 업무입니다.',
      noticeImg: require('@/assets/image/icons/postman.png'),
      postList: [
        {
          locationOfLoading: '서울중앙우체국서울중앙우체국',
          dateOfLoading: '2020-09-19(월) 12:00',
          basicAddrOfLoading: '서울 중구',
          locationOfGetOff: '동서울우편집중국',
          dateOfGetOff: '2020-09-19(월) 12:00',
          basicAddrOfGetOff: '서울 중구',
          vehicleType: '카고',
          tonnage: 2.5,
          maxShippingFeeOfVehicle: 200000,
          isLongDistance: true,
          stopoverList: [
            {
              location: '경유지1'
            },
            {
              location: '경유지2'
            }
          ]
        },
        {
          locationOfLoading: '서울중앙우체국',
          dateOfLoading: '2020-09-19(월) 12:00',
          basicAddrOfLoading: '서울 중구',
          locationOfGetOff: '동서울우편집중국',
          dateOfGetOff: '2020-09-19(월) 12:00',
          basicAddrOfGetOff: '서울 중구',
          vehicleType: '카고',
          tonnage: 1,
          maxShippingFeeOfVehicle: 200000,
          isLongDistance: false,
          stopoverList: []
        },
        {
          locationOfLoading: '서울중앙우체국',
          dateOfLoading: '2020-09-19(월) 12:00',
          basicAddrOfLoading: '서울 중구',
          locationOfGetOff: '동서울우편집중국',
          dateOfGetOff: '2020-09-19(월) 12:00',
          basicAddrOfGetOff: '서울 중구',
          vehicleType: '카고',
          tonnage: 2.5,
          maxShippingFeeOfVehicle: 200000,
          isLongDistance: true,
          stopoverList: []
        },
        {
          locationOfLoading: '서울중앙우체국',
          dateOfLoading: '2020-09-19(월) 12:00',
          basicAddrOfLoading: '서울 중구',
          locationOfGetOff: '동서울우편집중국',
          dateOfGetOff: '2020-09-19(월) 12:00',
          basicAddrOfGetOff: '서울 중구',
          vehicleType: '카고',
          tonnage: 2.5,
          maxShippingFeeOfVehicle: 200000,
          isLongDistance: true,
          stopoverList: []
        },
        {
          locationOfLoading: '서울중앙우체국',
          dateOfLoading: '2020-09-19(월) 12:00',
          basicAddrOfLoading: '서울 중구',
          locationOfGetOff: '동서울우편집중국',
          dateOfGetOff: '2020-09-19(월) 12:00',
          basicAddrOfGetOff: '서울 중구',
          vehicleType: '카고',
          tonnage: 2.5,
          maxShippingFeeOfVehicle: 200000,
          isLongDistance: true,
          stopoverList: []
        },
        {
          locationOfLoading: '서울중앙우체국',
          dateOfLoading: '2020-09-19(월) 12:00',
          basicAddrOfLoading: '서울 중구',
          locationOfGetOff: '동서울우편집중국',
          dateOfGetOff: '2020-09-19(월) 12:00',
          basicAddrOfGetOff: '서울 중구',
          vehicleType: '카고',
          tonnage: 2.5,
          maxShippingFeeOfVehicle: 200000,
          isLongDistance: true,
          stopoverList: []
        }
      ],
      selectOptionList: ['업무임박순', '물량높은순', '마감임박순'],
      selectHeader: '정렬'
    }
  }
}
</script>
