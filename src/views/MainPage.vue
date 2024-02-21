<template>
  <HeaderBlock title="НАША ПРОДУКЦИЯ" />
  <MainBlock />
</template>

<script>
import HeaderBlock from '@/components/blocks/HeaderBlock.vue'
import MainBlock from '@/components/blocks/MainBlock.vue'
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'MainPage',
  components: {
    HeaderBlock,
    MainBlock
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
