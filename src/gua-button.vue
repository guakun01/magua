<template>
  <button :class="{[type]: true, [`icon-${iconPosition}`]: true, loading}" class="gua-button" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import GIcon from './gua-icon'

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
  components: {
    GIcon,
  }
}
</script>

<style lang="scss" scoped>
@import "var";

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
  &.loading {
    color: $white;
    svg {
      fill: $white;
    }
    background: $lightlightlightDark;
    border-color: $lightlightlightDark;
  }
  &.loading:hover {
    color: $white;
    svg {
      fill: $white;
    }
    background: $lightlightlightDark;
    border-color: $lightlightlightDark;
  }
  &.loading:active {
    color: $white;
    svg {
      fill: $white;
    }
    background: $lightlightlightDark;
    border-color: $lightlightlightDark;
  }
}
</style>
