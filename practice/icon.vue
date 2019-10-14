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

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    classes: {
      type: [String, Object],
      default: ''
    },
    tooltip: {
      type: [String, Boolean],
      default: false
    },
    html: {
      type: [String, Boolean],
      default: false
    }
  },
  computed: {
    toggle () {
      return this.tooltip ? 'tooltip' : ''
    }
  },
  methods: {
    onClick ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>
