<template>
  <div class="bann col-md-12">
    <h3>关注我</h3>
    <div class="gzwm row">
      <ul id="show-erweima" class="clearfix">
        <li class="col-md-3"><a class="xlwb text-nowrap" href="#" target="_blank">新浪微博</a></li>
        <li class="col-md-3"><a class="txwb text-nowrap" href="#" target="_blank">腾讯微博</a></li>
        <li class="col-md-3"><a class="rss" href="#" target="_blank">邮箱</a></li>
        <li class="col-md-3"><a class="wx" href="#">微信</a><div class="erweima"></div></li>
      </ul>
    </div>
    <div class="ms-top row">
      <ul class="nav nav-tabs col-md-10 col-md-offset-2">
        <li class="active"><a href="#">点击排行</a></li>
        <li><a href="#">最新文章</a></li>
        <li><a href="#">站长推荐</a></li>
      </ul>
    </div>
    <div class="row bd" id="ms-main">
      <div class="bd-news">
        <ul class="col-md-10 col-md-offset-2">
          <li><a href="/" target="_blank">世界如此美好</a></li>
          <li><a href="/" target="_blank">世界如此美好</a></li>
          <li><a href="/" target="_blank">世界如此美好</a></li>
          <li><a href="/" target="_blank">世界如此美好</a></li>
          <li><a href="/" target="_blank">世界如此美好</a></li>
          <li><a href="/" target="_blank">世界如此美好</a></li>
          <li><a href="/" target="_blank">世界如此美好</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Social',
    methods: {
      // hello: function(e) {
      //   var str;
      //   console.log(e.target.files[0]);
      //   var _this = this;
      //   var that = new FormData();
      //   that.append("myfile", e.target.files[0]);
      //   this.$http.post('gp/app/index.php?i=2&c=entry&do=tool/image&m=qw_deal', that)
      //     .then(function(sures) { console.log(sures);
      //       console.log("上产成功") })
      //     .catch(function(catchres) { console.log(catchres);
      //       console.log("上传失败") })
      // }
    }
  }
</script>

<style scoped>
  .bann {
    margin-top: 60px;
  }

  ul, li {
    list-style-type: none;
  }
  #show-erweima li:nth-child(4) {
    position: relative;
  }
  #show-erweima li:nth-child(4) div {
    position: absolute;
    display: none;
    width: 100px;
    height: 100px;
    right: -100px;
    background-color: #5e5e5e;
  }
  #show-erweima li:nth-child(4):hover div {
    display: block;
  }
  .gzwm ul {
    /*width: 100%;*/
    margin: 30px 0;
    text-align: center;
    /*overflow: hidden*/
  }

  .gzwm li {
    /*text-align: center;*/
    float: left;
  }

  .gzwm li a {
    color: #747F8C;
    /*width: 60px;*/
    padding-top: 40px;
    float: left;
  }

  .gzwm .rss {
    background: url(/static/pngs/mail.png) center top no-repeat;
    margin-left: 10px;
    background-size: 30px 30px;
  }

  .gzwm a:hover {
    color: #000;
  }

  .gzwm .xlwb {
    background: url(/static/pngs/weibo.png) center top no-repeat;
    background-size: 30px 30px;
  }

  .gzwm .txwb {
    background: url(/static/pngs/tweibo.png) center top no-repeat;
    background-size: 30px 30px;
  }


  .gzwm .wx {
    background: url(/static/pngs/weixin.png) center top no-repeat;
    background-size: 30px 30px;
  }


  .ms-top {
    line-height: 32px;
    font-size: 14px;
    margin-top: 40px;
  }
  .bd {
    /*padding-top: 5px;*/
    margin-left: -30px;
  }
  .bd-news ul li {
    text-decoration: none;
    overflow: hidden;
    font-size: 14px;
    border-bottom: transparent 1px solid;
  }

  .bd-news ul li a {
    display: block;
    line-height: 40px;
    text-indent: 20px;
    background-color: #d0e9c6;
    text-decoration: none;
  }

  .bd-news ul li a:hover {
    color: #000;
  }

  .bd-news ul li:hover {
    border-bottom: #000 1px solid;
  }

</style>
