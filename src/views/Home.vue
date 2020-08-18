<template>
  <div class="home">
    <div class="herder">
      <img src="@/assets/0000.jpg" alt />

      <img
        @click="news"
        style="width: 2rem;
    position: absolute;
    top: 2.5rem;
    right: 1rem;"
        class="img01"
        src="@/assets/jishitongxun.jpg"
        alt
      />
    </div>
    <div class="main">
      <div class="main_qj" @click="instant">
        <div class="left">
          <img src="@/assets/ys.jpg" alt />
        </div>
        <div class="ali">
          <div class="ali_top">
            <p style="font-size:1.5rem; color:#51A3FC;">王强</p>
            <p class="p1" style="text-indent :.5rem;margin-top: .7rem;">
              <span>皮肤科</span>
              <span>|</span>
              <span>主治医生</span>
            </p>
          </div>
          <div class="ali_zj">擅长：失语、骨折</div>
          <div class="btn">
            <p>
              <span>留言咨询</span>
              <span style="color:#51A3FC;">100/次</span>
            </p>
            <p>
              <span>视频咨询</span>
              <span style="color:#51A3FC;">150/次</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main_qj" @click="instant">
        <div class="left">
          <img src="@/assets/ys.jpg" alt />
        </div>
        <div class="ali">
          <div class="ali_top">
            <p style="font-size:1.5rem; color:#51A3FC;">王强</p>
            <p class="p1" style="text-indent :.5rem;margin-top: .7rem;">
              <span>皮肤科</span>
              <span>|</span>
              <span>主治医生</span>
            </p>
          </div>
          <div class="ali_zj">擅长：失语、骨折</div>
          <div class="btn">
            <p>
              <span>留言咨询</span>
              <span style="color:#51A3FC;">100/次</span>
            </p>
            <p>
              <span>视频咨询</span>
              <span style="color:#51A3FC;">150/次</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main_qj" @click="instant">
        <div class="left">
          <img src="@/assets/ys.jpg" alt />
        </div>
        <div class="ali">
          <div class="ali_top">
            <p style="font-size:1.5rem; color:#51A3FC;">王强</p>
            <p class="p1" style="text-indent :.5rem;margin-top: .7rem;">
              <span>皮肤科</span>
              <span>|</span>
              <span>主治医生</span>
            </p>
          </div>
          <div class="ali_zj">擅长：失语、骨折</div>
          <div class="btn">
            <p>
              <span>留言咨询</span>
              <span style="color:#51A3FC;">100/次</span>
            </p>
            <p>
              <span>视频咨询</span>
              <span style="color:#51A3FC;">150/次</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main_qj" @click="instant">
        <div class="left">
          <img src="@/assets/ys.jpg" alt />
        </div>
        <div class="ali">
          <div class="ali_top">
            <p style="font-size:1.5rem; color:#51A3FC;">王强</p>
            <p class="p1" style="text-indent :.5rem;margin-top: .7rem;">
              <span>皮肤科</span>
              <span>|</span>
              <span>主治医生</span>
            </p>
          </div>
          <div class="ali_zj">擅长：失语、骨折</div>
          <div class="btn">
            <p>
              <span>留言咨询</span>
              <span style="color:#51A3FC;">100/次</span>
            </p>
            <p>
              <span>视频咨询</span>
              <span style="color:#51A3FC;">150/次</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main_qj" @click="instant">
        <div class="left">
          <img src="@/assets/ys.jpg" alt />
        </div>
        <div class="ali">
          <div class="ali_top">
            <p style="font-size:1.5rem; color:#51A3FC;">王强</p>
            <p class="p1" style="text-indent :.5rem;margin-top: .7rem;">
              <span>皮肤科</span>
              <span>|</span>
              <span>主治医生</span>
            </p>
          </div>
          <div class="ali_zj">擅长：失语、骨折</div>
          <div class="btn">
            <p>
              <span>留言咨询</span>
              <span style="color:#51A3FC;">100/次</span>
            </p>
            <p>
              <span>视频咨询</span>
              <span style="color:#51A3FC;">150/次</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <img src="../assets/footer.jpg" alt />
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    instant() {
      this.$router.push("./About");
    },
    news() {
      this.$router.push("./news");
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
  },
};
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  .img01 {
    width: 5rem;
    position: absolute;
    top: 2rem;
    left: 10rem;
  }
  img {
    width: 100%;
  }
}
.herder {
  width: 100%;
  img {
    width: 100%;
  }
}
.main {
  padding: 0.6rem 1.2rem;
  display: flex;
  .main_qj {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0rem 1rem 0.9rem 1rem;
    display: flex;
    .left {
      width: 25%;
      padding: 0.5rem 0 0 0;
      img {
        width: 100%;
      }
    }
    .ali {
      width: 75%;
      height: 100%;
      padding: 0.9rem 0.5rem 0.5rem 1.5rem;
      .ali_top {
        display: flex;
        // align-items: center;

        p {
          margin: 0;
        }
        span {
          font-size: 0.7rem;
          margin-right: 0.4rem;
        }
      }
      .ali_zj {
        color: #51a3fc;
        font-size: 0.8rem;
        margin-top: 0.3rem;
      }
      .btn {
        display: flex;
        font-size: 0.8rem;
        justify-content: space-between;
        p {
          margin: 0;
          margin-top: 0.5rem;
        }
      }
    }
  }
}
</style>
  

