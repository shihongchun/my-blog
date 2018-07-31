<template>
<div class="content">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
          <Lunbo/>
          <wen/>
      </div>
      <div class="col-md-4">
          <social/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Lunbo from '../components/artical/Lunbo'
  import Wen from '../components/artical/Wen'
  import Social from '../components/artical/Social'
  export default {
    name: "BlogIndex",
    components: {
      Lunbo,
      Wen,
      Social
    }
  }
</script>

<style scoped>
.content {
  background: url("");
}
</style>
