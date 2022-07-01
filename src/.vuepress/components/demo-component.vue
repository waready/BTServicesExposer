<template>

  <img :src="$withBase('/img/16.png')" class="center">

</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>