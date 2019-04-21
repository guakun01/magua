<template>
  <button :class="{[type]: true, [`icon-${iconPosition}`]: true}" class="gua-button" @click="$emit('click')">
    <gua-icon class="icon" v-if="icon && !loading" :name="icon"></gua-icon>
    <gua-icon v-if="loading" class="loading icon" name="loading"></gua-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
// import GIcon from './gua-icon'

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return (value === 'left' || value === 'right')
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  // components: {
  //   GIcon,
  // }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$button-height: 30px;
$border-radius: 2px;
/*下面是一些基本动画的定义*/
@keyframes spin {
  from{ transform: rotate(-360deg); }
  to { transform: rotate(0); }
}
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
  > .icon { order: 1; margin-right: .3em; }
  > .content { order: 2; }
  .loading {
    animation: spin 1s infinite linear;
  }
  &.icon-right {
    > .content { order: 1; }
    > .icon { order: 2; margin-left: .3em; margin-right: 0; }
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
