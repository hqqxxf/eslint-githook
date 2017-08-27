<template>
  <div>
    <div class="but">
      <yp-addr :propsShow="true" @ok="success" @close="close"></yp-addr>
    </div>
    <div class="wrapper">
      <div class="box box-1"></div>
      <div class="box box-2"></div>
      <div class="box box-3"></div>
      <div class="box box-4"></div>
      <div class="box box-5"></div>
    </div>
  </div>
</template>

<script>
  import Addr from '@zz-yp/vue-ui-lib/dist/addr'
  import Vue from 'vue'
  Vue.component(Addr.name, Addr)
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'hello'
      }
    },
    methods: {
      success () {},
      close () {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    display: flex;
  }

  .box {
    width: 5px;
    height: 60px;
    margin-right: 10px;
    background: lightgreen;
    animation: mymove 1.2s infinite ease-in-out;
  }

  .box-2 {
    animation-delay: -1.1s;
  }

  .box-3 {
    animation-delay: -1.0s;
  }

  .box-4 {
    animation-delay: -0.9s;
  }

  .box-5 {
    animation-delay: -0.8s;
  }

  @keyframes mymove {
    0%, 40%, 100% {
      transform: scaleY(0.4)
    }
    20% {
      transform: scaleY(1)
    }
  }

</style>
