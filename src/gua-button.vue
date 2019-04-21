<template>
  <button class="gua-button">默认文字</button>
</template>

<script>
export default {}
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

/*辅色*/
$dark: #333;

/*红色*/
$red: #e7422b;

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
  border: 1px solid $blue;
  background: $blue;
  color: $white;
  &:hover {
    background: $lightBlue;
  }
  &:active {
    background: $darkBlue;
  }
  &:focus {
    outline: none;
  }
}
</style>
