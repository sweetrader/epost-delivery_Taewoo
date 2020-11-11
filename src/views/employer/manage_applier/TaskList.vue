<template>
  <div id="task-list">
    <!-- 05택배배송_04지원자_01목록 -->
    <Header title="지원자 확인·확정" :is-back-dark="true"/>
    <Tab/>
    <FilterBar :select-place-holder="'정렬'" :option-list="selectOptionList" :header="'정렬'"/>

    <section class="list-section">
      <dl v-for="item in taskList" :key="item.index" class="each-item">
        <dt class="left-part">
          <h3>{{ item.title }}</h3>
          <p>
            <span>{{ item.date }}</span>
            <span>최대예상 {{ item.maxAmount }}개</span>
            <span>개당 {{ item.eachPrice }}원</span>
          </p>
        </dt>
        <dt class="right-part">
          <p>지원자</p>
          <p :class="item.appliers > 0 ? 'on' : ''">{{ item.appliers }}명</p>
        </dt>
      </dl>
    </section>

  </div>
</template>

<script>
import Header from '@/components/Header/Index'
import Tab from '@/components/Tab/Index'
import FilterBar from '@/components/FilterBar/Index.vue'

export default {
  components: {
    Header, Tab, FilterBar
  },
  data() {
    return {
      selectOptionList: ['지원일시순', '희망물량높은순', '평점순', '업무참여순', '업무거절순', '업무결근순'],
      taskList: [
        {
          title: '단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          maxAmount: 1000,
          eachPrice: 1000,
          appliers: 0
        },
        {
          title: '단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          maxAmount: 1000,
          eachPrice: 1000,
          appliers: 10
        },
        {
          title: '단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          maxAmount: 1000,
          eachPrice: 1000,
          appliers: 2
        },
        {
          title: '단기3일/중구/배송원모집단기3일/중구/배송원모집단기3일/중구/배송원모집단기3일/중구/배송원모집단기3일/중구/배송원모집단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          maxAmount: 1000,
          eachPrice: 1000,
          appliers: 3
        },
        {
          title: '단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          maxAmount: 1000,
          eachPrice: 1000,
          appliers: 0
        },
        {
          title: '단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          maxAmount: 1000,
          eachPrice: 1000,
          appliers: 0
        }
      ]
    }
  }
}
</script>
