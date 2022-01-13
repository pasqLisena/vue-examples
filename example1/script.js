const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});

// setTimeout(
//   () => app.message = 'Bye Bye!',
//   2000,
// );

// const app = new Vue({
//   el: '#app',
//   data: { name: 'Vue' },
//   computed: {
//     message: function() {
//       return 'Hello ' + this.name
//     }
//   }
// });
//
// setTimeout(() => app.name = 'Vue.js', 2000)
