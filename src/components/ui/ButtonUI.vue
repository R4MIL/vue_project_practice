<template>
  <button class="button">{{ text }}</button>
</template>
<script>

export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
    rotate: {
      type: String,
      default: '0deg'
    },
    color: {
      type: String,
      default: 'var(--color-main)'
    },
    colorHover: {
      type: String,
      default: 'var(--color-main)'
    },
    text: {
      type: String,
      default: '+'
    },
    width: {
      type: String,
      default: '30px'
    },
    height: {
      type: String,
      default: '30px'
    },
    borderRadius: {
      type: String,
      default: '50%'
    },
    borderColorHover: {
      type: String,
      default: 'var(--color-dynamic)'
    },
    background: {
      type: String,
      default: 'transparent'
    },
    backgroundHover: {
      type: String,
      default: 'var(--color-dynamic)'
    },
    fontSize: {
      type: String,
      default: '27px'
    },
    fontWeight: {
      type: String,
      default: '400'
    }
  },
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    .button {
        width: v-bind(width);
        height: v-bind(height);
        background: v-bind(background);
        border-radius: v-bind(borderRadius);
        border: 1px solid v-bind(color);
        color: v-bind(color);
        transform: rotate(v-bind(rotate));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: v-bind(fontSize);
        font-weight: v-bind(fontWeight);
        cursor: pointer;
        &:hover {
            background: v-bind(backgroundHover);
            border-color: v-bind(borderColorHover);
            color: v-bind(colorHover);
        }
    }
</style>
