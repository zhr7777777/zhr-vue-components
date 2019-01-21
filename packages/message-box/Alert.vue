<template>
  <div class="alert-box">{{ content }}</div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    content: {
      type: String,
      required: true,
      validator(value) {
        return value !== ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
  color: #ebebeb;
  font-size: 32px;
  text-align: center;
  line-height: 130px;
  background-color: rgba(0,0,0,0.75);
}
</style>
