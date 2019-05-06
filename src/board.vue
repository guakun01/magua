<template>
  <div id="board">
    <g-date-picker></g-date-picker>
    <p>其他内容</p>
  </div>
</template>

<script>
import GDatePicker from './date-picker/date-picker'

export default {
  name: 'MBoard',
  components: {
    GDatePicker,
  },
  data: () => {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#board {
  padding: 60px;
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
