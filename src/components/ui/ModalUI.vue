<template>
  <Modal class="container modal"
    :visible="isVisible"
    :closable="false"
    :okButton="{text:'ОК', onclick:cancel}">
    <div class="modal__content">{{ text }}</div>
  </Modal>
</template>

<script>
import { Modal } from 'usemodal-vue3'

export default {
  name: 'ModalUI',
  components: {
    Modal
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    isVisible: {
      type: Boolean
    },
    background: {
      type: String
    }
  },
  setup (props, { emit }) {
    const cancel = () => {
      emit('cancel')
    }
    return {
      cancel
    }
  }
}
</script>

<style lang="scss">
  .modal {
    .modal-vue3-header {
      display: none;
    }
    .modal-vue3-body {
      background: v-bind(background);
    }
    .modal-vue3-footer {
      background: v-bind(background);
      border-top: none !important;
      .modal-vue3-footer-cancel {
        display: none !important;
      }
      .modal-vue3-footer-ok {
        background: var(--color-dynamic) !important;
      }
    }
    &__content {
      background: v-bind(background);
      color: var(--color-dynamic);
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>
