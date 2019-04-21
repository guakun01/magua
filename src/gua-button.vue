<template>
  <button :class="{[type]: true, [`icon-${iconPosition}`]: true}" class="gua-button">
    <svg v-if="icon" class="gua-icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    icon: String,
    iconPosition: String,
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

.gua-button { font-size: $font-size; line-height: 14px; height: $button-height;
  padding: 0 16px; border-radius: $border-radius; border: 1px solid $button-border-color;
  background: white; color: $lightDark; display: inline-flex; justify-content: center; align-items: center;
  vertical-align: middle;
  svg {
    fill: $lightDark;
  }
  > .gua-icon { order: 1; margin-right: .3em; }
  > .content { order: 2; }
  &.icon-right {
    > .content { order: 1; }
    > .gua-icon { order: 2; margin-left: .3em; margin-right: 0; }
  }
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
    svg {
      fill: $white;
    }
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
    svg {
      fill: $blue;
    }
    border-color: $blue;
  }
  &.normal:hover {
    background: $lightestBlue;
  }
  &.normal:active {
    background: $blue;
    color: $white;
    svg {
      fill: $white;
    }
  }
  &.danger {
    color: $red;
    svg {
      fill: $red;
    }
    border-color: $red;
  }
  &.danger:hover {
    background: $lightestRed;
  }
  &.danger:active {
    background: $red;
    color: $white;
    svg {
      fill: $white;
    }
  }
}
</style>
