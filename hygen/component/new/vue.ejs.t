---
to: src/components/<%= category %>/<%= name %>.vue
---
<template>
  <div class="<%= h.changeCase.param(name) %>"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: '<%= name %>',
  components: {
    //
  },
  mixins: [],
  props: {
    prop: { type: String, required: true }
  },
  data: () => ({
    data: ''
  }),
  computed: {
    computed() {
      return {}
    }
  },
  mounted() {},
  methods: {}
})
</script>

<style lang="stylus" scoped>
// .<%= h.changeCase.param(name) %>
</style>
