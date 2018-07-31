<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './views/Header'
  import Footer from './views/Footer'
  import Content from './views/content'
export default {
  data () {
    return {

    }
  },
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
