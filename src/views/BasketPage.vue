<template>
  <HeaderBlock
    title="КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ"
    basketList
  />
  <MainBasketBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from '@/components/blocks/HeaderBlock.vue'
import MainBasketBlock from '@/components/blocks/MainBasketBlock.vue'
import FooterBlock from '@/components/blocks/FooterBlock.vue'
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'BasketPage',
  components: {
    HeaderBlock,
    MainBasketBlock,
    FooterBlock
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
