<template>
  <div class="button-demo-box">
    <gua-button>默认文字</gua-button>
    <gua-button>默认文字</gua-button>
    <gua-button>默认文字</gua-button>
    <gua-button>默认文字</gua-button>
    <pre>
      <code> {{ content }} </code>
    </pre>
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
      <gua-button>默认文字</gua-button>
      <gua-button>默认文字</gua-button>
      <gua-button>默认文字</gua-button>
      <gua-button>默认文字</gua-button>
      `
    }
  }
}
</script>
