<template>
  <div class="mask">
    <div class="box" :style="boxStyle">
      <span v-if="title" class="title">{{ title }}</span>
      <ul>
        <li v-for="(e, i) in list" :key="i" class="list-item" :class="{ cur: cur === i}" @click="choose(i)">
          <span>{{ e.text }}</span>
          <i v-if="cur === i"></i>
        </li>
        <!-- TODO: use event agency -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
  props: {
    boxStyle: {
      type: Object,
      default() {
        return {
          top: '50%'
        }
      }
    },
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: [],
      required: true
    },
    cb: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      cur: 0
    }
  },
  mounted() {
    console.log(this.boxStyle)
  },
  methods: {
    choose(i) {
      this.cur = i
      this.cb(i)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
$dna-color: #e50012;

.mask {
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .box {
    position: fixed;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 600px;
    // border-radius: 7px;
    overflow: hidden;
    font-size: 28px;
    background-color: #fff;
    text-indent: 32px;
    .title {
      text-align: center;
      line-height: 80px;
      color: #333;
    }
    .list-item {
      font-size: 26px;
      border-bottom: solid 1px #e6e6e6;
      color: #666;
      line-height: 80px;
      &:first-child {
        border-top: solid 1px #e6e6e6;
      }
      &:last-child {
        border: 0;
      }
      &.cur {
        color: $dna-color;
      }
      i {
        width: 80px;
        height: 80px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs2k0rRFEcx/EZyWJY0GTDws4LsLIRDUsLEhI7omTDYprxEBk14yEpioVIFAtZyHgq78DGxkuQjbWmcH1vnTKRzOM19/b716+zmDszt8/87zn3zIzfsiyf6meViUAwghGMYAQjGMEIRjCCEYxKMIIRjGAEIxjBCEYwghGMSjAZVPl/n8CTP5jP0+vJPDmvs14u1DFftUMGyKvnOibH8ptOaSFDdMudYHy+ChImo2QQlKQn55gczjdChskESRbzjdxUUTJCpsiZp1elLGqajJMxexVy3XLN8htgeOfaTxXwZefIAul3AqVYy3UziQHUUKAPzr58Fk3HnLr5zveZdJANcIJ5nlvUdMoMWXb1loBL6NEspU3kAJzKPCbaWbJEEp7YK4Fzb3BayQk4VVm+RMSA2N0SJx+e2USCc2MmyzZyBE5NFijxtPHNc7trcC4Zekk72Qen9o+nhA1G1Ok5xfFNJDjXDD0kRHbBqf7l0D4yaeaVhO+fy5HdNTi35rIKmQk58O2QLrJCtkoBxdGvHcC5SsM5Tnuom2zb3URW7ZvDkti+O/3PcLqlk2HPdMcD2TQoMWLlAO4NGINj3wAekqC5o13LoxO9A2Nw7Am5kayTlGBcUvqVQDCCEYxgBCMYwQhGMIIRjEowghGMYAQjGMEIRjCCEYxKMJnUpwADAFfZeQagvPOgAAAAAElFTkSuQmCC);
        background-size: 80px;
        float: right;
        padding-right: 10px;
      }
    }
  }
}
</style>
