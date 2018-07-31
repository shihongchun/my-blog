<template>
  <div class="slider" @mouseover="stop" @mouseout="start">
    <div class="slider_wrapper">
      <ul class="ul1">
        <li class="slider_item" v-for="(im,index) in imgs" :key="index">
          <a href="#"><img :src="im.src" :alt="im.name"></a>
        </li>
      </ul>
    </div>
    <div class="arr">
      <button class="slider-control slider-control-prev" @click="changeLeft">﹤</button>
      <button class="slider-control slider-control-next" @click="changeRight">﹥</button>
    </div>
    <ul class="st">
      <li class="site" v-for="(value,index) in imgs" :key="index" @click="go(index)"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Lunbo',
    num: 1,
    data () {
      return {
        imgs: [
          {
            nm: 0,
            name: '00',
            src: '/static/assets/01.jpg'
          },
          {
            nm: 1,
            name: '01',
            src: '/static/assets/02.jpg'
          },
          {
            nm: 2,
            name: '02',
            src: '/static/assets/03.jpg'
          },
          {
            nm: 3,
            name: '03',
            src: '/static/assets/04.jpg'
          }
        ]
      }
    },
    mounted () {
      this.ulss.addEventListener('transitionend', () => {
        if (this.num === 1) {
          this.imgs.push(this.imgs.shift())
        } else {
          this.imgs.unshift(this.imgs.pop())
        }
        this.ulss.style.transition = 'transform 0ms ease-out'
        this.ulss.style.transform = 'translateX(0px)'
      })
      this.timer = setInterval(() => {
        this.num = 1
        this.ulss.style.transition = 'transform 1600ms ease-out'
        this.ulss.style.transform = 'translateX(-660px)'
      }, 1000)
    },
    methods: {
      changeLeft () {
        this.num = 1
        this.ulss.style.transition = 'transform 1000ms ease-out'
        this.ulss.style.transform = 'translateX(-660px)'
        console.log(typeof this.ulss.style.transform)
      },
      changeRight () {
        this.num = 0
        this.ulss.style.transition = 'transform 1000ms ease-out'
        this.ulss.style.transform = 'translateX(660px)'
      },
      stop () {
        clearInterval(this.timer)
      },
      start () {
        this.timer = setInterval(() => {
          this.num = 1
          this.ulss.style.transition = 'transform 1600ms ease-out'
          this.ulss.style.transform = 'translateX(-660px)'
        }, 1000)
      },
      go (index) {
        var va = this.imgs.filter((item) => {
          return (item.nm ===index)
        })[0]
        console.log(typeof va)
        var ix = this.imgs.indexOf(va)
        // console.log(this.imgs.indexOf(va))
        this.imgs.splice(1,0,this.imgs.splice(ix,1)[0])
        // console.log(this.imgs)
      }
    },
    computed: {
      ulss () {
        return document.getElementsByClassName('ul1')[0]
      }
    },
    watch: {}
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  img {
    width: 660px;
    height: 258px;
  }

  ul {
    list-style-type: none;
  }

  .slider {
    width: 660px;
    margin: 50px auto;
    position: relative;
  }

  .slider_wrapper {
    height: 260px;
    position: relative;
    overflow: hidden;
  }
  .slider_wrapper ul {
    width: 500%;
    position: absolute;
    left: -660px;
  }

  .slider_item {
    float: left;
    width: 660px;
  }

  .slider-control {
    width: 30px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    background-color: transparent;
    border: 1px solid #5e5e5e;
    outline: none;
  }

  .slider-control-prev {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -20px;
  }

  .slider-control-next {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -20px;
  }

  .st {
    position: absolute;
    left: 40%;
    /*margin-left: 20px;*/
    margin-bottom: 10px;
    bottom: 0;
  }

  .site {
    float: left;
    width: 15px;
    height: 15px;
    margin: 0 10px 0 10px;
    border-radius: 50%;
    background-color: #c7ddef;
    border: 1px solid #b8b8b8;
    cursor: pointer;
  }

  .site:hover {
    background-color: #b8b8b8;
  }
</style>
