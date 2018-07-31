<template>
  <div>
  <div class="head">
    <div class="row">
      <h2 class="col-md-4 col-md-offset-3 blog-name"><a href="javascript:void(0);">我的博客</a></h2>
    </div>
     <div class="row">
      <h3 class="col-md-4 col-md-offset-8">最诚挚的问候......</h3>
  </div>
    <div class="container">
      <div class="row">
        <ul class="nav nav-pills nav-justified  navigation">
        <li class="">
          <router-link to="/blogindex">博客首页</router-link>
        </li>
        <li>
          <router-link to="/blogartical">技术文章</router-link>
        </li>
        <li class="">
          <router-link to="/lifeartical">生活文章</router-link>
        </li>
          <li class="">
          <router-link to="/about">关于博主</router-link>
        </li>
          <li class="">
          <router-link to="/board">留言板</router-link>
        </li>
        </ul>
      </div>
    </div>
  </div>
    <!--<div>-->
      <!--<router-view></router-view>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
.head {
  background: url("../assets/blog1.jpg");
  color: #c0a16b;
}
.head .blog-name>a {
  color: #FFFFFF;
  text-decoration: none;
}
.navigation a{
  font-size: 20px;
  color: #1b1b1b;
}
</style>
