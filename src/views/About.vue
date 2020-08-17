<template>
  <div class="About">
    <div class="herder">
      <p style="font-size:2rem" @click="turn">‹</p>
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
    </div>
    <div class="main_nev">
      <div class="main_left">
        <div class="min">
          <p></p>
          <span>咨询问题</span>
        </div>
        <div class="ma_btn">
          <div class="ma_top">
            <label>
              <input name="Fruit" type="radio" value />视频会议
            </label>
            <label>
              <input name="Fruit" type="radio" value />留言咨询
            </label>
          </div>
          <textarea
            style="width:95%;height:50%; padding: 0 0.5rem;border:none; font-size:.9rem"
            placeholder="简要秒速需要咨询的问题，方便医生了解"
          ></textarea>
        </div>
        <div class="footer">
          <p>注︰1、该咨询服务可提供相关资料;</p>
          <span>2、为保证医疗安全，特殊药品如精神类药物、强心类药物等</span>
        </div>
      </div>
      <div class="button">
        <button>确定</button>
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
    turn() {
      this.$router.go(-1);
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
  },
};
</script>
<style lang="scss" scoped>
.button {
  width: 60%;

  margin: 0 auto;
  button {
    width: 100%;
    padding: 0.4rem;
    border: none;
    background: linear-gradient(to right, #51a5fc, #4dc1f4);
    // background: #51a5fc;
    color: #fff;
    border-radius: 0.2rem;
    margin-top: 3rem;
  }
}
.main_nev {
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
  border-radius: 1rem;
  // margin-top: -2rem;
  background: #fff;
  .main_left {
    padding: 0 1.5rem 0 1.5rem;
    .footer {
      width: 100%;
      font-size: 0.8rem;
      margin-top: 0.6rem;
      display: flex;
      flex-direction: column;
      p {
        margin: 0;
        color: #444444;
      }
      span {
        width: 90%;
        // border: 1px solid #000;
        color: #444444;
        padding-left: 1.5rem;
        // margin-left: 1rem;
      }
    }
    .ma_btn {
      width: 100%;
      height: 7rem;
      border: 1px solid #ccc;
      margin-top: 0.8rem;

      .ma_top {
        width: 95%;
        border-bottom: 1px solid #ccc;
        display: block;
        padding: 0.5rem 0;
        margin-left: auto;
        margin-right: auto;

        label {
          // padding: 0 0.5rem;
          font-size: 0.9rem;

          span {
            font-size: 0.8rem;
            margin-left: 0.4rem;
          }
        }
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
  

