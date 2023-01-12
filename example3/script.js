const app = Vue.createApp({
  data() {
    return {
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
    }
  }
}).mount('#app');

