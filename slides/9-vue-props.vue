<template>
  <h1>Test</h1>
</template>

<script>
export default {
  components: {
    Icon
  },
  props: {
    tap: {
      type: Object,
      required: true
    },
    renderSomething: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<script lang="ts">
import Icon from './components/icon.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

interface Tap {
  id: string
  payload: {}
  drops: object[]
}

@Component({
  components: {
    Icon
  }
})
export class Thing extends Vue {
  @Prop({ type: Object, required: true }) readonly tap: Tap
  @Prop({ type: Boolean, default: false }) readonly renderSomething: boolean
}
</script>