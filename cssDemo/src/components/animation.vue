<template>
  <div>
    <div class="wrapper">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'hello'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    display: flex;
  }

  .box {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: lightgreen;
    animation: fadeOut 2s infinite ease-in-out;
  }

  @keyframes fadeOut {
    0% {
      transform: scale(0)
    }
    100% {
      opacity: 0;
      transform: scale(1)
    }
  }

</style>
