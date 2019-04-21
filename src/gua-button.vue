<template>
    <button :class="type" class="gua-button">默认文字</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$button-height: 30px;
$border-radius: 2px;
/*下面是颜色的定义*/
/*主色*/
$blue: #3187f6;
$darkBlue: #2c79dc;
$lightBlue: #5593fa;
$lightestBlue: #ebf3ff;

/*辅色*/
$dark: #333;
$lightDark: #666;
$lightlightDark: #999;
$lightlightlightDark: #ccc;
$button-border-color: #d9d9d9;
$button-background-hover: #f4f4f4;

/*红色*/
$red: #e7422b;
$lightestRed: #fcecea;

/*绿色*/
$green: #00a753;

/*黄色*/
$yellow: #ffbf00;

/*白色*/
$white: #ffffff;

.gua-button {
  font-size: $font-size;
  line-height: 14px;
  height: $button-height;
  padding: 8px 16px;
  border-radius: $border-radius;
  border: 1px solid $button-border-color;
  background: white;
  color: $lightDark;
  &:hover {
    background: $button-background-hover;
  }
  &:active {
    background: $lightlightlightDark;
  }
  &:focus {
    outline: none;
  }
  &.primary {
    background: $blue;
    color: $white;
    border-color: $blue;
  }
  &.primary:hover {
    background: $lightBlue;
  }
  &.primary:active {
    background: $darkBlue;
  }
  &.normal {
    color: $blue;
    border-color: $blue;
  }
  &.normal:hover {
    background: $lightestBlue;
  }
  &.normal:active {
    background: $blue;
    color: $white;
  }
  &.danger {
    color: $red;
    border-color: $red;
  }
  &.danger:hover {
    background: $lightestRed;
  }
  &.danger:active {
    background: $red;
    color: $white;
  }
}
</style>
