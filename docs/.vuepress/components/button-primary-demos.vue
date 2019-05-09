<template>
  <div class="button-demo-box">
    <gua-button type="primary">默认文字</gua-button>
    <gua-button type="primary" icon="weiguijubao">默认文字</gua-button>
    <gua-button type="primary" icon="weiguijubao" icon-position="right">默认文字</gua-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import GuaButton from '../../../src/button'

export default {
  components: {
    GuaButton
  },
  data () {
    return {
      content: `
      <gua-button type="primary">默认文字</gua-button>
      <gua-button type="primary" icon="weiguijubao">默认文字</gua-button>
      <gua-button type="primary" icon="weiguijubao" icon-position="right">默认文字</gua-button>
      `.replace(/\t+| +/g, '').trim()
    }
  }
}
</script>
