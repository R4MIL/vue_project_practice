<template>
  <button :class="{
    'button': true,
    'buttonRectangle': rectangle,
    'buttonRectangleActive': rectangleActive
  }">{{ text }}</button>
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
    text: {
      type: String,
      default: '+'
    },
    rectangle: {
      type: Boolean,
      default: false
    },
    rectangleActive: {
      type: Boolean,
      default: false
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
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    border: 1px solid v-bind(color);
    color: v-bind(color);
    transform: rotate(v-bind(rotate));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 27px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      background: var(--color-dynamic);
      border-color: var(--color-dynamic);
      color: var(--color-main);
    }
  }
  .buttonRectangle {
    width: 200px;
    height: 42px;
    background: var(--color-dynamic);
    border-radius: 0%;
    border: 1px solid var(--color-dynamic);
    color: #131313;
    transform: rotate(v-bind(rotate));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: transparent;
      border-color: var(--color-dynamic);
      color: var(--color-dynamic);
    }
  }
  .buttonRectangleActive {
    width: 200px;
    height: 42px;
    background: transparent;
    border-radius: 0%;
    border: 1px solid var(--color-dynamic);
    color: var(--color-dynamic);
    transform: rotate(v-bind(rotate));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
  }
</style>
