<template>
  <div class="container">
    <pc-button  @click="go">快速上手 →</pc-button>
    <hr>
    <div class="card c1">
      <h2>简明优先</h2>
      <p>用法简单,构建声明式UI框架</p>
    </div>
    <div class="card c2">
      <h2>Vue 驱动</h2>
      <p>享用 Vue + webpack 开发环境</p>
    </div>
    <div class="card">
      <h2>源码易读</h2>
      <p>源码简单通俗，容易理解看懂</p>
    </div>
    <div class="footer">MIT Licensed | Copyright © 2019-present guakun</div>
  </div>
</template>

<script>
import Button from '../../../src/button'
export default {
  components: {
    'pc-button': Button
  },
  mounted() {
    // console.log(this.$page.frontmatter);
  },
  data() {
    return {
      link: '/install/',
    }
  },
  methods: {
    go() {
      if (/^http/.test(this.link)) {
        window.open(this.link)
      } else {
        this.$router.push(this.link)
      }
    }
  }
}
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .card {
    text-align: left;
    display: inline-block;
    padding: 13px;
    margin: 30px;
    color: rgba(72, 110, 142, 0.5);
    line-height: 1.7px;
  }
  .card h2,
  .card p {
    color: #4e6e8e;
  }
  @media (max-width: 970px) {
    .card {
      display: block;
    }
  }
  .footer {
    margin-top: 1rem;
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
  }
</style>
