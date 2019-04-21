<template>
  <div class="button-demo-box">
    <gua-button type="normal">默认文字</gua-button>
    <gua-button type="normal" icon="weiguijubao">默认文字</gua-button>
    <gua-button type="normal" icon="weiguijubao" icon-position="right">默认文字</gua-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import GuaButton from '../../../src/gua-button'

export default {
  components: {
    GuaButton
  },
  data () {
    return {
      content: `
      <gua-button type="normal">默认文字</gua-button>
      <gua-button type="normal" icon="weiguijubao">默认文字</gua-button>
      <gua-button type="normal" icon="weiguijubao" icon-position="right">默认文字</gua-button>
      `.replace(/\t+| +/g, '').trim()
    }
  }
}
</script>
