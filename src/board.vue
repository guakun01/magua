<template>
  <div id="board">
    <div class="title">这是一个画板</div>
    <h1 class="title">按钮</h1>
    <div class="box">
      <gua-button></gua-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MBoard',
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
