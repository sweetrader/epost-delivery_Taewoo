<template>
  <div id="tab">
    <section @click="onChangeFocusing(0)">
      <p :class="tabOn[0] ? 'active' : ''">
        택배수집
      </p>
    </section>
    <section @click="onChangeFocusing(1)">
      <p :class="tabOn[1] ? 'active' : ''">
        소포분류
      </p>
    </section>
    <section @click="onChangeFocusing(2)">
      <p :class="tabOn[2] ? 'active' : ''">
        택배배송
      </p>
    </section>
    <section @click="onChangeFocusing(3)">
      <p :class="tabOn[3] ? 'active active-3' : ''">
        {{ currentTab }}운송차량
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabOn: [true, false, false, false]
    }
  },
  computed: {
    currentTab() {
      return this.activeTab
    }
  },
  watch: {
    currentTab() {
      this.onChangeFocusing(this.currentTab)
    }
  },
  created() {
    this.onChangeFocusing(this.currentTab)
  },
  methods: {
    onChangeFocusing(index) {
      const tempValue = [false, false, false, false]
      tempValue.splice(index, 1, true)

      this.tabOn = tempValue
    }
  },
}
</script>
