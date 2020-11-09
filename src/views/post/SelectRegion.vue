<template>
  <div id="select_region">
    <Header title="지역선택" :on-close="true" />
    <dl class="tab-aria">
      <dt><p :class="tabOn[0] ? 'on tab' : 'tab'" @click="onTab(0)">{{selectCity}}</p></dt>
      <dt><p :class="tabOn[1] ? 'on tab' : 'tab'" @click="onTab(1)">{{selectState}}</p></dt>
    </dl>

    <dl class="ctgr-list-section">
      <dt v-for="(item, index) in ctgrList" :key="item.index" class="ctgr-list-item" @click="onSelectItem(index)">
        <p>{{ item }}</p>
      </dt>
    </dl>
    <BottomButton :type="2" :left-button="'초기화'" :right-button="'조회'"/>
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
      level: 1, // 카테고리 레벨
      selectCity: '시/도 선택',
      selectState: '시/군/구 선택',
      selectAdditionalAddr: '읍/면/동 선택',
      tabOn: [true, false],
      ctgrList: ['전체', '서울', '경기', '인천', '강원', '부산', '경상남도', '경상북도', '충청남도', '충청북도', '광주', '대전', '전라남도', '전라북도', '제주']
    }
  },
  methods: {
    onTab(index) {
      for (let i = 0; i < this.tabOn.length; i++) {
        document.getElementsByClassName('tab')[i].classList.remove('on')        
      }
      document.getElementsByClassName('tab')[index].classList.add('on')
    },
    onSelectItem(index, flag) { // flag : 상하위 카테고리 구분 키
      document.getElementsByClassName('tab')[0].classList.add('red-text')
      this.selectCity = this.ctgrList[index]
    }
  },
}
</script>