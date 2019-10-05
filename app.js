// app.js
import Vue from 'vue'
import { createRouter } from './router'

// export a factory function for creating fresh app, router and store
// instances
export function createApp () {
  // create router instance
  const router = createRouter()

  const app = new Vue({
    // inject router into root Vue instance
    router,
    render: h => h({
      template: `
        <div id="app">
          <router-view></router-view>
        </div>
      `,
    })
  })

  // return both the app and the router
  return { app, router }
}
