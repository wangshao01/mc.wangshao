<template>
  <div class="About">
    <div class="herder">
      <p style="font-size:2rem">‹</p>
      <p>个人信息</p>
      <p>
        <img src="../assets/jishitongxun.jpg" alt />
      </p>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="min">
          <p></p>
          <span>基本信息</span>
        </div>
        <div class="ma">
          <input type="text" name id placeholder="姓名" />
          <input type="text" name id placeholder="手机号" />
          <input type="text" name id placeholder="身份证号" />
        </div>
      </div>
      <div></div>
    </div>
    <div class="main_nev">
      <div class="main_left">
        <div class="min">
          <p></p>
          <span>咨询问题</span>
        </div>
        <div class="ma">
          <div class="ma_top">
            <label>
              <input type="text" name id />
            </label>
          </div>
        </div>
      </div>
      <div></div>
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
.main_nev {
  border-radius: 1rem;
  // margin-top: -2rem;
  background: #fff;
  .main_left {
    padding: 0 1.5rem 0 1.5rem;
    .ma {
      width: 100%;
      height: 7rem;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.8rem;
      .ma_top {
      }
    }
    .min {
      display: flex;
      text-indent: 0.5rem;
      p {
        display: flex;
        width: 0.4rem;
        font-weight: bold;
        background: #50a8fb;
        color: #50a8fb;
        margin: 0;
      }
      span {
        color: #50a8fb;
        font-weight: bold;
      }
    }
  }
}
.main {
  border-radius: 1rem;
  margin-top: -2rem;
  background: #fff;
  .main_left {
    padding: 1.5rem 1.5rem;
    .ma {
      width: 100%;
      height: 7rem;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.8rem;
      input {
        width: 90%;
        border: none;
        border-bottom: 1px solid #ccc;
        padding: 0.3rem;
        margin-top: 0.2rem;
      }
    }
    .min {
      display: flex;
      text-indent: 0.5rem;
      p {
        display: flex;
        width: 0.4rem;
        font-weight: bold;
        background: #50a8fb;
        color: #50a8fb;
        margin: 0;
      }
      span {
        color: #50a8fb;
        font-weight: bold;
      }
    }
  }
}
.About {
  height: 100%;
  z-index: 1;
}
.herder {
  width: 100%;
  display: flex;
  height: 6rem;
  line-height: 3rem;
  justify-content: space-between;
  background: #50a8fb;
  p {
    margin: 0;
    padding: 0 1rem;
    color: #fff;
    margin-top: 0.5rem;
  }
  img {
    width: 2rem;
    margin-top: 0.5rem;
  }
}
</style>
  

