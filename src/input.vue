<template>
  <div class="magua-input-wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event)"
           @input="$emit('input', $event)"
           @focus="$emit('focus', $event)"
           @blur="$emit('blur', $event)">
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'

export default {
  name: 'MaguaInput',
  components: { Icon },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "var";

  .magua-input-wrapper {
    font-size: $input-font-size;
    display: inline-flex;
    align-items: center;
    > *:not(:last-child) {
      margin-right: .5em;
    }

    > input {
      width: 240px;
      box-sizing: border-box;
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      padding: 0 8px;
      color: $dark;
      font-size: inherit;

      &:hover, &:focus {
        border-color: $blue;
      }

      &:focus {
        box-shadow: 0 0 2px 1px rgba(49, 135, 246, 0.50);
        outline: 0;
      }

      &[disabled] {
        background-color: $light;
      }

      &[disabled], &[disabled]:hover, &[disabled]:focus,
      &[readonly], &[readonly]:hover, &[readonly]:focus {
        border-color: $border-color;
        cursor: not-allowed;
        box-shadow: none;
      }
    }

    &.error {
      > input {
        border-color: $border-red;

        &:focus {
          box-shadow: 0 0 2px 1px rgba(230, 65, 44, 0.30);
        }
      }

      .icon-error {
        fill: $red;
      }

      .errorMessage {
        color: $red;
      }
    }
  }
</style>
