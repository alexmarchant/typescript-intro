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
  },
  computed: {
    drops () {
      return this.tap.drops
    }
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    filterDraftDrops() {
      return this.tap.drops.filter(drop => drop.payload.status === 'Draft')
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
  drops: any[]
}

@Component({
  components: {
    Icon
  }
})
export class Thing extends Vue {
  @Prop({ type: Object, required: true }) readonly tap: Tap
  @Prop({ type: Boolean, default: false }) readonly renderSomething: boolean

  get drops (): object[] {
    return this.tap.drops
  }

  mounted () {
    console.log('mounted')
  }

  filterDraftDrops() {
    return this.tap.drops.filter(drop => drop.payload.status === 'Draft')
  }
}
</script>