<template>
  <div class="home">
    <div class="herder">
      <img src="@/assets/header.jpg" alt />
    </div>
    <div class="main">
      <div class="main_qj">
        <div class="left">
          <img src="@/assets/ys.jpg" alt />
        </div>
        <div class="ali"></div>
        <div class="regin"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
  },
};
</script>
<style lang="scss" scoped>
.herder {
  width: 100%;
  img {
    width: 100%;
  }
}
.main {
  padding: 0 1.2rem;
  display: flex;
  .main_qj {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0 1rem 0.5rem 1rem;
    .left {
      width: 25%;
      padding: 0.5rem 0 0 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>
  

