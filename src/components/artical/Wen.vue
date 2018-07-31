<template>
  <div class="topnews">
    <h2><span>
      <a href="/" target="_blank">栏目标题</a>
      <a href="/" target="_blank">栏目标题</a>
      <a href="/" target="_blank">栏目标题</a></span><b>文章</b>推荐
    </h2>
    <div class="blogs">
      <div v-for="(value,index) in homeLists_data" :key="index">
        <figure><img :src="`${value.imgSrc}`"></figure>
        <h3><router-link to="/content">{{value.name}}</router-link></h3>
        <p>{{value.content}}</p>
        <p class="autor"><span class="lm f_l"><a href="/">个人博客</a></span><span class="dtime f_l">2018-05-01</span><span
          class="viewnum f_r">浏览（<a href="/">459</a>）</span><span class="pingl f_r">评论（<a href="/">30</a>）</span></p>
      </div>
    </div>
    <div class="bot">
      <img src="/static/assets/Top.jpg" alt="返回头部">
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'Wen',
    data () {
      return {
        homeLists_data: []
      }
    },
    created () {
      Axios.get('static/wenjian/art.json')
        .then(response => {
          // 判断是否还有数据
          if (response) {
            this.homeLists_data.push(...response.data)
            // console.log(response)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    mounted () {
      window.onscroll = function () {
        console.log(this.scroll())
        // if(this.scroll().top>200){
        //   this.bot.style.display = "block";
        // }
        // else {
        // this.bot.style.display = "none";
        // }
      }
    },
    methods: {
      scroll () {
        if (window.pageYOffset) {
          return {
            'top': window.pageYOffset,
            'left': window.pageXOffset
          }
        }
        else if (document.documentElement.scrollTop) {
          return {
            'top': document.documentElement.scrollTop,
            'left': document.documentElement.scrollLeft
          }
        }
        else {
          return {
            'top': document.body.scrollTop,
            'left': document.body.scrollLeft
          }
        }
      }
    },
    computed: {
      bot () {
        return document.getElementsByClassName('bot')[0]
      }
    }
  }
</script>

<style scoped>
  .f_l {
    float: left
  }

  .f_r {
    float: right
  }

  .topnews {
    margin: 20px 0;
  }

  .topnews h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 36px;
    color: #333;
    border-bottom: #db6d4c 4px solid;
  }

  .topnews h2 span {
    float: right;
    font-size: 12px;
    font-weight: normal;
  }

  .topnews h2 span a {
    display: inline-block;
    padding: 0 5px;
  }

  .topnews h2 span a:hover {
    color: #000
  }

  .blogs {
    padding: 30px 0;
    position: relative;
    border-bottom: #CCC 1px solid;
    overflow: hidden
  }

  .blogs h3 {
    font-size: 16px;
    font-weight: bold;
    transition: all .5s;
    margin-bottom: 10px
  }

  .blogs h3 a {
    color: #474645;
  }

  .blogs h3 a:hover {
    color: #066;
    text-decoration: underline
  }

  .blogs figure {
    float: left;
    width: 200px;
    height: 100px;
    margin-top: 40px;
    margin-right: 20px;
    overflow: hidden;
  }

  .blogs figure img {
    width: 200px;
    height: 100px;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .blogs figure:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
  }

  .blogs ul {
    float: right;
    line-height: 22px;
    width: 72%;
    color: #756F71;
  }

  .autor {
    overflow: hidden;
    clear: both;
    margin: 10px 0;
    display: inline-block;
    color: #838383;
    width: 100%;
  }

  .autor span {
    margin: 0 10px 0 0;
    padding-left: 20px
  }

  .autor span a {
    color: #759b08;
  }

  .autor span a:hover {
    text-decoration: underline
  }

  .tit01 h3 {
    line-height: 40px;
    color: #38485A;
    font-size: 18px;
    border-bottom: 1px solid #E6E6E6;
    height: 40px
  }

  .bot {
    position: fixed;
    right: 50px;
    bottom: 100px;
    display: none;
    cursor: pointer;
  }
</style>
