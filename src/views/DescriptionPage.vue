<template>
    <HeaderBlock descriptionItem/>
    <MainDescriptionBlock />
</template>

<script>
import HeaderBlock from '@/components/blocks/HeaderBlock.vue'
import MainDescriptionBlock from '@/components/blocks/MainDescriptionBlock.vue'
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'DescriptionPage',
  components: {
    HeaderBlock,
    MainDescriptionBlock
  },
  props: {
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const auth = computed(() => {
      return store.getters.getAuth
    })
    onBeforeMount(() => {
      if (auth.value === 'false') {
        router.push('/auth')
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
