<template>
<div class="magua-input-wrapper">
  <input type="text">
</div>
</template>

<script>
export default {
  name: 'MaguaInput'
}
</script>

<style lang="scss" scoped>
@import "var";
.magua-input-wrapper {
  > input {
    box-sizing: border-box;
    height: $height;
    border: 1px solid $border-color;
  }
}
</style>
