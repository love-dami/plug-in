<template>
  <div class="iphone" v-show="visible" @click="close">
    <div class="box flex" @click.stop="f=>f">
      <div class="contents">
        <div class="container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["visible"],
  methods: {
    close() {
      this.$emit("update:visible", false);
    }
  }
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.iphone {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(49, 49, 49, 0.678);
  z-index: 10000;
  .box {
    justify-content: center;
    position: absolute;
    height: 722px;
    width: 360px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.212);
    border-radius: 4px;
    overflow: auto;
    background: white url("~./iphone.png") no-repeat;
    border-radius: 56px;
  }
  img {
    width: 100%;
  }
}
.contents {
  height: 647px;
  width: 310px;
  position: relative;
  top: 53px;
  border-radius: 0 0 30px 30px;
  overflow: auto;
}

.container {
  width: 310px !important;
}
</style>
