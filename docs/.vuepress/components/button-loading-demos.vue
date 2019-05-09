<template>
  <div class="button-demo-box">
    <div class="line">
      <gua-button type="primary" :loading="loadings[1]" @click="setLoading(1)">默认文字</gua-button>
      <gua-button type="primary" icon="weiguijubao"  :loading="loadings[2]" @click="setLoading(2)">默认文字</gua-button>
      <gua-button type="primary" icon="weiguijubao" icon-position="right"  :loading="loadings[3]" @click="setLoading(3)">默认文字</gua-button>
    </div>
    <pre><code>{{ content }}</code></pre>
    <div class="line">
      <gua-button type="" :loading="loadings[4]" @click="setLoading(4)">默认文字</gua-button>
      <gua-button type="" icon="weiguijubao" :loading="loadings[5]" @click="setLoading(5)">默认文字</gua-button>
      <gua-button type="" icon="weiguijubao" icon-position="right" :loading="loadings[6]" @click="setLoading(6)">默认文字</gua-button>
    </div>
    <pre><code>{{ content1 }}</code></pre>
    <div class="line">
      <gua-button type="normal" :loading="loadings[7]" @click="setLoading(7)">默认文字</gua-button>
      <gua-button type="normal" icon="weiguijubao" :loading="loadings[8]" @click="setLoading(8)">默认文字</gua-button>
      <gua-button type="normal" icon="weiguijubao" icon-position="right" :loading="loadings[9]" @click="setLoading(9)">默认文字</gua-button>
    </div>
    <pre><code>{{ content2 }}</code></pre>
    <div class="line">
      <gua-button type="danger" :loading="loadings[10]" @click="setLoading(10)">默认文字</gua-button>
      <gua-button type="danger" icon="weiguijubao" :loading="loadings[11]" @click="setLoading(11)">默认文字</gua-button>
      <gua-button type="danger" icon="weiguijubao" icon-position="right" :loading="loadings[12]" @click="setLoading(12)">默认文字</gua-button>
    </div>
    <pre><code>{{ content3 }}</code></pre>
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
      loadings: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
      },
      content: `
      <gua-button type="primary" :loading="loadings[1]" @click="setLoading(1)">默认文字</gua-button>
      <gua-button type="primary" icon="weiguijubao"  :loading="loadings[2]" @click="setLoading(2)">默认文字</gua-button>
      <gua-button type="primary" icon="weiguijubao" icon-position="right"  :loading="loadings[3]" @click="setLoading(3)">默认文字</gua-button>
      `.replace(/\t+| +/g, '').trim(),
      content1: `
      <gua-button type="" :loading="loadings[4]" @click="setLoading(4)">默认文字</gua-button>
      <gua-button type="" icon="weiguijubao" :loading="loadings[5]" @click="setLoading(5)">默认文字</gua-button>
      <gua-button type="" icon="weiguijubao" icon-position="right" :loading="loadings[6]" @click="setLoading(6)">默认文字</gua-button>
      `.replace(/\t+| +/g, '').trim(),
      content2: `
      <gua-button type="normal" :loading="loadings[7]" @click="setLoading(7)">默认文字</gua-button>
      <gua-button type="normal" icon="weiguijubao" :loading="loadings[8]" @click="setLoading(8)">默认文字</gua-button>
      <gua-button type="normal" icon="weiguijubao" icon-position="right" :loading="loadings[9]" @click="setLoading(9)">默认文字</gua-button>
      `.replace(/\t+| +/g, '').trim(),
      content3: `
      <gua-button type="danger" :loading="loadings[10]" @click="setLoading(10)">默认文字</gua-button>
      <gua-button type="danger" icon="weiguijubao" :loading="loadings[11]" @click="setLoading(11)">默认文字</gua-button>
      <gua-button type="danger" icon="weiguijubao" icon-position="right" :loading="loadings[12]" @click="setLoading(12)">默认文字</gua-button>
      `.replace(/\t+| +/g, '').trim(),
    }
  },
  methods: {
    setLoading(num) {
      this.loadings[num] = true
      setTimeout(() => {
        this.loadings[num] = false
      }, 2000)
    }
  }
}
</script>

<style>
  .line + .line {
    margin-top: 16px;
  }
</style>
