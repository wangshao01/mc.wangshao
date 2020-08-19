<template>
  <div class="footer">
    <div class="herder" @click="news">‹</div>
    <div class="footerNav" v-for="(item,index) in list" :key="index" @click="chat">
      <p class="p1">
        <img :src="item.img" />
      </p>
      <p class="p2">{{item.name}}</p>
      <p class="p3">{{item.add}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img: require("@/assets/ys.jpg"),
          name: "你好",
          add: "14:00",
        },
        {
          img: require("@/assets/ys.jpg"),
          name: "你好",
          add: "14:00",
        },
        {
          img: require("@/assets/ys.jpg"),
          name: "你好",
          add: "14:00",
        },
        {
          img: require("@/assets/ys.jpg"),
          name: "你好",
          add: "14:00",
        },
        {
          img: require("@/assets/ys.jpg"),
          name: "你好",
          add: "14:00",
        },
      ],
    };
  },
  methods: {
    news() {
      this.$router.push("/");
    },
    chat() {
      this.$router.push("./footer");
    },
  },
};
</script>
<style scoped lang="scss">
.herder {
  // width: 100%;
  height: 3rem;
  background-image: linear-gradient(to right, #51a7fb, #4dc1f4);
  color: #fff;
  font-size: 2rem;
  margin: 0;
  line-height: 3rem;
  padding: 0 1rem;
}
.footer {
  width: 100%;
  align-items: center;
  .footerNav {
    padding: 0 1rem;
    display: flex;
    margin-top: 0.5rem;
    border-bottom: 1px solid #ccc;
    p {
      margin: 0;
    }
    .p1 {
      width: 15%;
      img {
        width: 100%;
      }
    }
    .p2 {
      width: 70%;
      margin-top: 2rem;
      padding-left: 1rem;
    }
    .p3 {
      width: 15%;
      margin-top: 1rem;
      color: #000;
      font-size: 0.7rem;
    }
  }
}
</style>