<template>
  <HeaderBlock title="НАША ПРОДУКЦИЯ" />
  <MainBlock />
</template>

<script>

import HeaderBlock from '@/components/blocks/HeaderBlock.vue'
import MainBlock from '@/components/blocks/MainBlock.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderBlock,
    MainBlock
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
