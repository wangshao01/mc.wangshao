<template>
  <div class="footer">
    <div class="herder" @click="news">‹即时通讯</div>
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
      ],
    };
  },
  methods: {
    news() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
</style>