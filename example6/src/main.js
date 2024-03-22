import {createApp} from 'vue/dist/vue.esm-bundler';
import Child  from './components/Child.vue';

const app = createApp({
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { Child }
}).mount('#app');

