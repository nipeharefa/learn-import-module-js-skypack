import * as Vue from 'https://cdn.skypack.dev/vue@next/dist/vue.esm-browser.js?min';
import Ab from '/main.js';

const { createApp } = Vue;

const ComponentA = {
  data() {
    return { count: 1 }
},
  template: `
    <div>
    <h1>Hello Vue3 Child</h1>
    <p>{{ count }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
  `,
  mounted() {},
  methods: {
    reverseMessage() {
      this.count++
    }
  }
}

const RootComponent = {
    template: `
        <div>
          <h1>Hello Vue3</h1>
          <p>{{ count }}</p>
          <component-a></component-a>
        </div>
    `,
    data() {
        return { count: 4 }
    },
    components: {
        'component-a': ComponentA,
    }
    
}
const app = createApp(RootComponent)
const vm = app.mount('#app');