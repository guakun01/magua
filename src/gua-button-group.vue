<template>
  <div class="gua-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "var";

.gua-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .gua-button {
    border-radius: 0;
    margin-left: -1px;
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
