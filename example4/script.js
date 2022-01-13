const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
});
