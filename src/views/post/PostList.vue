<template>
  <!-- 2. 05택배배송_02게시글   -->
  <div id="post-list">
    <Header title="게시글 등록"/>
    <Tab/>
    <div class="notice-section" :style="{ backgroundImage: 'url(\'' + noticeImg + '\')' }">
      <p>{{ notice }}</p>
    </div>
    <FilterBar :select-place-holder="selectHeader" :option-list="selectOptionList" :header="selectHeader"/>

    <section class="list-section">
      <div v-for="item in postList" :key="item.index" class="each-list-item">
        <dl class="left">
          <dt class="top">{{ item.title }}</dt>
          <dt class="bottom">
            <p>{{ item.date }}</p>
            <p>{{ item.location }}</p>
          </dt>
        </dl>
        <dl class="right">
          <dt class="top">최대예상</dt>
          <dt>{{ item.maximumAmount }}개</dt>
        </dl>
      </div>
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
      notice: '택배를 고객님께 전달하는 업무입니다.',
      noticeImg: require('@/assets/image/icons/postman.png'),
      postList: [
        {
          title: '단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          location: '서울시 중구',
          maximumAmount: 300
        },
        {
          title: '[급구] 분류 작업 없는 생수전담 배송',
          date: '2020-09-19(토)',
          location: '제주시 서귀포구',
          maximumAmount: 300
        },
        {
          title: '[새벽배송]초보가능/5시간근무/건1000',
          date: '2020-09-19(토)',
          location: '서울시 중구',
          maximumAmount: 300
        },
        {
          title: '의료용품 배송기사 모집(350이상/유류비지원)',
          date: '2020-09-19(토)',
          location: '서울시 중구',
          maximumAmount: 300
        },
        {
          title: '단기3일/중구/배송원모집',
          date: '2020-09-19(토)',
          location: '서울시 중구',
          maximumAmount: 300
        },
        {
          title: '의료용품 배송기사 모집(350이상/유류비지원)',
          date: '2020-09-19(토)',
          location: '서울시 중구',
          maximumAmount: 300
        }
      ],
      selectOptionList: ['업무임박순', '물량높은순', '마감임박순'],
      selectHeader: '정렬'
    }
  }
}
</script>
