<template>
  <i
    ref="icon"
    v-tooltip="tooltip"
    :class="classes"
    :data-original-title="tooltip"
    :data-html="html"
    class="material-icons"
    @click="onClick"
  >
    {{ name }}
  </i>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Icon extends Vue {
  @Prop({ type: String, required: true }) readonly name: string
  @Prop({ type: [String, Object], default: '' }) readonly classes: string | object
  @Prop({ type: [String, Boolean], default: false }) readonly tooltip: string | boolean
  @Prop({ type: [String, Boolean], default: false }) readonly html: string | boolean

  get toggle () {
    return this.tooltip ? 'tooltip' : ''
  }

  onClick ($event) {
    this.$emit('click', $event)
  }
}
</script>
