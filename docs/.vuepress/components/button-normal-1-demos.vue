<template>
  <div class="button-demo-box">
    <gua-button>默认文字</gua-button>
    <gua-button icon="weiguijubao">默认文字</gua-button>
    <gua-button icon="weiguijubao" icon-position="right">默认文字</gua-button>
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
      <gua-button>默认文字</gua-button>
      <gua-button icon="weiguijubao">默认文字</gua-button>
      <gua-button icon="weiguijubao" icon-position="right">默认文字</gua-button>
      `.replace(/\t+| +/g, '').trim()
    }
  }
}
</script>
