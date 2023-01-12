// const app = Vue.createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app');

// setTimeout(
//   () => app.message = 'Bye Bye!',
//   2000,
// );

const app = Vue.createApp({
  data() {
    return {
      name: 'Vue'
    }
  },
  computed: {
    message: function() {
      return 'Hello ' + this.name
    }
  }
}).mount('#app');


setTimeout(() => app.name = 'Vue.js', 2000)
