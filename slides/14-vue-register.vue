<template>
  <h1>Test</h1>
</template>

<script>
export default {
  components: {
    Icon
  }
}
</script>

<script lang="ts">
import Icon from './components/icon.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Icon
  }
})
export class Thing extends Vue {}
</script>
