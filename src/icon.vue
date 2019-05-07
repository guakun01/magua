<template>
  <svg class="gua-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'

export default {
  name: 'MaguaIcon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.gua-icon {
  width: 1em;
  height: 1em;
}
</style>
