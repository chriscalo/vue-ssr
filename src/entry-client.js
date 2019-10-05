import { loadAsyncComponents } from '@akryum/vue-cli-plugin-ssr/client'

import { createApp } from './main'

createApp({
  async beforeApp ({
    router
  }) {
    await loadAsyncComponents({ router })
  },

  afterApp ({
    app,
      store,
  }) {
    store.replaceState(window.__INITIAL_STATE__)
    app.$mount('#app')
  }
})
