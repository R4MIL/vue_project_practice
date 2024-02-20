<template>
    <HeaderBlock descriptionItem/>
    <MainDescriptionBlock />
</template>

<script>
import HeaderBlock from '@/components/blocks/HeaderBlock.vue'
import MainDescriptionBlock from '@/components/blocks/MainDescriptionBlock.vue'

export default {
  name: 'DescriptionPage',
  components: {
    HeaderBlock,
    MainDescriptionBlock
  },
  props: {
  },
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
