import { configure } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const context = require.context('../stories/', true, /^.*?\.ts$/)

function loadStories () {
  context.keys().forEach(filename => {
    context(filename)
  })
}

configure(loadStories, module)
