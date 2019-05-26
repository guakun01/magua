<template>
  <div class="button-demo-box">
    <span>姓名: </span>
    <gua-input></gua-input>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import GuaInput from '../../../src/input'

export default {
  components: {
    GuaInput
  },
  data () {
    return {
      content: `
      <gua-input></gua-input>
      `.replace(/\t+| +/g, '').trim()
    }
  }
}
</script>
