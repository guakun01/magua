<template>
  <div id="board">
    <div class="title">这是一个画板</div>
    <h1 class="title">按钮</h1>
    <div class="box">
      <div class="line">
        <gua-button type="primary" icon="settings">
          默认文字
        </gua-button>
        <gua-button type="primary" icon="settings" :loading="loading1" @click="toggleLoading1">
          默认文字
        </gua-button>
        <gua-button type="primary" icon="settings" icon-position="left">
          默认文字
        </gua-button>
        <gua-button type="primary" icon="settings" icon-position="right">
          默认文字
        </gua-button>
        <gua-button type="primary">
          默认文字
        </gua-button>
      </div>
      <div class="line">
        <gua-button type="normal" icon="settings">
          默认文字
        </gua-button>
        <gua-button type="normal">
          默认文字
        </gua-button>
        <gua-button type="normal" :loading="loading2" @click="toggleLoading2">
          默认文字
        </gua-button>
      </div>
      <div class="line">
        <gua-button icon="settings">
          默认文字
        </gua-button>
        <gua-button>
          默认文字
        </gua-button>
      </div>
      <div class="line">
        <gua-button type="danger" icon="settings">
          默认文字
        </gua-button>
        <gua-button type="danger">
          默认文字
        </gua-button>
      </div>
      <div class="line">
        <gua-button type="link">
          默认文字
        </gua-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MBoard',
  data: () => {
    return {
      loading1: false,
      loading2: false,
    }
  },
  methods: {
    toggleLoading1 () {
      this.loading1 = true
    },
    toggleLoading2 () {
      this.loading2 = true
    },
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-weight: bold;
}
.box {
  border: 1px solid gray;
  display: block;
  width: 700px;
  min-height: 400px;
  margin: 0 auto;
  padding: 20px;
  .line {
    margin: 10px 0;
    .gua-button + .gua-button {
      margin-left: 16px;
    }
  }
}

</style>

<style lang="scss">

  body {
    font: status-bar;
    font-size: 12px;
    line-height: 1; }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    margin: 0;
    font-weight: 400; }

  body, form, ul, ol, dl, dd, p {
    margin: 0; }

  ul, ol {
    list-style-type: none;
    padding: 0; }

  img {
    border: 0 none;
    vertical-align: bottom; }

  button, input, select, textarea {
    font-size: 1em;
    font-family: inherit; }

  a, a:hover {
    text-decoration: none; }
</style>
